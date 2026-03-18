"use client";

//#region Imports
import { Button, Input } from "@heroui/react";
import {
  ArrowRightIcon,
  CalendarCheckIcon,
  CatIcon,
  CheckCircleIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { fadeInUp, viewportOnce } from "@/lib/motion";
//#endregion

export function BookingWidget() {
  //#region Hooks
  const t = useTranslations("Booking");
  const formRef = useRef<HTMLFormElement>(null);
  //#endregion

  //#region useStates
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  //#endregion

  //#region Constants
  const services: { id: string; name: string; description: string }[] =
    t.raw("services");
  //#endregion

  //#region Handle functions
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const guardianName = formData.get("guardianName")?.toString().trim();
    const catName = formData.get("catName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();

    if (
      !selectedService ||
      !guardianName ||
      !catName ||
      !email ||
      !validateEmail(email)
    ) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
      return;
    }

    setStatus("success");
    formRef.current?.reset();
    setSelectedService(null);
    setTimeout(() => setStatus("idle"), 6000);
  };
  //#endregion

  return (
    <section className="px-6 lg:px-12 py-32 bg-white" id="schedule">
      <div className="container mx-auto max-w-5xl">
        {/* HEADER AREA */}
        <motion.div
          className="mb-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary">
            <CalendarCheckIcon weight="bold" className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">
              {t("badge")}
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            {t("title")}{" "}
            <span className="text-primary font-serif italic font-normal">
              {t("subtitle")}
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-light leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        {/* MAIN FORM CARD */}
        <motion.div
          className="relative bg-white border border-border rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-primary/5 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8 }}
        >
          {/* SERVICE SELECTION */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-6 bg-primary rounded-full" />
              <h3 className="text-xl font-bold text-foreground">
                {t("s1_title")}
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedService(service.id)}
                  className={`relative flex flex-col p-6 text-left rounded-2xl border transition-all duration-300 group ${
                    selectedService === service.id
                      ? "bg-primary border-primary text-white shadow-xl shadow-primary/20 scale-[1.02]"
                      : "bg-white border-border hover:border-primary/40 hover:bg-primary/5"
                  }`}
                >
                  <span
                    className={`text-sm font-bold mb-3 ${selectedService === service.id ? "text-white" : "text-primary"}`}
                  >
                    {service.name}
                  </span>
                  <p
                    className={`text-xs leading-relaxed ${selectedService === service.id ? "text-white/80" : "text-muted-foreground"}`}
                  >
                    {service.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* INTAKE FORM */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-6 bg-primary rounded-full" />
                <h3 className="text-xl font-bold text-foreground">
                  {t("s2_title")}
                </h3>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <InputField
                  id="guardianName"
                  label={t("guardian_label")}
                  placeholder={t("guardian_placeholder")}
                  icon={UserCircleIcon}
                />
                <InputField
                  id="catName"
                  label={t("patient_label")}
                  placeholder={t("patient_placeholder")}
                  icon={CatIcon}
                />
                <InputField
                  id="email"
                  label={t("email_label")}
                  placeholder={t("email_placeholder")}
                  type="email"
                  icon={CalendarCheckIcon}
                />
              </div>
            </div>

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium"
              >
                {t("error")}
              </motion.div>
            )}

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground font-light max-w-sm">
                {t("policy")}
              </p>

              <Button
                type="submit"
                className="h-14 px-10 rounded-xl bg-primary text-white font-bold text-base shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform active:scale-[0.98]"
              >
                {t("submit")}
                <ArrowRightIcon weight="bold" className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </form>

          {/* SUCCESS OVERLAY */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-30 flex items-center justify-center bg-white/95 backdrop-blur-md p-12 text-center"
              >
                <div className="max-w-md">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-emerald-50 shadow-inner">
                    <CheckCircleIcon
                      className="w-10 h-10 text-emerald-600"
                      weight="fill"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    {t("success_title")}
                  </h3>
                  <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10">
                    {t("success_description")}
                  </p>
                  <Button
                    onClick={() => setStatus("idle")}
                    className="h-12 px-8 rounded-xl bg-foreground text-white font-bold"
                  >
                    {t("return")}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function InputField({
  id,
  label,
  placeholder,
  icon: Icon,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  icon: any;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <label
        htmlFor={id}
        className="text-sm font-bold text-foreground flex items-center gap-2"
      >
        <Icon weight="duotone" className="w-4 h-4 text-primary" />
        {label}
      </label>
      <Input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
