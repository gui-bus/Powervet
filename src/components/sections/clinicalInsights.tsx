"use client";
//#region Imports
import { ClockIcon, XIcon } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";
import { Button } from "@heroui/react";
//#endregion

//#region Types
type Post = {
  category: string;
  title: string;
  description: string;
  readTime: string;
  image: string;
  content: string;
};
//#endregion

//#region Constants
const posts: Post[] = [
  {
    category: "Cat Health",
    title: "When vomiting in cats is a reason for concern",
    description:
      "Occasional vomiting can be harmless, but recurring episodes may indicate conditions that require medical attention.",
    readTime: "4 min read",
    image: "/content/blog/post01.webp",
    content: `
Vomiting is one of the most common reasons cats are brought to the clinic. 
While an isolated episode — often related to hairballs or mild dietary changes — 
may not be alarming, repetition is never considered normal.

Frequent vomiting can be associated with gastrointestinal inflammation, food intolerance,
intestinal parasites, kidney disease, or hormonal disorders such as hyperthyroidism.

Warning signs include loss of appetite, weight loss, lethargy, dehydration, or changes in behavior.
When these symptoms are present, a veterinary evaluation becomes essential.

Early diagnosis allows for targeted treatment, prevents complications, and significantly
improves long-term comfort and quality of life.
`,
  },
  {
    category: "Behavior & Stress",
    title: "How stress silently affects your cat’s health",
    description:
      "Chronic stress can manifest physically, impacting digestion, immunity, and urinary health.",
    readTime: "5 min read",
    image: "/content/blog/post02.webp",
    content: `
Cats are extremely sensitive to their environment. Changes that may seem minor to humans —
such as new furniture, routine adjustments, or unfamiliar visitors — can be significant stressors.

When stress becomes chronic, it may contribute to conditions such as feline idiopathic cystitis,
gastrointestinal disturbances, excessive grooming, and immune suppression.

Because cats often hide discomfort, these effects can go unnoticed until the condition
has already progressed.

Environmental enrichment, predictable routines, safe resting spaces, and behavioral support
play a crucial role in reducing stress and protecting both physical and emotional health.
`,
  },
  {
    category: "Preventive Care",
    title: "Why regular check-ups matter — even for indoor cats",
    description:
      "Preventive care helps detect subtle changes early, long before symptoms become visible at home.",
    readTime: "3 min read",
    image: "/content/blog/post03.webp",
    content: `
A common misconception is that indoor cats are less likely to develop health problems.
In reality, many chronic conditions progress silently, without obvious signs.

Routine check-ups allow veterinarians to monitor weight, dental health, blood pressure,
and detect early indicators of kidney disease, diabetes, or arthritis.

Preventive care is not about finding problems — it is about preserving wellbeing,
comfort, and longevity through proactive monitoring.

Regular consultations help ensure that small changes are addressed early,
when treatment is simpler and outcomes are better.
`,
  },
];
//#endregion

export function ClinicalInsights() {
  //#region useStates
  const [activePost, setActivePost] = useState<Post | null>(null);
  //#endregion

  return (
    <>
      <section
        className="bg-background px-6 lg:px-12 py-20"
        id="clinical-insights"
      >
        {/* BADGE - TITLE */}
        <motion.div
          className="mb-14 flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          {/* BADGE */}
          <span className="text-xs uppercase tracking-[0.3em] text-accent">
            From the clinic
          </span>

          {/* TITLE */}
          <h2 className="text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Clinical insights for{" "}
            <span className="font-serif font-semibold">cat guardians</span>
          </h2>
        </motion.div>

        {/* POSTS */}
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {posts.map((post, index) => (
            <motion.article
              key={index}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              onClick={() => setActivePost(post)}
              role="button"
              className="group cursor-pointer overflow-hidden rounded-3xl"
            >
              {/* IMAGE */}
              <div className="aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>

              {/* CATEGORY - TITLE - DESCRIPTION - READ TIME */}
              <div className="p-6">
                {/* CATEGORY */}
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {post.category}
                </span>

                {/* TITLE */}
                <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-sm text-muted-foreground">
                  {post.description}
                </p>

                {/* READ TIME */}
                <div className="mt-5 flex items-center text-xs text-muted-foreground">
                  <ClockIcon className="mr-1 h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePost(null)}
          >
            {/* CLOSE BUTTON - IMAGE - CATEGORY - TITLE - READ TIME - CONTENT */}
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-background"
            >
              {/* CLOSE BUTTON */}
              <Button
                onClick={() => setActivePost(null)}
                className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:text-foreground"
                isIconOnly
              >
                <XIcon size={18} />
              </Button>

              {/* IMAGE */}
              <div className="aspect-video overflow-hidden rounded-t-2xl">
                <Image
                  src={activePost.image}
                  alt={activePost.title}
                  className="h-full w-full object-cover"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>

              {/* CATEGORY - TITLE - READ TIME - CONTENT */}
              <div className="p-8">
                {/* CATEGORY */}
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {activePost.category}
                </span>

                {/* TITLE */}
                <h3 className="mt-3 text-2xl font-semibold text-foreground">
                  {activePost.title}
                </h3>

                {/* READ TIME */}
                <div className="mt-4 flex items-center text-xs text-muted-foreground">
                  <ClockIcon className="mr-1 h-4 w-4" />
                  {activePost.readTime}
                </div>

                {/* CONTENT */}
                <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {activePost.content}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
