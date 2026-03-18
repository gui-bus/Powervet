"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import ReactCountryFlag from "react-country-flag";

export function LanguageSelector() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      // biome-ignore lint/suspicious/noDocumentCookie: next-intl standard approach for locale switching via cookie
      document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
      router.refresh();
    });
  };

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => onSelectChange("en")}
        disabled={isPending}
        className={`flex items-center gap-2 px-2 py-1.5 rounded-lg border transition-all duration-300 ${
          localeActive === "en"
            ? "bg-primary/10 border-primary text-primary"
            : "bg-transparent border-border text-muted-foreground hover:border-primary/30"
        }`}
        title="English"
      >
        <ReactCountryFlag
          countryCode="US"
          svg
          style={{
            width: "1.2em",
            height: "1.2em",
          }}
        />
        <span className="text-[10px] font-bold uppercase tracking-wider hidden lg:block">
          EN
        </span>
      </button>
      <button
        type="button"
        onClick={() => onSelectChange("pt")}
        disabled={isPending}
        className={`flex items-center gap-2 px-2 py-1.5 rounded-lg border transition-all duration-300 ${
          localeActive === "pt"
            ? "bg-primary/10 border-primary text-primary"
            : "bg-transparent border-border text-muted-foreground hover:border-primary/30"
        }`}
        title="Português"
      >
        <ReactCountryFlag
          countryCode="BR"
          svg
          style={{
            width: "1.2em",
            height: "1.2em",
          }}
        />
        <span className="text-[10px] font-bold uppercase tracking-wider hidden lg:block">
          PT
        </span>
      </button>
    </div>
  );
}
