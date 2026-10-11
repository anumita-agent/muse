"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PersonalitySelector from "@/components/PersonalitySelector";
import StyleSelector from "@/components/StyleSelector";
import PresenceSelector from "@/components/PresenceSelector";
import OccasionSelector from "@/components/OccasionSelector";
import DiscoverButton, { type Step } from "@/components/DiscoverButton";
import StyleLoading, { LOADING_DURATION_MS } from "@/components/StyleLoading";
import StyleProfile from "@/components/StyleProfile";
import RecommendationGrid from "@/components/RecommendationGrid";
import ProductDetails from "@/components/ProductDetails";
import StickyCta from "@/components/StickyCta";
import Footer from "@/components/Footer";
import { getRecommendations } from "@/utils/recommendation";
import type {
  Occasion,
  Personality,
  Presence,
  Recommendation,
  Style,
  UserSelections,
} from "@/types";

function toggle<T>(list: T[], value: T): T[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function scrollToId(id: string) {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [selectedPersonalities, setSelectedPersonalities] = useState<Personality[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<Style[]>([]);
  const [selectedPresence, setSelectedPresence] = useState<Presence[]>([]);
  const [selectedOccasion, setSelectedOccasion] = useState<Occasion | null>(null);

  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [isDiscovering, setIsDiscovering] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showError, setShowError] = useState(false);
  const [runId, setRunId] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Recommendation | null>(null);
  const [saved, setSaved] = useState<Set<string>>(new Set());
  const [pastHero, setPastHero] = useState(false);

  const selections: UserSelections = useMemo(
    () => ({
      personalities: selectedPersonalities,
      styles: selectedStyles,
      presence: selectedPresence,
      occasion: selectedOccasion,
    }),
    [selectedPersonalities, selectedStyles, selectedPresence, selectedOccasion],
  );

  const steps: Step[] = [
    { id: "personality", label: "Personality", done: selectedPersonalities.length > 0 },
    { id: "style", label: "Style", done: selectedStyles.length > 0 },
    { id: "presence", label: "Presence", done: selectedPresence.length > 0 },
    { id: "occasion", label: "Occasion", done: selectedOccasion !== null },
  ];
  const allDone = steps.every((s) => s.done);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDiscovering ? "hidden" : "";
  }, [isDiscovering]);

  const handleDiscover = useCallback(async () => {
    if (isDiscovering) return;
    if (!allDone) {
      setShowError(true);
      scrollToId("discover");
      return;
    }
    setShowError(false);
    setIsDiscovering(true);

    const [recs] = await Promise.all([
      getRecommendations(selections, 3),
      new Promise<void>((resolve) => setTimeout(resolve, LOADING_DURATION_MS)),
    ]);

    setRecommendations(recs);
    setRunId((n) => n + 1);
    setShowResults(true);
    setIsDiscovering(false);
    setTimeout(() => scrollToId("results"), 150);
  }, [allDone, isDiscovering, selections]);

  const handleNavigate = (id: string) => {
    if (id === "collection") scrollToId(showResults ? "collection" : "discover");
    else scrollToId(id);
  };

  const toggleSave = (id: string) =>
    setSaved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const closeDetails = useCallback(() => setSelectedProduct(null), []);

  return (
    <>
      <Navbar onNavigate={handleNavigate} wishlistCount={saved.size} />
      <main>
        <Hero onDiscover={() => scrollToId("personality")} />
        <PersonalitySelector
          selected={selectedPersonalities}
          onToggle={(v) => setSelectedPersonalities((s) => toggle(s, v))}
        />
        <StyleSelector
          selected={selectedStyles}
          onToggle={(v) => setSelectedStyles((s) => toggle(s, v))}
        />
        <PresenceSelector
          selected={selectedPresence}
          onToggle={(v) => setSelectedPresence((s) => toggle(s, v))}
        />
        <OccasionSelector selected={selectedOccasion} onSelect={setSelectedOccasion} />
        <DiscoverButton
          steps={steps}
          showError={showError}
          onDiscover={handleDiscover}
          onNavigate={scrollToId}
        />

        {showResults && (
          <>
            <StyleProfile selections={selections} />
            <RecommendationGrid
              recommendations={recommendations}
              runId={runId}
              saved={saved}
              onToggleSave={toggleSave}
              onOpen={setSelectedProduct}
              onRefine={() => scrollToId("personality")}
            />
          </>
        )}
      </main>
      <Footer />

      <StickyCta
        steps={steps}
        visible={pastHero && !showResults && !isDiscovering && !selectedProduct}
        onDiscover={handleDiscover}
        onNavigate={scrollToId}
      />
      <ProductDetails rec={selectedProduct} onClose={closeDetails} />
      {isDiscovering && <StyleLoading />}
    </>
  );
}
