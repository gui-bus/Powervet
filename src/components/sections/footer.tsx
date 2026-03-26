"use client";
//#region Imports
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  WarningCircleIcon,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
//#endregion

export function Footer() {
  const t = useTranslations("Footer");

  //#region Constants
  const navigation = {
    specialties: [
      { name: t("links.preventive"), href: "#clinical-areas" },
      { name: t("links.internal"), href: "#clinical-areas" },
      { name: t("links.behavioral"), href: "#clinical-areas" },
      { name: t("links.geriatric"), href: "#clinical-areas" },
    ],
    practice: [
      { name: t("links.methodology"), href: "#our-approach" },
      { name: t("links.workflow"), href: "#consultation-flow" },
      { name: t("links.team"), href: "#founder-quote" },
      { name: t("links.library"), href: "#clinical-insights" },
    ],
    resources: [
      { name: t("links.portal"), href: "#schedule" },
      { name: t("links.pharmacy"), href: "#" },
      { name: t("links.results"), href: "#" },
      { name: t("links.emergency"), href: "#" },
    ],
    legal: [
      { name: t("links.privacy"), href: "#" },
      { name: t("links.terms"), href: "#" },
      { name: t("links.ethics"), href: "#" },
    ],
  };

  const social = [
    { name: "Instagram", icon: InstagramLogoIcon, href: "#" },
    { name: "Facebook", icon: FacebookLogoIcon, href: "#" },
    { name: "Twitter", icon: TwitterLogoIcon, href: "#" },
  ];
  //#endregion

  return (
    <footer className="bg-white py-24 border-t border-border" id="footer">
      <div className="container mx-auto px-6 lg:px-12">
        {/* EMERGENCY PROTOCOL BANNER */}
        <motion.div
          className="mb-20 p-8 rounded-[2rem] bg-red-50 border border-red-100 flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
        >
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-red-200">
              <WarningCircleIcon weight="fill" className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-red-900 mb-1">
                {t("emergency_title")}
              </h4>
              <p className="text-red-700/80 text-sm font-light">
                {t("emergency_description")}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-2xl font-black text-red-600 mb-1">
              {t("emergency_phone")}
            </div>
            <div className="text-[10px] font-bold text-red-500 uppercase tracking-widest">
              {t("emergency_label")}
            </div>
          </div>
        </motion.div>

        {/* MAIN NAVIGATION GRID */}
        <motion.div
          className="grid gap-16 lg:gap-8 sm:grid-cols-2 lg:grid-cols-12 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {/* BRAND COLUMN */}
          <motion.div variants={staggerItem} className="lg:col-span-4">
            <Link href="/#hero">
              <Image
                alt="PowerVet Clinical Practice"
                src="/content/logos/blackLogo.webp"
                width={0}
                height={0}
                sizes="100vw"
                className="w-48 h-auto mb-8"
              />
            </Link>
            <p className="max-w-xs text-muted-foreground text-base font-light leading-relaxed mb-10">
              {t("description")}
            </p>
            <div className="flex gap-4">
              {social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 rounded-xl bg-primary/5 border border-border flex items-center justify-center text-primary transition-all hover:bg-primary hover:text-white"
                  aria-label={item.name}
                  whileHover={{ y: -4 }}
                >
                  <item.icon weight="bold" className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* LINKS: SPECIALTIES */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <h5 className="text-sm font-bold text-foreground uppercase tracking-[0.2em] mb-8">
              {t("specialties")}
            </h5>
            <ul className="space-y-4">
              {navigation.specialties.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* LINKS: PRACTICE */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <h5 className="text-sm font-bold text-foreground uppercase tracking-[0.2em] mb-8">
              {t("practice")}
            </h5>
            <ul className="space-y-4">
              {navigation.practice.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* LINKS: RESOURCES */}
          <motion.div variants={staggerItem} className="lg:col-span-2">
            <h5 className="text-sm font-bold text-foreground uppercase tracking-[0.2em] mb-8">
              {t("resources")}
            </h5>
            <ul className="space-y-4">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-light"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
