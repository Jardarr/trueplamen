/** @type {import('next').NextConfig} */
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
};

export default nextConfig;
