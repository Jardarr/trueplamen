import { Separator } from "@/components/ui/separator";
import aboutList from "../utils/aboutList";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Plamen | About Us",
    description: "Plamen | About Us. Black Metal band from Mordor, created in 2006.",
    keywords: ["Black Metal", "Music", "Plamen", "Пламень"],
    authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
    applicationName: "Plamen Official",
    openGraph: {
        title: "Plamen | About Us - Black Metal band from Mordor",
        description:
            "Plamen | About Us. Official website of the Black Metal band Plamen, created in 2006.",
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
        title: "Plamen | About Us. Plamen - Black Metal band from Mordor",
        description: "Plamen | About Us. Visit the official website of the band Plamen.",
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

export default function Samples() {
    return (
        <div className="custom-font flex justify-center pt-10 sm:py-7 bg-main-bg bg-cover bg-fixed bg-top bg-no-repeat min-h-screen sm:h-fit">
            <div className="max-w-[1200px] w-full flex flex-col gap-3 text-gray-300">
                <div className="space-y-2 pl-4 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl text-gray-800 sm:text-4xl md:text-6xl leading-9 sm:leading-10 md:leading-14 tracking-tight">
                        About Us
                    </h1>
                </div>
                {aboutList.map((item) => (
                    <div key={item.titleRU} className="w-full text-sm px-2">
                        <div className="flex justify-between">
                            <p className="mx-4 text-nowrap">{item.titleRU}</p>
                            <p className="mx-4 italic">{item.stanzaRU}</p>
                        </div>
                        <div className="mt-5">
                            <p>{item.descriptionRU}</p>
                        </div>
                        <Separator className="my-12 sm:max-w-7xl max-w-72 mx-auto" />
                    </div>
                ))}
                {aboutList.map((item) => (
                    <div key={item.titleEN} className="w-full text-sm px-2">
                        <div className="flex justify-between">
                            <p className="mx-4 text-nowrap">{item.titleEN}</p>
                            <p className="mx-4 italic">{item.stanzaEN}</p>
                        </div>
                        <div className="mt-5">
                            <p>{item.descriptionEN}</p>
                        </div>
                        <Separator className="my-12 sm:max-w-7xl max-w-72 mx-auto" />
                    </div>
                ))}
            </div>
        </div>
    );
}
