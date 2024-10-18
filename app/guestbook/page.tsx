import Form from "../components/form";
import prisma from "../db";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Plamen | Guestbook",
    description: "Plamen | Guestbook. Black Metal band from Mordor, created in 2006.",
    keywords: ["Black Metal", "Music", "Plamen", "Пламень"],
    authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
    applicationName: "Plamen Official",
    openGraph: {
        title: "Plamen | Guestbook - Black Metal band from Mordor",
        description:
            "Plamen | Guestbook. Official website of the Black Metal band Plamen, created in 2006.",
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
        title: "Plamen | Guestbook. Plamen - Black Metal band from Mordor",
        description: "Plamen | Guestbook. Visit the official website of the band Plamen.",
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

interface GuestbookEntry {
    message: string;
    id: string;
}

async function getEntries() {
    const data = await prisma.guestbook.findMany({
        take: 15,
        orderBy: {
            created_at: "desc",
        },
    });
    return data;
}

export const revalidate = 60;

export default async function Guestbook() {
    const data = await getEntries();

    return (
        <div className="custom-font w-full flex justify-center bg-main-bg bg-cover bg-fixed bg-top bg-no-repeat min-h-screen sm:h-fit">
            <div className="w-full max-w-[1200px] px-4 md:px-0">
                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl text-gray-800 sm:text-4xl md:text-6xl leading-9 sm:leading-10 md:leading-14 tracking-tight">
                        Guestbook
                    </h1>
                </div>
                <div className="w-full">
                    <div className="max-w-[500px] mx-auto mt-8">
                        <Form />
                        <div className="flex flex-col space-y-4 text-gray-300">
                            {data.map((entry: GuestbookEntry) => (
                                <div
                                    key={entry.id}
                                    className="w-full text-sm break-words"
                                >
                                    <p>{entry.message}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
