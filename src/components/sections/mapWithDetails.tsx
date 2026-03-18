"use client";
//#region Imports
import { Button } from "@heroui/react";
import {
  ClockIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";
//#endregion

export function MapWithDetails() {
  const t = useTranslations("Location");

  //#region Constants
  const contactInfo = [
    {
      icon: MapPinIcon,
      label: t("address_label"),
      value: t("address_val"),
    },
    { icon: PhoneIcon, label: t("phone_label"), value: t("phone_val") },
    {
      icon: EnvelopeSimpleIcon,
      label: t("email_label"),
      value: t("email_val"),
    },
    {
      icon: ClockIcon,
      label: t("hours_label"),
      value: t("hours_value"),
    },
  ];
  //#endregion

  return (
    <section className="py-32 px-6 lg:px-12 bg-white" id="address">
      <div className="container mx-auto">
        {/* HEADER AREA */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 mb-6 text-primary font-bold text-xs uppercase tracking-widest">
            <span className="w-8 h-px bg-primary/30" />
            {t("badge")}
          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            {t("title")}{" "}
            <span className="text-primary font-serif italic font-normal">
              {t("subtitle")}
            </span>
          </h2>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* CONTACT INFO CARD */}
          <motion.div
            className="lg:col-span-4 bg-[#F8FAFB] border border-border rounded-[2.5rem] p-10 flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <div>
              <motion.h3
                variants={staggerItem}
                className="text-2xl font-bold text-foreground mb-10 tracking-tight"
              >
                {t("directory")}
              </motion.h3>

              <div className="space-y-10">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-5 group"
                    variants={staggerItem}
                  >
                    <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/30 group-hover:text-primary transition-all">
                      <info.icon weight="duotone" className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1.5">
                        {info.label}
                      </div>
                      <div className="text-foreground font-medium text-base leading-snug">
                        {info.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div variants={staggerItem} className="pt-12">
              <Button
                className="w-full h-14 rounded-xl bg-foreground text-white font-bold text-sm"
              >
                {t("directions")}
              </Button>
            </motion.div>
          </motion.div>

          {/* MAP CONTAINER */}
          <motion.div
            className="lg:col-span-8 rounded-[2.5rem] overflow-hidden border border-border h-125 lg:h-auto relative shadow-2xl shadow-primary/5"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635959481000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(0.2) contrast(1.1) brightness(1.05)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PowerVet Practice Location"
            />

            {/* MAP OVERLAY DETAIL */}
            <div className="absolute bottom-8 left-8 p-4 rounded-xl bg-white/90 backdrop-blur-sm border border-border shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-foreground">
                  {t("status")}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
