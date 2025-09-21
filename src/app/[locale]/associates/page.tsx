import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import type { Viewport } from "next";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
    themeColor: 'black',
};

export const metadata: Metadata = {
    title: "Plamen | Associates",
    description: "Associates. Black Metal band from Mordor, created in 2006.",
    keywords: ["Black Metal", "Music", "Plamen", "Пламень"],
    authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
    applicationName: "Plamen Official",
    openGraph: {
        title: "Plamen | Associates - Black Metal band from Mordor",
        description:
            "Associates. Official website of the Black Metal band Plamen, created in 2006.",
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
        title: "Plamen | Associates. Plamen - Black Metal band from Mordor",
        description: "Associates. Visit the official website of the band Plamen.",
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

export default function Samples() {
    const t = useTranslations("Associates");
    return (
        <div className="custom-font flex justify-center pt-10 sm:py-7 bg-main-bg bg-cover bg-fixed bg-top bg-no-repeat min-h-screen sm:h-fit">
            <div className="max-w-[1200px] w-full flex flex-col gap-3 text-gray-300">
                <div className="space-y-2 pl-4 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl text-gray-800 sm:text-4xl md:text-6xl leading-9 sm:leading-10 md:leading-14 tracking-tight">
                        {t("title")}
                    </h1>
                </div>
                <div className="w-full flex flex-col sm:flex-row gap-3">
                    <div className="bg-neutral-900/45 p-3 mx-4 rounded-md">
                        <Link className="text-center flex flex-col items-center" href="https://niemaracz.com/" target="_blank"><Image className="w-[120px] hover:scale-110 transition-transform ease-in-out" src="/associates-img/nmrcz.svg" alt="niemaracz" width={120} height={150} /><p className="pt-2">Niemarač Clan</p></Link>
                    </div>
                    <div className="bg-neutral-900/45 p-3 mx-4 rounded-md opacity-30">
                        <Link className="text-center flex flex-col items-center cursor-not-allowed" href="#" target="_blank"><Image className="w-[120px]" src="/associates-img/tsk.png" alt="thou_shalt_kill" width={120} height={150} /><p className="pt-2">Thou Shalt Kill!</p></Link>
                    </div>
                    <div className="bg-neutral-900/45 p-3 mx-4 rounded-md">
                        <Link className="text-center flex flex-col items-center" href="https://youtube.com/@amkrafter?si=AHkoItXkTWDd1LWU" target="_blank"><Image className="w-[120px] h-[153px] hover:scale-110 transition-transform ease-in-out" src="/associates-img/saturn.png" alt="saturn" width={120} height={150} /><p className="pt-2 uppercase">Saturn</p></Link>
                    </div>
                    <div className="bg-neutral-900/45 p-3 mx-4 rounded-md">
                        <Link className="text-center flex flex-col items-center" href="https://voxouroboros.bandcamp.com/album/dagaz" target="_blank"><Image className="w-[120px] h-[153px] hover:scale-110 transition-transform ease-in-out" src="/associates-img/ouroboros.png" alt="saturn" width={120} height={150} /><p className="pt-2">Vox Ouroboros</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
