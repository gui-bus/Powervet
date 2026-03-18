"use client";
//#region Imports
import { Button } from "@heroui/react";
import { BookOpenTextIcon, ClockIcon, XIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportOnce,
} from "@/lib/motion";

//#endregion

//#region Types
type Post = {
  category: string;
  title: string;
  description: string;
  readTime: string;
  image: string;
  content: string;
  date: string;
};
//#endregion

export function ClinicalInsights() {
  //#region useStates
  const t = useTranslations("Insights");
  const [activePost, setActivePost] = useState<Post | null>(null);
  //#endregion

  //#region Constants
  const posts: Post[] = t.raw("posts");
  //#endregion

  return (
    <>
      <section
        className="bg-[#FDFDFD] px-6 lg:px-12 py-32 border-b border-border"
        id="clinical-insights"
      >
        <div className="container mx-auto">
          {/* HEADER AREA */}
          <motion.div
            className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            <div className="max-w-3xl">
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 mb-6 text-primary font-bold text-xs uppercase tracking-widest">
                <BookOpenTextIcon weight="bold" className="w-4 h-4" />
                {t("badge")}
              </div>

              {/* TITLE */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                {t("title")}
                <br />
                <span className="text-primary font-serif italic font-normal">
                  {t("subtitle")}
                </span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg font-light max-w-sm border-l-2 border-primary/10 pl-6 py-2">
              {t("description")}
            </p>
          </motion.div>

          {/* PUBLICATIONS GRID */}
          <motion.div
            className="grid gap-8 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {posts.map((post, index) => (
              <motion.button
                key={index}
                type="button"
                variants={staggerItem}
                whileHover={{ y: -8 }}
                onClick={() => setActivePost(post)}
                className="group cursor-pointer bg-white border border-border rounded-3xl overflow-hidden flex flex-col transition-all hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 text-left w-full"
              >
                {/* IMAGE AREA */}
                <div className="aspect-16/10 overflow-hidden relative w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    width={0}
                    height={0}
                    sizes="100vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="p-8 flex-1 flex flex-col w-full">
                  <div className="flex items-center gap-4 text-[10px] font-medium text-muted-foreground uppercase tracking-widest mb-4">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <div className="flex items-center gap-1.5">
                      <ClockIcon className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold leading-tight text-foreground mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground text-sm font-light leading-relaxed mb-8 flex-1">
                    {post.description}
                  </p>

                  <div className="pt-6 border-t border-border flex items-center justify-between mt-auto w-full">
                    <span className="text-xs font-bold text-primary tracking-widest uppercase">
                      {t("read_more")}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <BookOpenTextIcon weight="bold" className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PUBLICATION MODAL */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePost(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl flex flex-col md:flex-row"
            >
              {/* MODAL CLOSE */}
              <button
                type="button"
                onClick={() => setActivePost(null)}
                className="absolute right-6 top-6 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-white transition-colors shadow-lg"
              >
                <XIcon weight="bold" size={18} />
              </button>

              {/* MODAL MEDIA */}
              <div className="w-full md:w-[40%] h-64 md:h-auto relative bg-muted">
                <Image
                  src={activePost.image}
                  alt={activePost.title}
                  className="h-full w-full object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
              </div>

              {/* MODAL CONTENT */}
              <div className="flex-1 p-8 md:p-14 overflow-y-auto bg-white">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                      {activePost.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">
                      {activePost.date}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-8">
                    {activePost.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-10 pb-8 border-b border-border">
                    <ClockIcon className="w-4 h-4" />
                    <span>
                      {t("reference")} · {activePost.readTime}
                    </span>
                  </div>

                  <div className="prose prose-slate max-w-none">
                    <p className="whitespace-pre-line text-lg leading-relaxed text-muted-foreground font-light italic border-l-4 border-primary/20 pl-8 mb-12">
                      {activePost.description}
                    </p>
                    <p className="whitespace-pre-line text-base md:text-lg leading-[1.8] text-foreground font-light">
                      {activePost.content}
                    </p>
                  </div>

                  <div className="mt-16 pt-10 border-t border-border flex items-center justify-between">
                    <div className="text-xs text-muted-foreground italic">
                      {t("copyright")}
                    </div>
                    <Button
                      onClick={() => setActivePost(null)}
                      variant="ghost"
                      className="font-bold text-primary uppercase text-[10px] tracking-widest"
                    >
                      {t("close")}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
