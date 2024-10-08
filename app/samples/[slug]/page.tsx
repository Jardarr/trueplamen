import AudioPlayer from "@/app/components/audioPlayer";
import albumList from "@/app/utils/albumList";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface AlbumProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return albumList.map((item) => ({
        slug: item.slug,
    }));
}

const Album = ({ params }: AlbumProps) => {
    const { slug } = params;

    const album = albumList.find((item) => item.slug === slug);

    if (!album) {
        return <div>Album not found</div>;
    }

    const audio = album.audio ?? "";
    const audioTitle = album.audioTitle ?? "";

    return (
        <div className="custom-font bg-img relative w-full flex flex-col items-center gap-8 pt-10 sm:justify-center min-h-screen sm:h-fit pb-20">
            <div className="max-w-[900px] w-full flex flex-col sm:flex-row">
                <div className="flex flex-col items-center bg-neutral-800/45 p-3 rounded-md">
                    <Image
                        src={album.imageBIG}
                        alt={album.alt}
                        width={500}
                        height={500}
                        className="rounded-md px-12 md:px-0 flex-1"
                    />
                    <h1 className="text-gray-300 text-base">{album.titleRU}</h1>
                    <h2 className="text-gray-400 text-sm text-center font-thin">
                        {album.titleEN}
                    </h2>
                </div>
                <div className="flex flex-col text-gray-300 px-12 mt-3 sm:mt-0">
                    <AudioPlayer audio={audio} audioTitle={audioTitle} />
                    <div className="mt-4">{album.trackRU}</div>
                    <div className="mt-2">{album.trackEN}</div>
                    <h3 className="mt-4 underline hover:text-gray-400 transition-colors ease-in-out">
                        <a target="_blank" href={album.bcLink}>
                            Слушать на Bandcamp
                        </a>
                    </h3>
                </div>
            </div>
            <Separator className="my-12 sm:max-w-7xl max-w-72 mx-auto" />
            <div className="max-w-[900px] w-full">
                {/* <div>{album.textRU}</div>
				<div>{album.textEN}</div> */}
                {album.texts ? (
                    album.texts.map((text, index) => (
                        <Accordion key={index} type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="w-full px-4 sm:px-0 text-gray-300">{album.texts ? album.texts[index].songTitle : null}</AccordionTrigger>
                                <AccordionContent>
                                    <div
                                        className="max-w-[900px] w-full flex flex-col sm:flex-row text-gray-300 text-sm font-thin gap-6 px-4"
                                    >
                                        <div className="sm:w-1/2">{text.textRU}</div>
                                        <div className="sm:w-1/2">{text.textEN}</div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ))
                ) : (
                    <div>No texts available</div>
                )}
            </div>
        </div>
    );
};

export default Album;
