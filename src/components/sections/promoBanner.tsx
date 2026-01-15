"use client";
//#region Imports
import { Button } from "@heroui/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
//#endregion

export function PromoBanner() {
  return (
    <motion.section
      className="relative p-3 bg-accent"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* ICON - LABEL - PROMO TEXT - CTA */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* ICON - LABEL - PROMO TEXT */}
          <motion.div
            className="flex flex-col lg:flex-row items-start xl:items-center gap-3 text-white text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            {/* ICON - LABEL */}
            <div className="flex items-center gap-5">
              {/* ICON */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{
                  duration: 1.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2.5,
                  ease: "easeInOut",
                }}
              >
                <Image
                  alt="PowerVet"
                  src="/content/logos/icon.webp"
                  width={20}
                  height={20}
                />
              </motion.div>

              {/* LABEL */}
              <span className="font-medium">First consultation benefit:</span>
            </div>

            {/* PROMO TEXT */}
            <span className="text-white/90 text-center md:text-start">
              Enjoy <strong>15% off</strong> your initial feline assessment when
              booking online.
            </span>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full md:max-w-xs"
          >
            <Button
              size="sm"
              className="group w-full bg-white text-accent hover:bg-white/90 px-6 font-medium"
            >
              Book First Consultation
              <ArrowRightIcon className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
