import AudioPlayer from "@/app/components/audioPlayer";
import albumList from "@/app/utils/albumList";
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
		<div className="bg-img relative w-full flex flex-col items-center gap-8 pt-10 sm:justify-center min-h-screen sm:h-fit pb-20">
			<div className="max-w-[900px] w-full flex flex-col sm:flex-row">
				<div className="flex flex-col items-center justify-center">
					<Image
						src={album.imageBIG}
						alt={album.alt}
						width={500}
						height={500}
						className="rounded-md px-12 md:px-0"
					/>
					<h1 className="text-gray-300 text-base">{album.titleRU}</h1>
					<h2 className="text-gray-400 text-sm text-center font-thin">{album.titleEN}</h2>
				</div>
				<div className="flex items-center flex-col text-gray-300 px-12 mt-3 sm:mt-0">
					<AudioPlayer audio={audio} audioTitle={audioTitle} />
					<div className="mt-4">{album.trackRU}</div>
					<div className="mt-2">{album.trackEN}</div>
				</div>
			</div>
			<Separator className="my-12 sm:max-w-7xl max-w-72 mx-auto" />
			<div className="max-w-[900px] flex flex-col sm:flex-row text-gray-300 text-sm font-thin gap-6 px-4">
				<div>{album.textRU}</div>
				<div>{album.textEN}</div>
			</div>
		</div>
	);
};

export default Album;
