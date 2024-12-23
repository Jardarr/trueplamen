import React from "react";
import Hero from "./components/hero";
import { Separator } from "@/components/ui/separator";

import { Metadata } from "next";
import PreviewKingOfLifeAndDeath from "./components/newsPreview/previewKingOvLifeAndDeath";

export const metadata: Metadata = {
    title: "Plamen | Home Page",
    description: "Plamen | Home Page. Black Metal band from Mordor, created in 2006.",
    keywords: ["Black Metal", "Music", "Plamen", "Пламень"],
    authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
    applicationName: "Plamen Official",
    openGraph: {
        title: "Plamen | Home Page - Black Metal band from Mordor",
        description:
            "Plamen | Home Page. Website of the Black Metal band Plamen, created in 2006.",
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
        description: "Plamen | Home Page. Visit the official website of the band Plamen.",
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

export default function Home() {
    return (
        <>
            <Hero />
            <Separator className="mt-4 sm:mt-40 max-w-7xl mx-auto" />
            <div className="text-gray-300 sm:text-2xl px-3 my-4 sm:my-40 flex items-center flex-col">
                <div className="custom-font max-w-[1200px] italic">
                    <p>IGNE NATURA RENOVATUR INTEGRA </p>
                </div>
                <PreviewKingOfLifeAndDeath />
            </div>
        </>
    );
}
