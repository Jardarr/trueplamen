import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PreviewKingOvLifeAndDeath() {
    return (
        <div className="custom-font w-full max-w-[1000px] pt-10 sm:py-7 gap-3">
            <div className="news-box bg-neutral-900 rounded-md">
                <Link href="/news/king-ov-life-and-death" className="overflow-hidden flex flex-col sm:flex-row justify-between items-center">
                    <div className="w-full h-[180px] sm:w-[200px] sm:h-[200px]">
                        <Image className="h-full w-full object-cover rounded-t-md sm:rounded-l-md sm:rounded-r-none" src="/covers/king-ov-life-and-death-BIG.jpg" alt="" width={150} height={150} />
                    </div>
                    <div className="flex-1 m-4">
						<p className="text-gray-300 text-sm sm:text-xl">NEW !!!</p>
                        <h1 className="text-gray-300 text-sm sm:text-xl">Спустя два года после выхода альбома &quot;Магия Крови&quot;, мы с гордостью анонсируем наше новое творение — &quot;Король Жизни и Смерти&quot;...</h1>
                        <h2 className="text-gray-400 text-sm">Two years after the release of the album &quot;Blood Magic&quot;, we are proud to announce our new creation — &quot;King ov Life and Death&quot;...</h2>
						<span className="text-gray-400 text-sm">23.12.2024</span>
						<p className="news-link text-sm text-right flex items-center justify-end">see more...<ChevronRight size={16} /></p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
