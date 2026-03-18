"use client";
//#region Imports
import { Button } from "@heroui/react";
import { ArrowRightIcon, SparkleIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
//#endregion

export function PromoBanner() {
  const t = useTranslations("Promo");

  return (
    <motion.section
      className="relative py-2.5 bg-foreground border-b border-white/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* ICON - MESSAGE */}
          <div className="flex items-center gap-4">
            {/* LOGO ICON */}
            <motion.div
              className="hidden sm:flex shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-white/10 items-center justify-center overflow-hidden"
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              <Image
                alt="PowerVet"
                src="/content/logos/icon.webp"
                width={16}
                height={16}
                className="brightness-0 invert opacity-80"
              />
            </motion.div>

            {/* MESSAGE */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-primary/20 border border-primary/30 text-primary font-bold uppercase tracking-widest text-[10px]">
                <SparkleIcon weight="fill" className="w-3 h-3" />
                {t("badge")}
              </span>
              <p className="text-white/80 font-light">
                {t("text_prefix")}{" "}
                <strong className="text-white font-bold">
                  {t("text_highlight")}
                </strong>{" "}
                {t("text_suffix")}
              </p>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="shrink-0"
          >
            <Button
              size="sm"
              variant="ghost"
              className="text-white font-bold text-xs uppercase tracking-widest hover:bg-white/5 group"
            >
              {t("cta")}
              <ArrowRightIcon
                weight="bold"
                className="ml-2 w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
              />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
