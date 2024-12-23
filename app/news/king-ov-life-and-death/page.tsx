import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Plamen | King ov Life and Death",
    description: "Plamen | King ov Life and Death. New album of the band Plamen coming soon",
    keywords: ["Black Metal", "Music", "Plamen", "Пламень"],
    authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
    applicationName: "Plamen Official",
    openGraph: {
        title: "Plamen | King ov Life and Death",
        description: "Plamen | King ov Life and Death. New album of the band Plamen coming soon",
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
        description: "Plamen | King ov Life and Death. New album of the band Plamen coming soon",
        images: ["/og-logo-king.jpg"],
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

export default function AlbumKingOfLifeAndDeath() {
    return (
        <div className="custom-font relative flex justify-center items-center pt-10 sm:py-7 gap-3 bg-main-bg bg-cover bg-fixed bg-top bg-no-repeat min-h-screen sm:h-fit">
            <div className="cover-box max-w-[1200px] flex justify-center mx-4">
                <div className="cover-link h-fit bg-neutral-900/45 p-3 rounded-md">
                    <div className="flex flex-col items-center sm:flex-row">
                        <Image className="rounded-md h-[200px] w-[200px] sm:w-[400px] sm:h-auto" src="/covers/king-ov-life-and-death-BIG.jpg" alt="" width={400} height={400} />
                        <div className="flex flex-col m-4 sm:mx-8">
                            <div>
                                <h1 className="text-gray-300 text-sm sm:text-xl mb-3">
                                    Приветствуем! Вашему вниманию представляется &quot;В Свете Авроры&quot; - премьерный трек с грядущего высказывания &quot;Король Жизни и Смерти&quot;. Официальный релиз в следующем году. Следите за обновлениями!
                                </h1>
                                <h2 className="text-gray-400 text-sm">
                                    Hail! We present to your attention &quot;In the Light ov Aurora&quot; - the premiere track from the upcoming statement &quot;King ov Life and Death&quot;. Official release next year. Stay tuned!
                                </h2>
                            </div>
                            <p className="text-right mt-10 sm:mt-30">
                                <Link href="https://plamen.bandcamp.com/album/king-ov-life-and-death" target="_blank" className="text-gray-400 hover:text-gray-300 transition ease text-sm sm:text-base inline-flex items-center justify-end">
                                    Слушать на Bandcamp
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
