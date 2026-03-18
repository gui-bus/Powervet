"use client";
//#region Imports
import { cn } from "@heroui/react";
import {
  HeartbeatIcon,
  MagnifyingGlassIcon,
  PrescriptionIcon,
  StethoscopeIcon,
} from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import type React from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
//#endregion

export function HowItWorksSection() {
  //#region Hooks
  const t = useTranslations("Workflow");
  const { ref, isVisible } = useScrollAnimation(0.1);
  //#endregion

  //#region Constants
  const steps = [
    {
      icon: HeartbeatIcon,
      step: "01",
      title: t("step1_title"),
      description: t("step1_description"),
    },
    {
      icon: MagnifyingGlassIcon,
      step: "02",
      title: t("step2_title"),
      description: t("step2_description"),
    },
    {
      icon: StethoscopeIcon,
      step: "03",
      title: t("step3_title"),
      description: t("step3_description"),
    },
    {
      icon: PrescriptionIcon,
      step: "04",
      title: t("step4_title"),
      description: t("step4_description"),
    },
  ];
  //#endregion

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="px-6 lg:px-12 py-32 bg-[#F8FAFB] relative overflow-hidden"
      id="consultation-flow"
    >
      {/* DECORATIVE CLINICAL GRID */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* HEADER AREA */}
      <div
        className={cn(
          "text-center mb-32 transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        )}
      >
        {/* BADGE */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
            {t("badge")}
          </span>
        </div>

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-foreground">
          {t("title")}{" "}
          <span className="text-primary font-serif italic font-normal">
            {t("subtitle")}
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          {t("description")}
        </p>
      </div>

      {/* STEPS PIPELINE */}
      <div className="relative max-w-7xl mx-auto">
        {/* HORIZONTAL CONNECTOR (DESKTOP) */}
        <div className="hidden lg:block absolute top-12 left-[5%] right-[5%] h-0.5 bg-linear-to-r from-transparent via-primary/20 to-transparent" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className={cn(
                  "relative flex flex-col items-center text-center transition-all duration-1000",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12",
                )}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* ICON & COUNTER */}
                <div className="relative mb-10">
                  <div className="w-24 h-24 rounded-2xl bg-white border border-border flex items-center justify-center shadow-xl shadow-black/5 relative z-10">
                    <Icon weight="duotone" className="w-10 h-10 text-primary" />
                  </div>
                  {/* STEP NUMBER CHIP */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-lg border-4 border-[#F8FAFB] z-20">
                    {step.step}
                  </div>
                  {/* PULSE EFFECT */}
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl animate-pulse -z-10" />
                </div>

                {/* CONTENT */}
                <h3 className="text-xl font-bold tracking-tight mb-4 text-foreground">
                  {step.title}
                </h3>
                <div className="w-12 h-1 bg-primary/10 rounded-full mb-6 mx-auto" />
                <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed px-4">
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
