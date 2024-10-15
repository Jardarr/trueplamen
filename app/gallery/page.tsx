"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Zoom, Navigation, Pagination } from "swiper/modules";

type ImageData = {
    id: number;
    alt: string;
    src: string;
};

type GalleryItem = {
    seeds_ov_hell?: ImageData[];
    for_the_sun?: ImageData[];
    to_ashes?: ImageData[];
    another_ones?: ImageData[];
    anabasis_of_spirit?: ImageData[];
    magick_of_blood?: ImageData[];
};

import galleryList from "../utils/galleryList";
import { Separator } from "@/components/ui/separator";

export default function Samples() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isBrowser, setIsBrowser] = useState(false);
    const [selectedImages, setSelectedImages] = useState<ImageData[]>([]);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const openModal = (images: ImageData[], index: number) => {
        setSelectedImages(images);
        setSelectedIndex(index);
        setModalOpen(true);
    };

    useEffect(() => {
        if (modalOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [modalOpen]);

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="custom-font flex justify-center pt-10 sm:py-7 bg-main-bg bg-cover bg-fixed bg-top bg-no-repeat min-h-screen sm:h-fit">
            <div className="max-w-[1200px] w-full flex flex-col">
                <div className="space-y-2 pl-4 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl text-gray-800 sm:text-4xl md:text-6xl leading-9 sm:leading-10 md:leading-14 tracking-tight">
                        Gallery
                    </h1>
                </div>
                <div className="flex flex-col flex-wrap gap-3">
                    {galleryList.map((item: GalleryItem, index: number) => (
                        <div key={index} className="cursor-pointer">
                            {Object.keys(item).map((key) => {
                                const images = item[key as keyof GalleryItem];
                                if (images && Array.isArray(images)) {
                                    return (
                                        <div key={key} className="flex flex-wrap gap-3 px-2">
                                            {images.map((img: ImageData, imgIndex: number) => (
                                                <Image
                                                    key={img.id}
                                                    className="rounded-md"
                                                    src={img.src}
                                                    alt={img.alt}
                                                    width={100}
                                                    height={100}
                                                    onClick={() => openModal(images, imgIndex)}
                                                />
                                            ))}
                                        </div>
                                    );
                                }
                            })}
                            <Separator className="my-12 sm:max-w-7xl max-w-72 mx-auto" />
                        </div>
                    ))}
                    {modalOpen && isBrowser && (
                        <div className="bg-black/60 top-0 left-0 fixed w-full h-full flex items-center justify-center z-10">
                            <svg
                                onClick={closeModal}
                                className="absolute top-3 right-4 text-gray-300 cursor-pointer z-10"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                            <Swiper
                                zoom={true}
                                navigation={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Zoom, Navigation, Pagination]}
                                initialSlide={selectedIndex}
                                className="mySwiper"
                            >
                                {selectedImages.map((img: ImageData, index: number) => (
                                    <SwiperSlide key={index} className="flex justify-center items-center">
                                        <div className="swiper-zoom-container flex items-center justify-center">
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                width={600}
                                                height={600}
                                                objectFit="contain"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
