import React from "react";
import Hero from "./components/hero";
import { Separator } from "@/components/ui/separator";
export default function Home() {
	return (
		<>
			<Hero />
			<Separator className="mt-4 sm:mt-40 max-w-7xl mx-auto" />
			<div className="text-gray-300 sm:text-2xl px-3 my-4 sm:my-40 flex justify-center">
				<div className="custom-font max-w-[1200px] italic">
					<p>
						История группы берёт своё начало в 2006 году с
						демо-записи, получившей название &quot;Return to
						Death&quot;. Данный материал распространялся в узком
						круге лиц, среди людей, вовлечённых в
						(русский)блэк-метал андерграунд. В дальнейшем, силами
						объединения
						<a
							className="underline hover:text-gray-400 transition-colors ease-in-out"
							href="https://niemaracz.com/"
							target="_blank"
						>
							&quot;Niemarač Clan&quot;
						</a>
						Издается вторая демо-запись &quot;Seeds ov Hell&quot;.
						Следующим шагом становится издание первого
						полноформатного альбома под названием
						&quot;Солнцу&quot;. Альбом издаётся силами лейбла
						<a
							className="underline hover:text-gray-400 transition-colors ease-in-out"
							href="https://rthdxfff.bandcamp.com/"
							target="_blank"
						>
							&quot;Thou Shalt Kill!&quot;
						</a>.
						Далее, тот же издатель, выпускает альбомы &quot;В Пепел&quot;,
						&quot;Чужие&quot;, &quot;Анабасис Духа&quot;,
						&quot;Магия Крови&quot;. Последним альбомом Пламень
						знаменует 15-летие существования группы.
					</p>
				</div>
			</div>
		</>
	);
}
