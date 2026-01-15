"use client";
//#region Imports
import { cn } from "@heroui/react";
import {
  HandPointingIcon,
  EyeIcon,
  StethoscopeIcon,
  ChatCircleTextIcon,
} from "@phosphor-icons/react";
import type React from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
//#endregion

//#region Constants
const steps = [
  {
    icon: HandPointingIcon,
    step: "01",
    title: "Gentle arrival",
    description:
      "A calm reception designed to minimize stimulation and reduce stress from the very first moment.",
  },
  {
    icon: EyeIcon,
    step: "02",
    title: "Observation first",
    description:
      "Before touching, we observe posture, behavior, and subtle signals that guide a more precise examination.",
  },
  {
    icon: StethoscopeIcon,
    step: "03",
    title: "Focused examination",
    description:
      "A careful physical exam performed with minimal restraint, respecting the cat’s comfort and boundaries.",
  },
  {
    icon: ChatCircleTextIcon,
    step: "04",
    title: "Clinical discussion",
    description:
      "Findings are explained clearly, questions are welcomed, and next steps are defined together.",
  },
];
//#endregion

export function HowItWorksSection() {
  //#region Hooks
  const { ref, isVisible } = useScrollAnimation(0.1);
  //#endregion

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="px-6 lg:px-12 py-20"
      id="consultation-flow"
    >
      {/* BADGE - TITLE - DESCRIPTION */}
      <div
        className={cn(
          "text-center mb-24 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {/* BADGE */}
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-8 h-px bg-accent" />
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
            Consultation Flow
          </span>
          <div className="w-8 h-px bg-accent" />
        </div>

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
          How a consultation{" "}
          <span className="font-serif italic font-normal text-muted-foreground">
            works
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
          A calm, structured process designed around feline comfort and clinical
          accuracy.
        </p>
      </div>

      {/* STEPS */}
      <div className="relative">
        <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-px bg-linear-to-r from-transparent via-border to-transparent" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className={cn(
                  "relative text-center transition-all duration-1000",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="relative inline-flex items-center justify-center mb-8">
                  <div className="absolute inset-0 w-24 h-24 rounded-full bg-accent/5" />
                  <div className="relative w-20 h-20 rounded-full bg-background border-2 border-foreground flex items-center justify-center shadow-premium">
                    <Icon
                      weight="duotone"
                      className="w-8 h-8 text-foreground"
                    />
                  </div>
                  <span className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-accent text-accent-foreground text-xs font-mono font-bold flex items-center justify-center shadow-lg">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl lg:text-2xl font-semibold tracking-tight mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
