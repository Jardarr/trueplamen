import AudioPlayer from "@/src/app/components/audioPlayer";
import anotherOnes from "./anotherOnes.utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import DOMPurify from "isomorphic-dompurify";
import { useTranslations } from "next-intl";
import { Metadata } from "next";
import type { Viewport } from "next";
import ImageWithSkeleton from "../../../components/imageWithSkeleton";

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: "black",
};

export const metadata: Metadata = {
    title: "Plamen | Another Ones",
    description: "Another Ones. You have come into this world to blaze in the sun of the City... And the fiercer the evil, the brighter burns the flame of pure hearts!",
    keywords: ["Black Metal", "Music", "Plamen", "Пламень"],
    authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
    applicationName: "Plamen Official",
    openGraph: {
        title: "Plamen | Another Ones",
        description: "Another Ones. You have come into this world to blaze in the sun of the City... And the fiercer the evil, the brighter burns the flame of pure hearts!",
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
        title: "Plamen | Another Ones",
        description: "Another Ones. You have come into this world to blaze in the sun of the City... And the fiercer the evil, the brighter burns the flame of pure hearts!",
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

const AnotherOnes = () => {
    const t = useTranslations("Albums");
    const album = anotherOnes[0];
    const audio = album.audio ?? "";
    const audioTitle = album.audioTitle ?? "";
    const tracklist = t("Release.AnotherOnes.tracklist");
    const sanitizedTracklist = DOMPurify.sanitize(tracklist);
    return (
        <div className="custom-font relative w-full flex flex-col items-center gap-8 pt-10 sm:justify-center pb-20 bg-main-bg bg-cover bg-fixed bg-top bg-no-repeat min-h-screen sm:h-fit">
            <div className="max-w-[900px] w-full flex flex-col sm:flex-row">
                <div className="max-w-[500px] w-full flex flex-col items-center bg-neutral-800/45 p-3 rounded-md">
                    <ImageWithSkeleton
                        image={{
                            src: album.imageBIG,
                            alt: album.alt,
                            width: 500,
                            height: 500,
                            className: "w-full max-w-[500px] h-full rounded-md",
                        }}
                        skeleton={{
                            className: "w-full max-w-[500px] h-full rounded-md bg-gray-600 animate-pulse",
                        }}
                    />
                    <h1 className="text-gray-300 text-base">{t(`Release.AnotherOnes.title`)}</h1>
                    <h2 className="text-gray-400 text-sm text-center font-thin">{t("Release.AnotherOnes.description")}</h2>
                </div>
                <div className="flex flex-col text-gray-300 px-12 mt-3 sm:mt-0">
                    <AudioPlayer audio={audio} audioTitle={audioTitle} />
                    <div className="mt-4" dangerouslySetInnerHTML={{ __html: sanitizedTracklist }}></div>
                    <h3 className="mt-4 underline hover:text-gray-400 transition-colors ease-in-out">
                        <a target="_blank" href={album.bcLink}>
                            {t("Bandcamp.listen")}
                        </a>
                    </h3>
                </div>
            </div>
            <Separator className="my-12 sm:max-w-7xl max-w-72 mx-auto" />
            <div className="max-w-[900px] w-full">
                {album.texts ? (
                    album.texts.map((text, index) => (
                        <Accordion key={index} type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="w-full px-4 sm:px-0 text-gray-300">{album.texts ? album.texts[index].songTitle : null}</AccordionTrigger>
                                <AccordionContent>
                                    <div className="max-w-[900px] w-full flex flex-col sm:flex-row text-gray-300 text-sm font-thin gap-6 px-4">
                                        <div className="sm:w-1/2">{text.textRU}</div>
                                        <div className="sm:w-1/2">{text.textEN}</div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ))
                ) : (
                    <div>No texts available</div>
                )}
            </div>
        </div>
    );
};

export default AnotherOnes;
