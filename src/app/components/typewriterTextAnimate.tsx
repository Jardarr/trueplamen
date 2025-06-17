"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Quote } from "lucide-react";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

export default function TypewriterTextAnimate() {
    const textRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);
    const blockRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!textRef.current || !iconRef.current || !blockRef.current || !containerRef.current) return;

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
            onEnter: () => {
                // Анимация текста
                gsap.to(textRef.current, {
                    text: {
                        value: "Вы пришли в мир, чтоб гореть в солнце Града…<br />А чем лютей зло, тем ярче пламень чистых сердец!",
                    },
                    duration: 8,
                    ease: "none",
                    onComplete: () => {
                        // Анимация иконки
                        gsap.to(iconRef.current, {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            ease: "power2.out",
                            onComplete: () => {
                                // Появление фона
                                gsap.to(blockRef.current, {
                                    opacity: 1,
                                    scaleY: 1,
                                    duration: 1.2,
                                    ease: "power2.out",
                                    onComplete: () => {
                                        sessionStorage.setItem("typewriterPlayed", "true");
                                    },
                                });
                            },
                        });
                    },
                });
            },
        });
    }, []);

    return (
        <div className="flex justify-center w-full max-w-[1000px] pt-10 sm:py-7">
            <div ref={containerRef} className="relative p-8 flex flex-col pl-4 w-full max-w-[580px] rounded-md overflow-hidden">
                <div ref={blockRef} className="absolute inset-0 rounded-md bg-neutral-800 border-l-8 border-neutral-700 opacity-0 scale-y-0 origin-bottom z-0" />
                <div ref={textRef} className="relative z-10 pl-4 font-Feofan text-gray-300 text-base sm:text-3xl whitespace-pre-line" />
                <div ref={iconRef} className="relative z-10 self-end text-gray-400 mt-2 opacity-0 translate-y-3">
                    <Quote />
                </div>
            </div>
        </div>
    );
}
