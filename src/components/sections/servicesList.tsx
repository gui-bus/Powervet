"use client";
//#region Imports
import { Button } from "@heroui/react";
import {
  ArrowRightIcon,
  BrainIcon,
  ClockIcon,
  FirstAidIcon,
  MicroscopeIcon,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";
//#endregion

export function ServicesList() {
  const t = useTranslations("Specialties");

  //#region Constants
  const services = [
    {
      title: t("s1_title"),
      icon: FirstAidIcon,
      description: t("s1_description"),
      action: t("action"),
    },
    {
      title: t("s2_title"),
      icon: MicroscopeIcon,
      description: t("s2_description"),
      action: t("action"),
    },
    {
      title: t("s3_title"),
      icon: BrainIcon,
      description: t("s3_description"),
      action: t("action"),
    },
    {
      title: t("s4_title"),
      icon: ClockIcon,
      description: t("s4_description"),
      action: t("action"),
    },
  ];
  //#endregion

  return (
    <section
      className="bg-white py-32 border-y border-border"
      id="clinical-areas"
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* HEADER AREA */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <div className="max-w-2xl">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 mb-6 text-primary font-bold text-xs uppercase tracking-widest">
              <span className="w-8 h-px bg-primary/30" />
              {t("badge")}
            </div>

            {/* TITLE */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              {t("title")}
              <br />
              <span className="text-primary font-serif italic font-normal">
                {t("subtitle")}
              </span>
            </h2>
          </div>

          {/* DESCRIPTION */}
          <p className="text-lg text-muted-foreground font-light max-w-sm border-l-2 border-primary/10 pl-6 py-2">
            {t("description")}
          </p>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* SPECIALTIES LIST */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className="group relative bg-white border border-border rounded-2xl p-8 transition-all hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  {/* ICON & TEXT */}
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <service.icon weight="duotone" className="w-8 h-8" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-base font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* ACTION */}
                  <Link href="/#schedule" className="shrink-0">
                    <Button
                      variant="ghost"
                      className="text-primary font-bold hover:bg-primary/5 px-6"
                    >
                      {service.action}
                      <ArrowRightIcon
                        weight="bold"
                        className="ml-2 w-3.5 h-3.5"
                      />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* SIDE MEDIA */}
          <motion.div
            className="lg:col-span-5 sticky top-32"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl border border-border">
              <Image
                src="/content/images/catBg.webp"
                alt="Feline clinical environment"
                fill
                className="object-cover"
              />
              {/* MEDICAL OVERLAY DETAIL */}
              <div className="absolute top-8 left-8 right-8 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                <div className="text-xs font-bold uppercase tracking-widest mb-2 opacity-80">
                  {t("badge")}
                </div>
                <div className="text-xl font-serif italic">{t("quote")}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
