import { Metadata } from "next";
import GuestbookServer from "../../components/guestbookServer";
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
	title: "Plamen | Guestbook",
	description: "Guestbook. Black Metal band from Mordor, created in 2006.",
	keywords: ["Black Metal", "Music", "Plamen", "Пламень"],
	authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
	applicationName: "Plamen Official",
	openGraph: {
		title: "Plamen | Guestbook - Black Metal band from Mordor",
		description: "Guestbook. Official website of the Black Metal band Plamen, created in 2006.",
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
		description: "Guestbook. Visit the official website of the band Plamen.",
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

export default function Guestbook() {
	const t = useTranslations("Guestbook");
	return (
		<div className="custom-font w-full flex justify-center bg-main-bg bg-cover bg-fixed bg-top bg-no-repeat min-h-screen sm:h-fit">
			<div className="w-full max-w-[1200px] px-4 md:px-0">
				<div className="space-y-2 pt-6 pb-8 md:space-y-5">
					<h1 className="text-3xl text-gray-800 sm:text-4xl md:text-6xl leading-9 sm:leading-10 md:leading-14 tracking-tight">{t("title")}</h1>
				</div>
				<GuestbookServer />
			</div>
		</div>
	);
}
