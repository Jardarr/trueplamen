import React from "react";
import Hero from "../components/hero";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import PreviewKingOfLifeAndDeath from "../components/newsPreview/previewKingOvLifeAndDeath";
import type { Viewport } from "next";
import PreviewVoxOuroborosDagaz from "../components/newsPreview/prewiewVoxOuroborosDagaz";
import TypewriterTextAnimate from "../components/typewriterTextAnimate";
import PreviewVoxOuroborosSowilo from "../components/newsPreview/prewiewVoxOuroborosSowilo";
import PreviewVoxOuroborosFehu from "../components/newsPreview/prewiewVoxOuroborosFehu";
import PreviewVoxOuroborosIsaz from "../components/newsPreview/prewiewVoxOuroborosIsaz";
import PrewiewHymnsOvBlackEnergy from "../components/newsPreview/prewiewHymnsOvBlackEnergy";
import { getTranslations } from "next-intl/server";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
    themeColor: 'black',
};

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
	const t = await getTranslations({ locale: params.locale, namespace: "Home" });
	return {
		title: `Plamen | ${t("title")}`,
		description: t("description"),
		keywords: ["Black Metal", "Music", "Plamen", "Пламень"],
		authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
		applicationName: "Plamen Official",
		openGraph: {
			title: `Plamen | ${t("title")}`,
			description: t("description"),
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
			title: `Plamen | ${t("title")}`,
			description: t("description"),
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
			canonical: "https://plamenband.ru/",
		},
	}
}

export default function Home() {
    return (
        <>
            <Hero />
            <Separator className="sm:mt-40 max-w-7xl mx-auto hidden sm:block" />
            <div className="text-gray-300 sm:text-2xl px-3 my-4 sm:my-40 flex items-center flex-col">
                <div className="font-Cormorant mt-4 max-w-[1200px] italic">
                    <p>IGNE NATURA RENOVATUR INTEGRA </p>
                </div>
                <PrewiewHymnsOvBlackEnergy />
                <PreviewVoxOuroborosIsaz />
                <PreviewVoxOuroborosFehu />
                <PreviewKingOfLifeAndDeath />
                <PreviewVoxOuroborosSowilo />
                <PreviewVoxOuroborosDagaz />
                <Separator className="sm:my-40 max-w-7xl mx-auto hidden sm:block" />
                <TypewriterTextAnimate />
            </div>
        </>
    );
}
