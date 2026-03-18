"use client";
//#region Imports
import {
  ArrowRightIcon,
  CalendarCheckIcon,
  ShieldCheckIcon,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

//#endregion

//#region Animations
const fadeInUp: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};
//#endregion

export function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center bg-[#F8FAFB] overflow-hidden"
    >
      {/* DECORATIVE CLINICAL TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--foreground) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* CONTENT COLUMN */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* ACCREDITED BADGE */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/10 border border-primary/20 mb-8"
            >
              <ShieldCheckIcon weight="fill" className="text-primary w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                {t("accredited")}
              </span>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-bold tracking-tight text-foreground leading-[1.05] mb-8"
            >
              {t("title")}
              <br />
              <span className="text-primary font-serif italic font-normal">
                {t("subtitle")}
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeInUp}
              className="text-lg lg:text-xl text-muted-foreground font-light leading-relaxed mb-12 max-w-xl"
            >
              {t("description")}
            </motion.p>

            {/* ACTIONS */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <a
                href="#schedule"
                className="w-full sm:w-auto h-16 px-10 rounded-xl bg-primary text-white font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-[0.98]"
              >
                <CalendarCheckIcon weight="bold" className="w-5 h-5" />
                {t("request_appointment")}
              </a>
              <a
                href="#our-approach"
                className="group flex items-center gap-2 text-foreground font-bold hover:text-primary transition-colors"
              >
                {t("explore_specialties")}
                <ArrowRightIcon
                  weight="bold"
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            {/* CLINICAL METRICS */}
            <motion.div
              variants={fadeInUp}
              className="mt-16 pt-12 border-t border-border flex flex-wrap gap-12"
            >
              <div>
                <div className="text-3xl font-bold text-foreground">
                  {t("metric_patients_val")}
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  {t("metric_patients")}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">
                  {t("metric_doctors_val")}
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  {t("metric_doctors")}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">
                  {t("metric_trust_val")}
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                  {t("metric_trust")}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* VISUAL COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* MAIN IMAGE CONTAINER */}
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-border shadow-2xl">
              <Image
                src="/content/images/heroBackground.webp"
                alt="Modern Feline Clinical Practice"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
            </div>

            {/* FLOATING DETAIL CARD */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-white border border-border p-6 rounded-3xl shadow-2xl z-20 max-w-60"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheckIcon weight="fill" className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold leading-tight">
                  {t("detail_title")}
                </div>
              </div>
              <p className="text-[10px] leading-relaxed text-muted-foreground font-light italic">
                {t("detail_desc")}
              </p>
            </motion.div>

            {/* DECORATIVE RING */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/5 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
