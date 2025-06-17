"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function BlackoutAnimate() {
	useEffect(() => {
		gsap.to(".wall", {
			delay: 0.2,
			opacity: 0,
			duration: 0.5,
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
			delay: 0.4,
			opacity: 1,
			duration: 0.5,
			ease: "power1.inOut",
		});
	}, []);

	return null;
}
