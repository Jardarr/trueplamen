import { ChevronRight } from "lucide-react";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import { useTranslations } from "next-intl";
import { Link } from "../../../i18n/routing";

export default function PreviewVoxOuroborosDagaz() {
	const t = useTranslations("DagazPrewiew");
	const cleanTitle = DOMPurify.sanitize(t("title"));
	return (
		<div className="custom-font w-full max-w-[1000px] pt-10 sm:py-7 gap-3">
			<div className="news-box bg-neutral-900 rounded-md">
				<Link href="/news/vox-ouroboros-dagaz" className="overflow-hidden flex flex-col sm:flex-row justify-between items-center">
					<div className="w-full h-[180px] sm:w-[200px] sm:h-[200px]">
						<Image className="h-full w-full object-cover rounded-t-md sm:rounded-l-md sm:rounded-r-none" src="/covers/vox-ouroboros-dagaz-BIG.jpg" alt="" width={150} height={150} />
					</div>
					<div className="flex-1 m-4">
						{/* <p className="text-gray-300 text-sm sm:text-xl">NEW !!!</p> */}
						<h1 className="text-gray-300 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: cleanTitle }}></h1>
						<span className="text-gray-400 text-sm">20.03.2025</span>
						<p className="news-link text-sm text-right flex items-center justify-end">
							{t("more")}
							<ChevronRight size={16} />
						</p>
					</div>
				</Link>
			</div>
		</div>
	);
}
