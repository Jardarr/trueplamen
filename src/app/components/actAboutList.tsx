"use client";
import { useRef, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import DOMPurify from "isomorphic-dompurify";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type Props = {
	title: string;
	stanza: string;
	description: string;
};

export default function AboutUsActs({ title, stanza, description }: Props) {
	const cleanStanza = DOMPurify.sanitize(stanza);
	const cleanDescription = DOMPurify.sanitize(description);
	const blockRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const el = blockRef.current;
		if (!el) return;

		const anim = gsap.fromTo(
			el,
			{ autoAlpha: 0, y: 50 },
			{
				duration: 1.2,
				autoAlpha: 1,
				y: 0,
				ease: "power2.out",
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					toggleActions: "play none none none",
				},
			}
		);

		return () => {
			anim.scrollTrigger?.kill();
			anim.kill();
		};
	}, []);

	return (
		<div ref={blockRef} className="w-full text-sm px-2 opacity-0">
			<div className="flex justify-between">
				<p className="mx-4 text-nowrap">{title}</p>
				<p className="mx-4 italic" dangerouslySetInnerHTML={{ __html: cleanStanza }}></p>
			</div>
			<div className="mt-5">
				<p dangerouslySetInnerHTML={{ __html: cleanDescription }}></p>
			</div>
			<Separator className="my-12 sm:max-w-7xl max-w-72 mx-auto" />
		</div>
	);
}
