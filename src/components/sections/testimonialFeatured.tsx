"use client";
//#region Imports
import { QuotesIcon } from "@phosphor-icons/react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
//#endregion

export function TestimonialFeatured() {
  //#region Hooks
  const t = useTranslations("Testimonial");
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const imageY = useSpring(useTransform(scrollYProgress, [0, 1], [80, 0]), {
    stiffness: 80,
    damping: 25,
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  //#endregion

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-32 md:py-48 px-6 lg:px-12 border-b border-border"
      id="founder-quote"
    >
      {/* DECORATIVE CLINICAL TEXTURE */}
      <div
        className="absolute top-0 right-0 w-[40%] h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative container mx-auto">
        <motion.div
          className="grid grid-cols-1 items-center gap-16 lg:gap-32 md:grid-cols-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {/* IMAGE MEDIA AREA */}
          <motion.div
            variants={staggerItem}
            style={{ y: imageY, scale: imageScale }}
            className="relative md:col-span-5 will-change-transform"
          >
            {/* MAIN IMAGE */}
            <div className="relative aspect-4/5 overflow-hidden rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border border-border">
              <Image
                src="/content/images/alexandraWilliams.webp"
                alt={`${t("author")} — ${t("role")}`}
                fill
                priority
                className="object-cover grayscale-[0.3] brightness-[1.05]"
              />
              {/* IMAGE VIGNETTE */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>

            {/* FLOATING PRACTICE STAT */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 p-6 rounded-2xl bg-white border border-border shadow-xl backdrop-blur-sm z-10"
            >
              <div className="text-3xl font-bold text-primary mb-1">
                {t("stat_val")}
              </div>
              <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] leading-tight">
                {t("stat")}
              </div>
            </motion.div>
          </motion.div>

          {/* CONTENT AREA */}
          <motion.div
            variants={staggerItem}
            style={{ opacity: contentOpacity }}
            className="md:col-span-7 flex flex-col justify-center relative"
          >
            {/* BADGE */}
            <div className="inline-flex items-center gap-3 mb-10 text-primary font-bold text-xs uppercase tracking-widest">
              <span className="w-12 h-0.5 bg-primary" />
              {t("badge")}
            </div>

            {/* QUOTE COMPONENT */}
            <div className="relative">
              <QuotesIcon
                weight="fill"
                className="absolute -top-10 -left-10 h-20 w-20 text-primary opacity-[0.05] pointer-events-none"
              />

              <blockquote className="text-balance text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-foreground mb-12 relative z-10">
                “{t("quote")}”
              </blockquote>

              <div className="flex flex-col gap-2">
                <div className="text-xl font-bold text-foreground">
                  {t("author")}
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="text-sm font-medium uppercase tracking-widest text-primary/80">
                    {t("role")}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-border" />
                  <span className="text-sm italic">{t("credentials")}</span>
                </div>
              </div>
            </div>

            {/* PRACTICE SEAL (DECORATIVE) */}
            <div className="mt-16 w-16 h-16 rounded-full border-2 border-primary/10 flex items-center justify-center opacity-30">
              <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary/20" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
