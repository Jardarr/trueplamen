import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import type { Viewport } from "next";
import { useTranslations } from "next-intl";
import DOMPurify from "isomorphic-dompurify";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
    themeColor: 'black',
};

export const metadata: Metadata = {
    title: "Plamen | King ov Life and Death",
    description: "King ov Life and Death. New album of the band Plamen on a bandcamp",
    keywords: ["Black Metal", "Music", "Plamen", "Пламень"],
    authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
    applicationName: "Plamen Official",
    openGraph: {
        title: "Plamen | King ov Life and Death",
        description: "King ov Life and Death. New album of the band Plamen coming soon",
        url: "https://plamenband.ru",
        siteName: "Plamen Official",
        images: [
            {
                url: "/og-logo-king.jpg",
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
        title: "Plamen | King ov Life and Death",
        description: "King ov Life and Death. New album of the band Plamen coming soon",
        images: ["/og-logo-king.jpg"],
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

export default function AlbumKingOfLifeAndDeath() {
    const t = useTranslations("KingNewsFull");
    const cleanTitle = DOMPurify.sanitize(t("title"));
    return (
        <div className="custom-font relative flex justify-center items-center pt-10 sm:py-7 gap-3 bg-main-bg bg-cover bg-fixed bg-top bg-no-repeat min-h-screen sm:h-fit">
            <div className="cover-box max-w-[1200px] flex justify-center mx-4">
                <div className="cover-link h-fit bg-neutral-900/45 p-3 rounded-md">
                    <div className="flex flex-col items-center lg:flex-row">
                        <Image className="rounded-md h-[250px] w-[250px] sm:w-[400px] sm:h-auto" src="/covers/king-ov-life-and-death-BIG-r.jpg" alt="" width={400} height={400} />
                        <div className="flex flex-col m-4 sm:mx-8">
                            <div>
                                <h1 className="text-gray-300 text-sm sm:text-base mb-3 text-center" dangerouslySetInnerHTML={{ __html: cleanTitle }}></h1>
                            </div>
                            <p className="text-right mt-10 sm:mt-30">
                                <Link href="https://plamen.bandcamp.com/album/king-ov-life-and-death" target="_blank" className="text-gray-400 hover:text-gray-300 transition ease text-sm sm:text-base inline-flex items-center justify-end">
                                    {t("listen")}
                                    <ChevronRight size={16} />
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
