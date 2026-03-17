import type { Metadata } from "next";
import type { ReactNode } from "react";
import { cookies } from "next/headers";
import "./styles/globals.css";
import "./styles/index.css";

export const metadata: Metadata = {
    title: "Plamen | Official",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    const cookieLocale = cookies().get("NEXT_LOCALE")?.value;
    const lang = cookieLocale === "en" ? "en" : "ru";

    return (
        <html lang={lang}>
            <body className="antialiased bg-black selection:bg-red-900">{children}</body>
        </html>
    );
}
