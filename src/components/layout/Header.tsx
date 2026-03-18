"use client";

import { PhoneIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LanguageSelector } from "../LanguageSelector";

export function Header() {
  const t = useTranslations("Hero");

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* LOGO AREA */}
        <div className="flex items-center gap-8">
          <Link href="/#hero" className="flex items-center gap-3">
            <Image
              alt="PowerVet"
              src="/content/logos/blackLogo.webp"
              width={0}
              height={0}
              sizes="100vw"
              className="w-36 lg:w-44 h-auto"
            />
          </Link>
          <div className="hidden xl:block h-8 w-px bg-border" />
          <div className="hidden xl:block">
            <LanguageSelector />
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex items-center gap-10">
          {[
            { label: t("nav_approach"), id: "our-approach" },
            { label: t("nav_workflow"), id: "consultation-flow" },
            { label: t("nav_address"), id: "address" },
          ].map((nav) => (
            <Link
              key={nav.id}
              href={`#${nav.id}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {nav.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA AREA */}
        <div className="flex items-center gap-6">
          <div className="xl:hidden">
            <LanguageSelector />
          </div>
          <motion.a
            href="tel:+1234567890"
            className="hidden md:flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary/5 text-primary border border-primary/10 hover:bg-primary/10 transition-colors"
            whileHover={{ y: -1 }}
          >
            <PhoneIcon weight="bold" className="w-4 h-4" />
            <span className="text-sm font-semibold">(123) 456-7890</span>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
