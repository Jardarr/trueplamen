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
			// Existing redirects
			{
				source: "/news/king-ov-life-and-death",
				has: [
					{
						type: "header",
						key: "accept-language",
						value: "(ru).*",
					},
				],
				destination: "/ru/news/king-ov-life-and-death",
				permanent: false,
			},
			{
				source: "/news/king-ov-life-and-death",
				destination: "/en/news/king-ov-life-and-death",
				permanent: false,
			},
			{
				source: "/gallery",
				has: [
					{
						type: "header",
						key: "accept-language",
						value: "(ru).*",
					},
				],
				destination: "/ru/gallery",
				permanent: false,
			},
			{
				source: "/gallery",
				destination: "/en/gallery",
				permanent: false,
			},
			{
				source: "/about-us",
				has: [
					{
						type: "header",
						key: "accept-language",
						value: "(ru).*",
					},
				],
				destination: "/ru/about-us",
				permanent: false,
			},
			{
				source: "/about-us",
				destination: "/en/about-us",
				permanent: false,
			},
			{
				source: "/associates",
				has: [
					{
						type: "header",
						key: "accept-language",
						value: "(ru).*",
					},
				],
				destination: "/ru/associates",
				permanent: false,
			},
			{
				source: "/associates",
				destination: "/en/associates",
				permanent: false,
			},
			{
				source: "/guestbook",
				has: [
					{
						type: "header",
						key: "accept-language",
						value: "(ru).*",
					},
				],
				destination: "/ru/guestbook",
				permanent: false,
			},
			{
				source: "/guestbook",
				destination: "/en/guestbook",
				permanent: false,
			},
			{
				source: "/news/vox-ouroboros-dagaz",
				has: [
					{
						type: "header",
						key: "accept-language",
						value: "(ru).*",
					},
				],
				destination: "/ru/news/vox-ouroboros-dagaz",
				permanent: false,
			},
			{
				source: "/news/vox-ouroboros-dagaz",
				destination: "/en/news/vox-ouroboros-dagaz",
				permanent: false,
			},
			{
				source: "/samples/anabasis-ov-spirit",
				has: [
					{
						type: "header",
						key: "accept-language",
						value: "(ru).*",
					},
				],
				destination: "/ru/samples/anabasis-ov-spirit",
				permanent: false,
			},
			{
				source: "/samples/anabasis-ov-spirit",
				destination: "/en/samples/anabasis-ov-spirit",
				permanent: false,
			},
			{
				source: "/samples/another-ones",
				has: [
					{
						type: "header",
						key: "accept-language",
						value: "(ru).*",
					},
				],
				destination: "/ru/samples/another-ones",
				permanent: false,
			},
			{
				source: "/samples/another-ones",
				destination: "/en/samples/another-ones",
				permanent: false,
			},
			{
				source: "/samples/blood-magic",
				has: [
					{
						type: "header",
						key: "accept-language",
						value: "(ru).*",
					},
				],
				destination: "/ru/samples/blood-magic",
				permanent: false,
			},
			{
				source: "/samples/blood-magic",
				destination: "/en/samples/blood-magic",
				permanent: false,
			},
			{
				source: "/samples/for-the-sun",
				has: [
					{
						type: "header",
						key: "accept-language",
						value: "(ru).*",
					},
				],
				destination: "/ru/samples/for-the-sun",
				permanent: false,
			},
			{
				source: "/samples/for-the-sun",
				destination: "/en/samples/for-the-sun",
				permanent: false,
			},
			{
				source: "/samples/seeds-ov-hell",
				has: [
					{
						type: "header",
						key: "accept-language",
						value: "(ru).*",
					},
				],
				destination: "/ru/samples/seeds-ov-hell",
				permanent: false,
			},
			{
				source: "/samples/seeds-ov-hell",
				destination: "/en/samples/seeds-ov-hell",
				permanent: false,
			},
			{
				source: "/samples/to-the-dust",
				has: [
					{
						type: "header",
						key: "accept-language",
						value: "(ru).*",
					},
				],
				destination: "/ru/samples/to-the-dust",
				permanent: false,
			},
			{
				source: "/samples/to-the-dust",
				destination: "/en/samples/to-the-dust",
				permanent: false,
			},
		];
	},
};

export default withNextIntl(nextConfig);
