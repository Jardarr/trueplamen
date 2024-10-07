"use client";

import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "./burgerMenu";

export default function Header() {
    return (
        <div className="flex w-full justify-between">
            <Link href="/">
                <Image
                    className="w-30 p-2"
                    src="/head-logo.png"
                    width={150}
                    height={30}
                    alt="logo"
                />
            </Link>
            <div className="hidden sm:flex items-center">
                <Link href="/samples" className="text-gray-300 font-thin custom-font mx-2">
                    Samples
                </Link>
                <Link href="/associates" className="text-gray-300 font-thin custom-font mx-2">
                    Associates
                </Link>
                <Link href="/guestbook" className="text-gray-300 font-thin custom-font mx-2">
                    Guestbook
                </Link>
            </div>
            <div className="flex items-center sm:hidden">
                <BurgerMenu />
            </div>
        </div>
    );
}
