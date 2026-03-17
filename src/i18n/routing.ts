import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ["en", "ru"],

    // Used when no locale matches
    defaultLocale: "ru",

    // Don't prefix the default locale
    localePrefix: "as-needed",

    // Always use the default locale when there is no prefix
    localeDetection: false,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);



