import React from "react";
import Hero from "./components/hero";
import { Separator } from "@/components/ui/separator";
export default function Home() {
	return (
		<>
			<Hero />
			<Separator className="mt-4 sm:mt-40 max-w-7xl mx-auto" />
			<div className="text-gray-300 sm:text-2xl px-3 my-4 sm:my-40 flex justify-center">
				<div className="custom-font max-w-[1200px] italic">
					<p>IGNE NATURA RENOVATUR INTEGRA </p>
				</div>
			</div>
		</>
	);
}
