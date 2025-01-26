import { getActsData } from "../../utils/actsData";
import { useTranslations } from "next-intl";
import { Metadata } from "next";
import ActAboutList from "../../components/actAboutList";
import type { Viewport } from "next";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
    themeColor: 'black',
};

export const metadata: Metadata = {
	title: "Plamen | About Us",
	description: "About Us. Black Metal band from Mordor, created in 2006.",
	keywords: ["Black Metal", "Music", "Plamen", "Пламень"],
	authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
	applicationName: "Plamen Official",
	openGraph: {
		title: "Plamen | About Us - Black Metal band from Mordor",
		description: "About Us. Official website of the Black Metal band Plamen, created in 2006.",
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
		description: "About Us. Visit the official website of the band Plamen.",
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

export default function AboutUs() {
	const t = useTranslations("AboutUs");
	// Получаем массив данных, передавая функцию t
	const acts = getActsData(t);
	return (
		<div className="custom-font flex justify-center pt-10 sm:py-7 bg-main-bg bg-cover bg-fixed bg-top bg-no-repeat min-h-screen sm:h-fit">
			<div className="max-w-[1200px] w-full flex flex-col gap-3 text-gray-300">
				<div className="space-y-2 pl-4 pt-6 pb-8 md:space-y-5">
					<h1 className="text-3xl text-gray-800 sm:text-4xl md:text-6xl leading-9 sm:leading-10 md:leading-14 tracking-tight">{t("title")}</h1>
				</div>
				{acts.map((act) => (
					<ActAboutList key={act.key} title={t(`acts.${act.key}.title`)} stanza={t(`acts.${act.key}.stanza`)} description={t(`acts.${act.key}.description`)} />
				))}
			</div>
		</div>
	);
}
