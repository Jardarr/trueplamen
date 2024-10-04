import Image from "next/image";
import Link from "next/link";
import coverList from "../utils/albumList";

export default function Samples() {
	return (
		<div className="bg-img relative flex justify-center h-custom-height pt-10 gap-3">
			<div className="cover-box max-w-[1200px] flex items-center justify-center flex-wrap gap-3">
				{coverList.map((cover) => (
					<div key={cover.alt} className="cover-link">
						<Link href={cover.link}>
							<Image
								className="rounded-md"
								src={cover.image}
								alt={cover.alt}
								width={300}
								height={300}
							/>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
