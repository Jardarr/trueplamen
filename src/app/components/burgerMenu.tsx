"use client";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';

export default function BurgerMenu() {
	const [isSheetOpen, setIsSheetOpen] = useState(false);

	const handleLinkClick = () => {
		setIsSheetOpen(false);
	};
	const t = useTranslations("NavMenu");
	return (
		<div className="flex items-center">
			<Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
				<SheetTrigger onClick={() => setIsSheetOpen(true)} className="align-middle w-6 h-6 rounded-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6 text-gray-200"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle><Link onClick={handleLinkClick} className="custom-font" href="/about-us">{t("aboutUs")}</Link></SheetTitle>
						<SheetTitle><Link onClick={handleLinkClick} className="custom-font" href="/samples">{t("samples")}</Link></SheetTitle>
						<SheetTitle><Link onClick={handleLinkClick} className="custom-font" href="/gallery">{t("gallery")}</Link></SheetTitle>
						<SheetTitle><Link onClick={handleLinkClick} className="custom-font" href="/associates">{t("associates")}</Link></SheetTitle>
						<SheetTitle><Link onClick={handleLinkClick} className="custom-font" href="/guestbook">{t("guestbook")}</Link></SheetTitle>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</div>
	);
}
