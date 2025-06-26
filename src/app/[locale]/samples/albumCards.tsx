"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

interface SkeletonProps {
    className?: string;
}

interface CardProps {
    image: ImageProps;
    skeleton: SkeletonProps;
}

export default function AlbumCards({ image, skeleton }: CardProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="relative" style={{ width: image.width, height: image.height }}>
            {/* Skeleton поверх */}
            {!isLoaded && <Skeleton className={`absolute inset-0 ${skeleton.className}`} />}

            {/* Картинка загружается всегда */}
            <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={`${image.className} transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                onLoadingComplete={() => setIsLoaded(true)}
            />
        </div>
    );
}
