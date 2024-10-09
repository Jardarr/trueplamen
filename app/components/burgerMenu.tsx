"use client";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function BurgerMenu() {
	return (
		<div className="flex items-center">
			<Sheet>
				<SheetTrigger className="align-middle w-6 h-6 rounded-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
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
						<SheetTitle><Link href="/samples">Samples</Link></SheetTitle>
						<SheetTitle><Link href="/associates">Associates</Link></SheetTitle>
						<SheetTitle><Link href="/guestbook">Guestbook</Link></SheetTitle>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</div>
	);
}
