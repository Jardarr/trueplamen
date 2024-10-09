import Image from "next/image";
import Link from "next/link";

export default function Samples() {
    return (
        <div className="custom-font bg-img flex justify-center pt-10 sm:py-7 h-screen">
            <div className="max-w-[1200px] w-full flex flex-col gap-3 text-gray-300">
                <div className="space-y-2 pl-4 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-3xl text-gray-800 sm:text-4xl md:text-6xl leading-9 sm:leading-10 md:leading-14 tracking-tight">
                        Associates
                    </h1>
                </div>
                <div className="w-full flex flex-col sm:flex-row gap-3">
                    <div className="bg-neutral-900/45 p-3 mx-4 rounded-md h-fit">
                        <Link className="text-center flex flex-col items-center" href="https://niemaracz.com/" target="_blank"><Image className="w-[120px] hover:scale-110 transition-transform ease-in-out" src="/associates-img/nmrcz.svg" alt="niemaracz" width={100} height={300} /><p className="pt-2">Niemarač Clan</p></Link>
                    </div>
                    <div className="bg-neutral-900/45 p-3 mx-4 rounded-md h-fit">
                        <Link className="text-center flex flex-col items-center" href="https://rthdxfff.bandcamp.com/" target="_blank"><Image className="w-[120px] hover:scale-110 transition-transform ease-in-out" src="/associates-img/tsk.png" alt="thou_shalt_kill" width={100} height={300} /><p className="pt-2">Thou Shalt Kill!</p></Link>
                    </div>
                    <div className="bg-neutral-900/45 p-3 mx-4 rounded-md h-fit">
                        <Link className="text-center flex flex-col items-center" href="https://youtube.com/@amkrafter?si=AHkoItXkTWDd1LWU" target="_blank"><Image className="w-[120px] h-[150px] hover:scale-110 transition-transform ease-in-out" src="/associates-img/saturn.png" alt="saturn" width={100} height={300} /><p className="pt-2">Saturn</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
