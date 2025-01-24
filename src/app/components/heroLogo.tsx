"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function HeroLogo() {
	const cardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const card = cardRef.current;

		if (!card) {
			return;
		}

		const handleMouseMove = (e: MouseEvent) => {
			const rect = card.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			const xPercent = gsap.utils.mapRange(0, rect.width, -20, 20, x);
			const yPercent = gsap.utils.mapRange(0, rect.height, -20, 20, y);

			gsap.to(card, {
				rotationY: xPercent,
				rotationX: yPercent,
				ease: "power2.out",
				duration: 0.5,
			});
		};

		const handleMouseLeave = () => {
			gsap.to(card, {
				rotationY: 0,
				rotationX: 0,
				ease: "power2.out",
				duration: 0.5,
			});
		};

		card.addEventListener("mousemove", handleMouseMove);
		card.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			if (card) {
				card.removeEventListener("mousemove", handleMouseMove);
				card.removeEventListener("mouseleave", handleMouseLeave);
			}
		};
	}, []);

	return (
		<div
			ref={cardRef}
			style={{
				perspective: "1000px",
				filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.8))",
			}}
		>
			<Image
				src="/hero-logo.png"
				alt="hero image"
				width={950}
				height={800}
			/>
		</div>
	);
}
