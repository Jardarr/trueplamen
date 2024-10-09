import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./styles/index.scss";
import Footer from "./components/footer";
import Header from "./components/header";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});
const gtaWasted = localFont({
	src: "./fonts/gta-russian.woff",
	variable: "--font-gta",
	weight: "100 900",
});
const cormorantSCReg = localFont({
	src: "./fonts/CormorantSC-Regular.ttf",
	variable: "--font-corSC",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "True Plamen",
	description: "Black Metal band from Mordor, created in 2006.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} ${gtaWasted.variable} ${cormorantSCReg.variable} antialiased bg-black`}>
				<div className="px-4 md:px-24">
					<Header />
				</div>
				{children}
				<div className="px-4 md:px-24 py-4"><Footer /></div>
			</body>
		</html>
	);
}
