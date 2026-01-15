"use client";
//#region Imports
import { Button } from "@heroui/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";
import Image from "next/image";
import Link from "next/link";
//#endregion

//#region Constants
const services = [
  {
    title: "Preventive Care",
    description:
      "Routine consultations focused on early detection, vaccination planning, and long-term feline wellbeing.",
    action: "Schedule",
  },
  {
    title: "Internal Medicine",
    description:
      "Diagnosis and management of chronic and complex conditions through structured clinical evaluation.",
    action: "Schedule",
  },
  {
    title: "Behavior & Stress Management",
    description:
      "Assessment of behavioral changes linked to stress, environment, or underlying medical conditions.",
    action: "Schedule",
  },
  {
    title: "Senior & Chronic Care",
    description:
      "Personalized follow-up for aging cats and long-term conditions, prioritizing comfort and quality of life.",
    action: "Schedule",
  },
];
//#endregion

export function ServicesList() {
  return (
    <section className="bg-secondary py-20 md:py-32" id="clinical-areas">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* TITLE - DESCRIPTION */}
        <motion.div
          className="text-center flex flex-col md:flex-row items-center justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          {/* TITLE */}
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
            Clinical areas of{" "}
            <span className="font-serif italic font-normal text-muted-foreground">
              care
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-5 text-lg text-muted-foreground font-light">
            Our services are organized by clinical focus — not packages or
            shortcuts.
          </p>
        </motion.div>

        {/* LIST - IMAGE */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 items-stretch gap-12">
          {/* LIST */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={staggerItem}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 rounded-xl border border-border bg-card p-6 transition-all hover:shadow-md"
              >
                {/* ITEM */}
                <div className="flex items-start gap-4">
                  <motion.span
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-default text-sm font-mono font-medium text-foreground"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.span>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-1 max-w-md text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/#schedule">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="group-hover:bg-secondary"
                    >
                      {service.action}
                      <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* IMAGE */}
          <div className="relative w-full h-64 sm:h-80 md:h-full overflow-hidden rounded-3xl">
            <Image
              src="/content/images/catBackground.webp"
              alt=""
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
