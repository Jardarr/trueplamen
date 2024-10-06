import AnimatedContent from "./animate";
import HeroLogo from "./heroLogo";

export default function Hero() {
    return (
        <div className="h-custom-height flex flex-col justify-center items-center bg-hero-bg bg-cover bg-center bg-attachment-fixed bg-no-repeat">
            <AnimatedContent />
            <div className="wall flex flex-col items-center justify-center opacity-100 absolute w-full h-full top-0 bg-black text-white text-xs font-thin">
                {/* <p className="stanza opacity-0 px-5">
                    <i>
                        Вы пришли в мир, чтоб гореть в солнце Града…
                        <br />А чем лютей зло, тем ярче пламень чистых сердец!
                    </i>
                </p>
                <p className="stanza opacity-0 max-w-[340px] w-full text-right px-5 md:px-0">
                    &quot;Пламень&quot; Пимен Карпов
                </p> */}
            </div>
            <div className="heroCard opacity-0">
                <HeroLogo />
            </div>
        </div>
    );
}
