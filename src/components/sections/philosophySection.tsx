"use client";
import { HouseIcon, LeafIcon, MicroscopeIcon } from "@phosphor-icons/react";
//#region Imports
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
//#endregion

export function PhilosophySection() {
  const t = useTranslations("Philosophy");

  //#region Constants
  const features = [
    {
      icon: LeafIcon,
      title: t("step1_title"),
      description: t("step1_description"),
    },
    {
      icon: MicroscopeIcon,
      title: t("step2_title"),
      description: t("step2_description"),
    },
    {
      icon: HouseIcon,
      title: t("step3_title"),
      description: t("step3_description"),
    },
  ];
  //#endregion

  return (
    <section
      id="our-approach"
      className="relative bg-white py-32 overflow-hidden border-b border-border"
    >
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* HEADER */}
        <motion.div
          className="max-w-3xl mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
              {t("badge")}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
            {t("title")}
            <br />
            <span className="text-primary font-serif italic font-normal">
              {t("subtitle")}
            </span>
          </h2>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* IMAGE COLUMN */}
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-border">
              <Image
                src="/content/images/approach.webp"
                alt="Veterinary clinical approach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>

          {/* FEATURES COLUMN */}
          <motion.div 
            className="lg:col-span-7 grid gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {features.map((feature, _i) => (
              <motion.div

                key={feature.title}
                variants={fadeInUp}
                className="group relative bg-[#F8FAFB] border border-border rounded-[2rem] p-10 transition-all hover:bg-white hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* ICON */}
                  <div className="w-16 h-16 rounded-2xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <feature.icon weight="duotone" className="w-8 h-8" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-xl">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
