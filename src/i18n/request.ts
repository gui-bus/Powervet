import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale: localeFromParams }) => {
  // Tenta obter o locale dos params, se não existir busca no cookie, se não usa 'en'
  const cookieStore = await cookies();
  const locale =
    localeFromParams || cookieStore.get("NEXT_LOCALE")?.value || "en";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
