/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "fonqjzxztszpkmtoctbv.supabase.co",
				port: "",
				pathname: "/**",
			},
		],
	},
	async redirects() {
		return [
			{
				source: "/news/king-ov-life-and-death", // Старый путь
				has: [
					{
						type: "header",
						key: "accept-language", // Читаем заголовок Accept-Language
						value: "(ru).*", // Проверяем, содержит ли язык "ru"
					},
				],
				destination: "/ru/news/king-ov-life-and-death", // Редирект на русскую страницу
				permanent: false, // Временный редирект (307)
			},
			{
				source: "/news/king-ov-life-and-death",
				destination: "/en/news/king-ov-life-and-death", // Редирект по умолчанию (английский)
				permanent: false, // Временный редирект (307)
			},
		];
	},
};

export default withNextIntl(nextConfig);
