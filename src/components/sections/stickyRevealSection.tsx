"use client";
//#region Imports
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
//#endregion

//#region Constants
const features = [
  {
    title: "Feline-First Handling",
    description:
      "Low-stress techniques designed specifically for cats, minimizing fear responses and improving both comfort and clinical outcomes.",
  },
  {
    title: "Structured Consultations",
    description:
      "Clear, step-by-step consultations that prioritize observation, listening, and informed decision-making — never rushed.",
  },
  {
    title: "Emotional Safety",
    description:
      "A calm environment engineered to reduce stress, because emotional wellbeing directly impacts physical health.",
  },
];
//#endregion

export default function StickyRevealSection() {
  //#region Hooks
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  //#endregion

  return (
    <section ref={containerRef} className="relative" id="our-approach">
      <div className="h-[400vh]">
        <div className="sticky top-0 h-screen flex items-center">
          <div className="px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* BADGE - TITLE - IMAGE */}
              <div className="lg:space-y-16">
                {/* BADGE - TITLE */}
                <div>
                  {/* BADGE */}
                  <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
                    Our Approach
                  </p>

                  {/* TITLE */}
                  <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
                    Feline care requires a
                    <br />
                    <span className="font-serif font-semibold">
                      different approach
                    </span>
                  </h2>
                </div>

                {/* IMAGE */}
                <Image
                  src="/content/images/approach.webp"
                  alt="Section image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto rounded-3xl hidden lg:flex"
                />
              </div>

              {/* FEATURES */}
              <div className="space-y-8">
                {features.map((feature, i) => {
                  const start = i / features.length;
                  const end = (i + 1) / features.length;

                  return (
                    <FeatureItem
                      key={feature.title}
                      feature={feature}
                      index={i}
                      progress={scrollYProgress}
                      start={start}
                      end={end}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({
  feature,
  index,
  progress,
  start,
  end,
}: {
  feature: { title: string; description: string };
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  //#region Hooks
  const opacity = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [0.3, 1, 1, 0.3]
  );
  const x = useTransform(progress, [start, start + 0.1], [20, 0]);
  //#endregion

  return (
    <motion.div
      style={{ opacity, x }}
      className="border-l-2 border-accent/30 pl-6"
    >
      <div className="flex items-baseline gap-4">
        <span className="font-mono tabular-nums text-accent">0{index + 1}</span>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
          {feature.title}
        </h3>
      </div>

      <p className="mt-2 text-muted-foreground font-light max-w-sm">
        {feature.description}
      </p>
    </motion.div>
  );
}
