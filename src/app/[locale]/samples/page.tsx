import Image from "next/image";
import albumList from "../../utils/albumList";
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/routing";
import { getAlbumsData } from "../../utils/albumData";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Plamen | Samples",
	description: "Plamen | Samples. Black Metal band from Mordor, created in 2006.",
	keywords: ["Black Metal", "Music", "Plamen", "Пламень"],
	authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
	applicationName: "Plamen Official",
	openGraph: {
		title: "Plamen | Samples - Black Metal band from Mordor",
		description: "Plamen | Samples. Official website of the Black Metal band Plamen, created in 2006.",
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
		title: "Plamen | Samples. Plamen - Black Metal band from Mordor",
		description: "Plamen | Samples. Visit the official website of the band Plamen.",
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
	const t = useTranslations("Albums");
	const Album = getAlbumsData( t );
	return (
        <div className="custom-font relative flex justify-center pt-10 sm:py-7 gap-3 bg-main-bg bg-cover bg-fixed bg-top bg-no-repeat min-h-screen sm:h-fit">
            <div className="cover-box max-w-[1200px] flex justify-center flex-wrap gap-3">
                {albumList.map((album) => {
					const albumData = Album.find((a) => a.key === album.key);
                    return (
                        <div key={album.alt} className="cover-link h-fit bg-neutral-900/45 p-3 rounded-md">
                            <Link href={album.link}>
                                <Image className="rounded-md" src={album.image} alt={album.alt} width={300} height={300} />
                                {albumData && (
                                    <>
                                        <h1 className="text-gray-300 text-center text-base">{albumData.title}</h1>
                                        <h2 className="text-gray-400 text-sm text-center font-thin">{albumData.description}</h2>
                                    </>
                                )}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
