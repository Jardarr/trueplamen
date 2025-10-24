"use client";

import { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageProps {
    src: string;
    alt: string;
    width: number | string;
    height: number | string;
    className?: string;
    onClick?: () => void;
}

interface SkeletonProps {
    className?: string;
}

interface CardProps {
    image: ImageProps;
    skeleton: SkeletonProps;
}

export default function ImageWithSkeleton({ image, skeleton }: CardProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const widthClass = typeof image.width === 'number' ? `w-[${image.width}px]` : image.width;
    const heightClass = typeof image.height === 'number' ? `h-[${image.height}px]` : image.height;

    return (
        <div className={`relative ${widthClass} ${heightClass}`} onClick={image.onClick}>
            {!isLoaded && <Skeleton className={`absolute inset-0 ${widthClass} ${heightClass} ${skeleton.className}`} />}

            <Image
                src={image.src}
                alt={image.alt}
                width={typeof image.width === 'number' ? image.width : undefined}
                height={typeof image.height === 'number' ? image.height : undefined}
                className={`${image.className} transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
                onLoadingComplete={() => setIsLoaded(true)}
            />
        </div>
    );
}
