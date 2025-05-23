/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";
import { redirects } from "./redirects"; // Import redirects from the new file
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
		return redirects(); // Use the imported redirects function
	},
};

export default withNextIntl(nextConfig);
