"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function AnimatedContent() {
	useEffect(() => {
		gsap.to(".wall", {
			delay: 5,
			opacity: 0,
			duration: 3,
			ease: "power1.inOut",
			onComplete: () => {
				const wallElement = document.querySelector(
					".wall"
				) as HTMLElement;
				if (wallElement) {
					wallElement.style.zIndex = "-1";
				}
			},
		});
		gsap.to(".heroCard", {
			delay: 6,
			opacity: 1,
			duration: 3,
			ease: "power1.inOut",
		});
		gsap.to(".stanza", {
			delay: 0.5,
			opacity: 1,
			duration: 2,
			ease: "power1.inOut",
		});
	}, []);

	return null;
}
