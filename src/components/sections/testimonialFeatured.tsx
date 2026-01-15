"use client";
//#region Imports
import { QuotesIcon } from "@phosphor-icons/react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
//#endregion

export function TestimonialFeatured() {
  //#region Hooks
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const imageY = useSpring(useTransform(scrollYProgress, [0, 1], [120, 0]), {
    stiffness: 80,
    damping: 20,
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const contentX = useSpring(useTransform(scrollYProgress, [0, 1], [80, 0]), {
    stiffness: 70,
    damping: 18,
  });
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  const quoteRotate = useTransform(scrollYProgress, [0, 1], [-15, 0]);
  const quoteOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  //#endregion

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-accent py-28 md:py-36 text-white px-6 lg:px-12"
      id="founder-quote"
    >
      {/* IMAGE - OFFSET PANEL - ICONS - QUOTE - AUTHOR */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          className="grid grid-cols-1 items-center gap-20 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {/* IMAGE - OFFSET PANEL */}
          <motion.div
            variants={staggerItem}
            style={{ y: imageY, scale: imageScale }}
            className="relative mx-auto w-full max-w-md will-change-transform"
          >
            {/* IMAGE */}
            <div className="relative h-135 w-full overflow-hidden rounded-[2.75rem]">
              <Image
                src="/content/images/alexandraWilliams.webp"
                alt="Dr. Alexandra Williams"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* OFFSET PANEL */}
            <motion.div
              style={{ opacity: quoteOpacity }}
              className="absolute -bottom-8 -right-8 -z-10 h-full w-full rounded-[2.75rem] border border-white/20 bg-white/5 backdrop-blur-md"
            />
          </motion.div>

          {/* ICONS - QUOTE - AUTHOR */}
          <motion.div
            variants={staggerItem}
            style={{ x: contentX, opacity: contentOpacity }}
            className="relative will-change-transform"
          >
            {/* ICON */}
            <motion.div
              style={{ rotate: quoteRotate, opacity: quoteOpacity }}
              className="absolute -top-8 -left-8"
            >
              <QuotesIcon className="h-16 w-16 text-white/20" />
            </motion.div>

            {/* ICON */}
            <motion.div
              style={{ rotate: quoteRotate, opacity: quoteOpacity }}
              className="absolute -bottom-8 -right-8 rotate-180"
            >
              <QuotesIcon className="h-16 w-16 text-white/20" />
            </motion.div>

            {/* QUOTE - AUTHOR */}
            <div className="rounded-2xl border border-white/15 bg-white/10 p-10 backdrop-blur-xl">
              {/* QUOTE */}
              <blockquote className="text-balance text-2xl font-medium leading-relaxed md:text-3xl">
                “Every cat that comes through our doors is treated as an
                individual — with time, attention, and respect for their unique
                needs. Our mission has always been to build long-term
                relationships with families who value thoughtful, compassionate
                veterinary care.”
              </blockquote>

              {/* AUTHOR */}
              <div className="mt-10">
                <div className="text-lg font-semibold">
                  Dr. Alexandra Williams
                </div>
                <div className="text-white/70">Founder & Lead Veterinarian</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
