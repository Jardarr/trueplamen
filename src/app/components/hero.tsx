import AnimatedContent from "./animate";
import HeroLogo from "./heroLogo";

export default function Hero() {
    return (
        <div className="h-custom-height flex flex-col justify-center items-center bg-hero-bg bg-cover bg-center bg-attachment-fixed bg-no-repeat">
            <AnimatedContent />
            <div className="wall flex flex-col items-center justify-center opacity-100 absolute w-full h-full top-0 bg-black text-white text-xs font-thin"></div>
            <div className="heroCard opacity-0 w-full max-w-[700px]">
                <HeroLogo />
            </div>
        </div>
    );
}
