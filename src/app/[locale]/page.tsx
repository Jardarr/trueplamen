import React from "react";
import Hero from "../components/hero";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import PreviewKingOfLifeAndDeath from "../components/newsPreview/previewKingOvLifeAndDeath";
import type { Viewport } from "next";
import PreviewVoxOuroborosDagaz from "../components/newsPreview/prewiewVoxOuroborosDagaz";
import TypewriterTextAnimate from "../components/typewriterTextAnimate";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
    themeColor: 'black',
};

export const metadata: Metadata = {
    title: "Plamen | Home Page",
    description: "Home Page. Black Metal band from Mordor, created in 2006.",
    keywords: ["Black Metal", "Music", "Plamen", "Пламень"],
    authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
    applicationName: "Plamen Official",
    openGraph: {
        title: "Plamen | Home Page - Black Metal band from Mordor",
        description:
            "Home Page. Website of the Black Metal band Plamen, created in 2006.",
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
        title: "Plamen | Home Page - Black Metal band from Mordor",
        description: "Home Page. Visit the official website of the band Plamen.",
        images: ["/og-logo.jpg"],
    },
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

export default function Home() {
    return (
        <>
            <Hero />
            <Separator className="sm:mt-40 max-w-7xl mx-auto hidden sm:block" />
            <div className="text-gray-300 sm:text-2xl px-3 my-4 sm:my-40 flex items-center flex-col">
                <div className="font-Cormorant mt-4 max-w-[1200px] italic">
                    <p>IGNE NATURA RENOVATUR INTEGRA </p>
                </div>
                <PreviewKingOfLifeAndDeath />
                <PreviewVoxOuroborosDagaz />
                <Separator className="sm:my-40 max-w-7xl mx-auto hidden sm:block" />
                <TypewriterTextAnimate />
            </div>
        </>
    );
}
