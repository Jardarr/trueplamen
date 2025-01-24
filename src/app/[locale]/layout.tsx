import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import "../styles/index.scss";
import Footer from "../components/footer";
import Header from "../components/header";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});
const gtaWasted = localFont({
    src: "../fonts/gta-russian.woff",
    variable: "--font-gta",
    weight: "100 900",
});
const cormorantSCReg = localFont({
    src: "../fonts/CormorantSC-Regular.ttf",
    variable: "--font-corSC",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Plamen | Official",
    description: "Plamen | Official. Black Metal band from Mordor, created in 2006.",
    keywords: ["Black Metal", "Music", "Plamen", "Пламень"],
    authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
    applicationName: "Plamen Official",
    openGraph: {
        title: "Plamen | Official - Black Metal band from Mordor",
        description: "Plamen | Official. Website of the Black Metal band Plamen, created in 2006.",
        url: "https://plamenband.ru",
        siteName: "Plamen Official",
        images: [
            {
                url: "/og-logo.jpg",
                width: 800,
                height: 600,
                alt: "Plamen Band Cover",
            },
        ],
        locale: "ru-RU",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Plamen | Official - Black Metal band from Mordor",
        description: "Plamen | Official. Visit the official website of the band Plamen.",
        images: ["/og-logo.jpg"],
    },
    viewport: "width=device-width, initial-scale=1",
    themeColor: "#000000",
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
    alternates: {
        canonical: "https://plamenband.ru",
    },
};

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
    // Ensure that the incoming `locale` is valid
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${geistSans.variable} ${geistMono.variable} ${gtaWasted.variable} ${cormorantSCReg.variable} antialiased bg-black selection:bg-red-900`}>
                <NextIntlClientProvider messages={messages}>
                    <div className="px-4 bg-black sticky top-0 z-50">
                        <Header />
                    </div>
                    {children}
                    <div className="px-4 md:px-24 py-4">
                        <Footer />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}