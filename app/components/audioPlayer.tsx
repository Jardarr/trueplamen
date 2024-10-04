"use client";
import { Music4, Pause, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface AudioPlayer {
	audio: string;
	audioTitle: string;
}

const AudioPlayer = ({ audio, audioTitle }: AudioPlayer) => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		if (audioRef.current) {
			setIsPlaying(!audioRef.current.paused);
		}
	}, []);

	const handlePlayPause = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	return (
		<div className="bg-slate-800/45 px-8 py-1 flex flex-col items-center text-center rounded-md">
            <div className="w-10 h-10 flex items-center justify-center"><Music4 /></div>
			<h2>{audioTitle}</h2>
			<audio ref={audioRef} src={audio} />
			<button onClick={handlePlayPause} className="my-2">
				{isPlaying ? <Pause /> : <Play />}
			</button>
		</div>
	);
};

export default AudioPlayer;
