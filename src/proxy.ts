import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "pt"],
  defaultLocale: "en",
  localePrefix: "never",
  localeDetection: true,
});

export const config = {
  matcher: ["/", "/(pt|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
