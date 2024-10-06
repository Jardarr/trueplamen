import React from "react";
import Hero from "./components/hero";
import { Separator } from "@/components/ui/separator";
export default function Home() {
    return (
        <>
            <Hero />
            <Separator className="mt-4 sm:mt-40 max-w-7xl mx-auto" />
            <div className="text-gray-300 sm:text-2xl px-3 my-4 sm:my-40 flex justify-center">
                <div className="max-w-[1200px] italic">
                    <p>Начало пути: 2006</p>
                    <p>Место: Республика Мордовия, город Саранск</p>
                    <p>Стиль: Black Metal</p>
                    <p>
                        История группы берёт своё начало в 2006 году с
                        демо-записи, получившей название &quot;Return to
                        Death&quot;. Данный материал распространялся в узком
                        круге лиц, среди людей, вовлечённых в
                        (русский)блэк-метал андерграунд. В дальнейшем, силами
                        объединения &quot;Niemarač Clan&quot; Издается вторая
                        демо-запись &quot;Seeds ov Hell&quot;. Следующим шагом
                        становится издание первого полноформатного альбома под
                        названием &quot;Солнцу&quot;. Альбом издаётся силами
                        лейбла &quot;Thou Shalt Kill!&quot;. Далее, на &quot;Thou Shalt Kill!&quot;
                        выходят альбомы &quot;В Пепел&quot;, &quot;Чужие&quot;,
                        &quot;Анабасис Духа&quot;, &quot;Магия Крови&quot;.
                        Последним альбомом Пламень знаменует 15-летнее
                        существование группы.
                    </p>
                </div>
            </div>
        </>
    );
}
