"use client";
//#region Imports
import { ArrowRightIcon, PhoneIcon } from "@phosphor-icons/react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
//#endregion

//#region Animations
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item: any = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
//#endregion

export function HeroSection() {
  //#region Hooks
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  //#endregion

  return (
    <section
      ref={sectionRef}
      className="relative grid grid-cols-1 lg:grid-cols-3 overflow-hidden"
      id="hero"
    >
      {/* LOGO - LINKS - CTA (HEADER) - BADGE - TITLE - DESCRIPTION - CTA (CONTENT) */}
      <div className="relative z-10 flex flex-col justify-center px-6 lg:px-12 py-20 bg-background lg:col-span-2">
        {/* LOGO - LINKS - CTA (HEADER) */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-between mb-24"
        >
          {/* LOGO */}
          <Link href="/#hero">
            <Image
              alt="PowerVet"
              src="/content/logos/blackLogo.webp"
              width={0}
              height={0}
              sizes="100vw"
              className="w-44 h-auto"
            />
          </Link>

          {/* LINKS */}
          <nav className="hidden xl:flex items-center gap-8 text-sm text-muted-foreground">
            <Link
              href="#our-approach"
              className="hover:-translate-y-1 transition-all duration-300"
            >
              Our approach
            </Link>
            <Link
              href="#consultation-flow"
              className="hover:-translate-y-1 transition-all duration-300"
            >
              Consultation Flow
            </Link>
            <Link
              href="#address"
              className="hover:-translate-y-1 transition-all duration-300"
            >
              Address
            </Link>
          </nav>

          {/* CTA */}
          <motion.a
            href="tel:+1234567890"
            className="hidden md:flex items-center gap-2 text-primary hover:underline"
            whileHover={{ scale: 1.02 }}
          >
            <PhoneIcon weight="duotone" className="w-4 h-4" />
            (123) 456-7890
          </motion.a>
        </motion.header>

        {/* BADGE - TITLE - DESCRIPTION - CTA (CONTENT) */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* BADGE */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-foreground/5 border border-default mb-10"
          >
            <span className="text-xs font-medium tracking-wide text-muted-foreground">
              Modern Veterinary & Feline Care
            </span>
            <ArrowRightIcon
              weight="duotone"
              className="w-3.5 h-3.5 text-muted-foreground"
            />
          </motion.div>

          {/* TITLE */}
          <motion.h1
            variants={item}
            className="text-[clamp(3rem,6vw,3.5rem)] font-semibold tracking-tight leading-[1.05] mb-6"
          >
            Veterinary medicine,
            <br />
            <span className="font-serif italic font-normal">
              refined for feline wellbeing.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={item}
            className="text-lg text-muted-foreground leading-relaxed mb-12"
          >
            PowerVet is a modern veterinary clinic offering feline-focused care
            through calm handling, structured consultations, and precise medical
            decision-making — all designed to support comfort, trust, and
            clinical accuracy.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-8"
          >
            <motion.a
              href="#schedule"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-base font-medium text-white hover:bg-accent/90 transition"
            >
              Schedule a Consultation
            </motion.a>

            <motion.a
              href="#our-approach"
              whileHover={{ x: 6 }}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Learn how our care works →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* VIDEO */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <motion.div
          style={{ scale: videoScale, y: videoY }}
          className="absolute inset-0 will-change-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/content/images/heroBackground.webp"
          >
            <source src="/content/videos/heroVideo.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}
