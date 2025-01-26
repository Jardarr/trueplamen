"use client";

import Image from "next/image";
import BurgerMenu from "./burgerMenu";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./languageSwitcher";
import { useTranslations } from "next-intl";
import { Link } from "../../i18n/routing";

export default function Header() {
    const pathname = usePathname();
    const isSampleSlug = /^\/en\/samples\/[^/]+$|\/ru\/samples\/[^/]+$/.test(pathname);

    const t = useTranslations("NavMenu");
    return (
        <div className="flex w-full">
            <div className="md:px-24 flex items-center justify-between w-full">
                <div className="flex-1">
                    <Link href="/">
                        <Image className="p-2" src="/head-logo.png" width={150} height={30} alt="logo" />
                    </Link>
                </div>
                <div className="hidden sm:flex items-center">
                    <Link
                        href="/about-us"
                        className={`${
                            pathname === "/en/about-us" || pathname === "/ru/about-us"
                                ? "underline text-gray-300 hover:text-gray-400 transition-colors ease-in-out font-thin custom-font mx-2"
                                : "no-underline text-gray-300 hover:text-gray-400 transition-colors ease-in-out font-thin custom-font mx-2"
                        }`}>
                        {t("aboutUs")}
                    </Link>
                    <Link
                        href="/samples"
                        className={`${
                            (pathname === "/en/samples" || pathname === "/ru/samples") || isSampleSlug
                                ? "underline text-gray-300 hover:text-gray-400 transition-colors ease-in-out font-thin custom-font mx-2"
                                : "no-underline text-gray-300 hover:text-gray-400 transition-colors ease-in-out font-thin custom-font mx-2"
                        }`}>
                        {t("samples")}
                    </Link>
                    <Link
                        href="/gallery"
                        className={`${
                            pathname === "/en/gallery" || pathname === "/ru/gallery"
                                ? "underline text-gray-300 hover:text-gray-400 transition-colors ease-in-out font-thin custom-font mx-2"
                                : "no-underline text-gray-300 hover:text-gray-400 transition-colors ease-in-out font-thin custom-font mx-2"
                        }`}>
                        {t("gallery")}
                    </Link>
                    <Link
                        href="/associates"
                        className={`${
                            pathname === "/en/associates" || pathname === "/ru/associates"
                                ? "underline text-gray-300 hover:text-gray-400 transition-colors ease-in-out font-thin custom-font mx-2"
                                : "no-underline text-gray-300 hover:text-gray-400 transition-colors ease-in-out font-thin custom-font mx-2"
                        }`}>
                        {t("associates")}
                    </Link>
                    <Link
                        href="/guestbook"
                        className={`${
                            pathname === "/en/guestbook" || pathname === "/ru/guestbook"
                                ? "underline text-gray-300 hover:text-gray-400 transition-colors ease-in-out font-thin custom-font mx-2"
                                : "no-underline text-gray-300 hover:text-gray-400 transition-colors ease-in-out font-thin custom-font mx-2"
                        }`}>
                        {t("guestbook")}
                    </Link>
                </div>
            </div>
            <LanguageSwitcher />
            <div className="flex items-center sm:hidden">
                <BurgerMenu />
            </div>
        </div>
    );
}
