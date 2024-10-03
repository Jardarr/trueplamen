import Image from "next/image";
import Link from "next/link";
import coverList from "../utils/coverList";

export default function Samples() {
	return (
		<div className="w-full bg-img relative flex items-center justify-center h-custom-height mt-10 gap-3">
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
