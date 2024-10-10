import { Separator } from "@/components/ui/separator";
import aboutList from "../utils/aboutList";

export default function Samples() {
    return (
        <div className="custom-font flex justify-center pt-10 sm:py-7 bg-main-bg bg-cover bg-fixed bg-top bg-no-repeat min-h-screen sm:h-fit">
            <div className="max-w-[1200px] w-full flex flex-col gap-3 text-gray-300">
                <div className="space-y-2 pl-4 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl text-gray-800 sm:text-4xl md:text-6xl leading-9 sm:leading-10 md:leading-14 tracking-tight">
                        About Us
                    </h1>
                </div>
                {aboutList.map((item) => (
                    <div key={item.titleRU} className="w-full text-sm px-2">
                        <div className="flex justify-between">
                            <p className="mx-4 text-nowrap">{item.titleRU}</p>
                            <p className="mx-4 italic">{item.stanzaRU}</p>
                        </div>
                        <div className="mt-5">
                            <p>{item.descriptionRU}</p>
                        </div>
                        <Separator className="my-12 sm:max-w-7xl max-w-72 mx-auto" />
                    </div>
                ))}
                {aboutList.map((item) => (
                    <div key={item.titleEN} className="w-full text-sm px-2">
                        <div className="flex justify-between">
                            <p className="mx-4 text-nowrap">{item.titleEN}</p>
                            <p className="mx-4 italic">{item.stanzaEN}</p>
                        </div>
                        <div className="mt-5">
                            <p>{item.descriptionEN}</p>
                        </div>
                        <Separator className="my-12 sm:max-w-7xl max-w-72 mx-auto" />
                    </div>
                ))}
            </div>
        </div>
    );
}
