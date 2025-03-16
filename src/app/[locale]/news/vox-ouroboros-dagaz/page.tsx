import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import type { Viewport } from "next";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
	themeColor: "black",
};

export const metadata: Metadata = {
	title: "Vox Ouroboros | Dagaz",
	description: "The day of the vernal equinox 2025 is the starting point of life Vox Ouroboros - side project of the black metal band PLAMEN.",
	keywords: ["Black Metal", "Music", "Plamen", "Пламень", "Vox Ouroboros"],
	authors: [{ name: "jardarr", url: "https://jardarr-portfolio.vercel.app/" }],
	applicationName: "Plamen Official",
	openGraph: {
		title: "Vox Ouroboros | Dagaz",
		description: "The day of the vernal equinox 2025 is the starting point of life Vox Ouroboros - side project of the black metal band PLAMEN.",
		url: "https://plamenband.ru",
		siteName: "Plamen Official",
		images: [
			{
				url: "/og-dagaz.jpg",
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
		title: "Vox Ouroboros | Dagaz",
		description: "The day of the vernal equinox 2025 is the starting point of life Vox Ouroboros - side project of the black metal band PLAMEN.",
		images: ["/og-dagaz.jpg"],
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

export default function VoxOuroborosDagaz() {
	return (
		<div className="custom-font relative flex justify-center items-center pt-10 sm:py-7 gap-3 bg-main-bg bg-cover bg-fixed bg-top bg-no-repeat min-h-screen sm:h-fit">
			<div className="cover-box max-w-[1200px] flex justify-center mx-4">
				<div className="cover-link h-fit bg-neutral-900/45 p-3 rounded-md">
					<div className="flex flex-col items-center lg:flex-row">
						<Image className="rounded-md h-[250px] w-[250px] sm:w-[400px] sm:h-auto" src="/covers/vox-ouroboros-dagaz-BIG.jpg" alt="" width={400} height={400} />
						<div className="flex flex-col m-4 sm:mx-8">
							<div>
								<h1 className="text-gray-300 text-sm sm:text-base mb-3">
									Музыка — это нечто большее, чем просто последовательность звуков. Это особая магия, где каждая нота проникает в глубины души. Представь себе ночь, когда природа
									замирает, и только далекие огни иных миров мерцают во тьме. Музыка начинает звучать, ноты плавно перетекают одна в другую и, словно голоса древних духов,
									обволакивают тебя. Они рассказывают истории за пределами слов, и ты ощущаешь себя частью чего-то особенного, сокровенного. Погрузись в этот мистический симбиоз
									мелодий и эмоций вместе с Vox Ouroboros, и пусть эта музыка наполнит твое сердце золотом нового дня!
								</h1>
								<h2 className="text-gray-400 text-sm">
									Music is more than just a sequence of sounds. It&apos;s a special magic, where each note penetrates into the depths of the soul. Imagine a night, when nature freezes,
									and only the distant lights of other worlds flicker in the darkness. Music begins to sound, the notes flow smoothly one into another and envelope you like the
									voices of ancient spirits. They tell stories beyond words and you feel yourself part of something particular and cryptic. Immerse yourself in this mystical
									symbiosis of melodies and emotions with Vox Ouroboros, and let this music fill your heart with the gold of a new day!
								</h2>
							</div>
							<p className="text-right mt-10 sm:mt-30">
								<Link
									href="https://voxouroboros.bandcamp.com/album/dagaz"
									target="_blank"
									className="text-gray-400 hover:text-gray-300 transition ease text-sm sm:text-base inline-flex items-center justify-end">
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
