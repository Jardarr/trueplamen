import Image from "next/image";
import Link from "next/link";
import coverList from "../utils/albumList";

export default function Samples() {
	return (
		<div className="custom-font bg-img relative flex justify-center pt-10 sm:py-7 gap-3 h-fit">
			<div className="cover-box max-w-[1200px] flex justify-center flex-wrap gap-3">
				{coverList.map((album) => (
					<div key={album.alt} className="cover-link h-fit bg-slate-800/45 p-3 rounded-md">
						<Link href={album.link}>
							<Image
								className="rounded-md"
								src={album.image}
								alt={album.alt}
								width={300}
								height={300}
							/>
							<h1 className="text-gray-300 text-center text-base">{album.titleRU}</h1>
							<h2 className="text-gray-400 text-sm text-center font-thin">{album.titleEN}</h2>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
