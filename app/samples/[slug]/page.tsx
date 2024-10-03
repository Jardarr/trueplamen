import coverList from "@/app/utils/coverList";
import Image from "next/image";

interface AlbumProps {
	params: {
		slug: string;
	};
}

export async function generateStaticParams() {
	return coverList.map((item) => ({
		slug: item.slug,
	}));
}

const Album = ({ params }: AlbumProps) => {
	const { slug } = params;

	const album = coverList.find((item) => item.slug === slug);

	if (!album) {
		return <div>Album not found</div>;
	}

	return (
		<div className="bg-img relative w-full flex items-center justify-center mt-10 h-custom-height">
			<div className="max-w-[900px] flex flex-col items-center justify-center">
				<Image
					src={album.imageBIG}
					alt={album.alt}
					width={500}
					height={500}
					className="rounded-md px-12 md:px-0"
				/>
				<h1 className="text-gray-300 text-2xl font-bold">{album.title}</h1>
			</div>
		</div>
	);
};

export default Album;
