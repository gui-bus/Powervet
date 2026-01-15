"use client";

//#region Imports
import { Button, Input } from "@heroui/react";
import {
  ArrowRightIcon,
  UserIcon,
  CheckCircleIcon,
  CalendarIcon,
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { fadeInUp, viewportOnce } from "@/lib/motion";
//#endregion

//#region Constants
const services = [
  {
    id: "consultation",
    name: "General Consultation",
    description: "Routine check-up or specific concerns",
  },
  {
    id: "behavior",
    name: "Behavior & Stress Evaluation",
    description: "Focused assessment for emotional well-being",
  },
  {
    id: "preventive",
    name: "Preventive Care Visit",
    description: "Health monitoring & early detection",
  },
];
//#endregion

export function BookingWidget() {
  //#region useStates
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  //#endregion

  //#region Hooks
  const formRef = useRef<HTMLFormElement>(null);
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
    setTimeout(() => setStatus("idle"), 4000);
  };
  //#endregion

  return (
    <section className="px-6 lg:px-12" id="schedule">
      {/* BADGE - TITLE - DESCRIPTION */}
      <motion.div
        className="mb-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
      >
        {/* BADGE */}
        <span className="text-xs uppercase tracking-[0.3em] text-accent">
          Schedule
        </span>

        {/* TITLE */}
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Schedule a consultation
        </h2>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Select a service and fill in your details. Our clinic will contact you
          with available doctors and times.
        </p>
      </motion.div>

      {/* SERVICES - FORM - SUCCESS OVERLAY */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5 }}
      >
        {/* SERVICES */}
        <div className="mb-12">
          <span className="mb-5 flex items-center gap-2 text-sm font-medium">
            <UserIcon className="text-accent" size={20} weight="duotone" />
            Select a service
          </span>

          <div className="space-y-4">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedService(service.id)}
                className={`w-full cursor-pointer rounded-2xl border p-6 text-left transition-colors ${
                  selectedService === service.id
                    ? "text-white bg-accent"
                    : "hover:bg-default"
                }`}
              >
                <div className="flex justify-between">
                  <span className="font-medium">{service.name}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* FORM */}
        <form
          ref={formRef}
          className="border-t border-border pt-10 space-y-6"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5 md:grid-cols-3">
            <InputField
              id="guardianName"
              label="Your Name"
              placeholder="Jane Doe"
            />
            <InputField id="catName" label="Cat’s Name" placeholder="Zoe" />
            <InputField
              id="email"
              label="Email"
              placeholder="jane@email.com"
              type="email"
            />
          </div>

          {status === "error" && (
            <p className="text-red-500 text-sm font-medium">
              Please fill all required fields correctly and provide a valid
              email.
            </p>
          )}

          <div className="flex justify-end">
            <Button
              type="submit"
              className="group rounded-full px-8 py-6 text-sm font-medium"
            >
              Schedule consultation
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
              className="absolute inset-0 z-20 flex items-center justify-center rounded-3xl bg-linear-to-r from-green-100 to-green-200 backdrop-blur-sm p-6"
            >
              <div className="text-center max-w-md">
                <CheckCircleIcon className="mx-auto h-14 w-14 text-green-600" />
                <h3 className="mt-5 text-2xl font-bold text-green-700">
                  Consultation Requested!
                </h3>
                <p className="mt-2 text-sm text-green-700">
                  Thank you! Our clinic will contact you soon with available
                  doctors and times for your selected service.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-full bg-green-600 px-6 py-2 text-white font-medium hover:bg-green-700 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function InputField({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      <Input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required
        className="bg-background w-full text-foreground placeholder-muted-foreground border border-default rounded-3xl focus:ring-2 focus:ring-accent py-3 px-4"
      />
    </div>
  );
}
