import BandCamp from "./links/bandCamp";
import YouTube from "./links/youTube";
import MailLink from "./links/mailLink";
import CopyrightInfo from "./copyrightInfo";
import { useTranslations } from "next-intl";
import { Link } from "../../i18n/routing";

export default function Footer() {
	const t = useTranslations("NavMenu");
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
							{t("aboutUs")}
						</Link>
					</div>
					<div className="flex justify-center sm:justify-start items-center">
						<Link
							translate="no"
							className="px-2 hover:text-gray-300"
							href="/samples"
						>
							{t("samples")}
						</Link>
					</div>
					<div className="flex justify-center sm:justify-start items-center">
						<Link
							translate="no"
							className="px-2 hover:text-gray-300"
							href="/gallery"
						>
							{t("gallery")}
						</Link>
					</div>
					<div className="flex justify-center sm:justify-start items-center flex-wrap">
						<Link
							translate="no"
							className="px-2 hover:text-gray-300"
							href="/associates"
						>
							{t("associates")}
						</Link>
					</div>
					<div className="flex justify-center sm:justify-start items-center flex-wrap">
						<Link
							translate="no"
							className="px-2 hover:text-gray-300"
							href="/guestbook"
						>
							{t("guestbook")}
						</Link>
					</div>
				</div>
				<CopyrightInfo />
			</div>
			<div className="flex justify-center items-center lg:justify-end w-full text-center lg:w-1/3 gap-2">
				<BandCamp />
				<YouTube />
				<MailLink />
			</div>
		</div>
	);
};
