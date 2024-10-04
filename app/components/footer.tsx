import Link from "next/link";
import BandCamp from "./links/bandCamp";
import YouTube from "./links/youTube";
import MailLink from "./links/mailLink";

export default function Footer() {
	return (
		<div className="flex flex-col lg:justify-between lg:flex-row md:text-xs text-gray-500 text-xs">
			<div className="flex justify-center flex-col">
				<div className="flex justify-center items-center flex-wrap">
					<Link
						translate="no"
						className="px-2 hover:text-gray-300"
						href="/poems/about-gods"
					>
						Goðakvæði
					</Link>
					<Link
						translate="no"
						className="px-2 hover:text-gray-300"
						href="/poems/about-heroes"
					>
						Hetjukvæði
					</Link>
					<Link
						translate="no"
						className="px-2 hover:text-gray-300"
						href="/poems/edda-songs"
					>
						Eddukvæði
					</Link>
					<Link
						translate="no"
						className="px-2 hover:text-gray-300"
						href="/poems/edda-app"
					>
						Viðbætir
					</Link>
					<Link
						translate="no"
						className="px-2 hover:text-gray-300"
						href="/poems/poetry"
					>
						Ljóð
					</Link>
					<Link
						translate="no"
						className="px-2 hover:text-gray-300"
						href="/poems/stora-edda"
					>
						Stóra Edda
					</Link>
					<Link
						translate="no"
						className="px-2 hover:text-gray-300"
						href="/poems/on-dictionary"
					>
						Orðabók
					</Link>
				</div>
				<div className="w-full flex justify-center lg:justify-start px-2">
					<span translate="no">&copy; 2024 Designed by Jardarr</span>
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
