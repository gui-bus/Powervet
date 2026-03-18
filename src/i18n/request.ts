import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale: localeFromParams }) => {
  const cookieStore = await cookies();
  const locale =
    localeFromParams || cookieStore.get("NEXT_LOCALE")?.value || "pt";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
