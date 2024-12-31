import Link from "next/link";
import BandCamp from "./links/bandCamp";
import YouTube from "./links/youTube";
import MailLink from "./links/mailLink";

export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<div className="custom-font flex flex-col lg:justify-between lg:flex-row md:text-xs text-gray-500 text-xs">
			<div className="flex justify-center sm:justify-start flex-col">
				<div className="flex justify-center w-full">
					<div className="flex justify-center sm:justify-start items-center flex-wrap">
						<Link
							translate="no"
							className="px-2 hover:text-gray-300"
							href="/about-us"
						>
							About us
						</Link>
					</div>
					<div className="flex justify-center sm:justify-start items-center">
						<Link
							translate="no"
							className="px-2 hover:text-gray-300"
							href="/samples"
						>
							Samples
						</Link>
					</div>
					<div className="flex justify-center sm:justify-start items-center">
						<Link
							translate="no"
							className="px-2 hover:text-gray-300"
							href="/gallery"
						>
							Gallery
						</Link>
					</div>
					<div className="flex justify-center sm:justify-start items-center flex-wrap">
						<Link
							translate="no"
							className="px-2 hover:text-gray-300"
							href="/associates"
						>
							Associates
						</Link>
					</div>
					<div className="flex justify-center sm:justify-start items-center flex-wrap">
						<Link
							translate="no"
							className="px-2 hover:text-gray-300"
							href="/guestbook"
						>
							Guestbook
						</Link>
					</div>
				</div>
				<div className="w-full flex flex-col items-center sm:items-start px-2">
					<span translate="no">&copy; {currentYear} Designed by Jardarr</span>
					<span translate="no">&copy; {currentYear} All Rights Reserved</span>
				</div>
			</div>
			<div className="flex justify-center items-center lg:justify-end w-full text-center lg:w-1/3 gap-2">
				<BandCamp />
				<YouTube />
				<MailLink />
			</div>
		</div>
	);
}
