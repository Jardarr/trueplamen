"use client";

import Link from "next/link";
import Image from "next/image";
import BurgerMenu from "./burgerMenu";

export default function Navbar() {
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
			<BurgerMenu />
		</div>
	);
}
