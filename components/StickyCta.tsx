"use client";

import { ArrowRight } from "lucide-react";
import type { Step } from "./DiscoverButton";

interface Props {
  steps: Step[];
  visible: boolean;
  onDiscover: () => void;
  onNavigate: (id: string) => void;
}

/** Mobile-only bottom bar that guides the user through the remaining steps. */
export default function StickyCta({ steps, visible, onDiscover, onNavigate }: Props) {
  const done = steps.filter((s) => s.done).length;
  const next = steps.find((s) => !s.done);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-ivory/95 px-5 py-3 backdrop-blur-md transition-transform duration-500 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-widest2 text-charcoal/50">
            {done} of {steps.length} chosen
          </p>
          <div className="mt-1.5 flex gap-1">
            {steps.map((s) => (
              <span
                key={s.id}
                className={`h-[3px] w-6 transition-colors duration-500 ${
                  s.done ? "bg-burgundy" : "bg-charcoal/15"
                }`}
              />
            ))}
          </div>
        </div>
        <button
          onClick={() => (next ? onNavigate(next.id) : onDiscover())}
          className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-[11px] font-semibold uppercase tracking-widest2 text-ivory"
        >
          {next ? `Next: ${next.label}` : "Discover"}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
