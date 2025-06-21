'use client';

import { useState, useRef, useEffect } from 'react';
import { Music, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.1;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(_ => {
          setIsPlaying(true);
        }).catch(error => {
          console.log("Autoplay prevented by browser policy.");
          setIsPlaying(false);
        });
      }
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="https://cdn.pixabay.com/audio/2022/03/15/audio_b89165d4b4.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="fixed bottom-4 left-4 z-50">
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={togglePlay}
                        className="bg-card/80 backdrop-blur-sm rounded-full border border-primary/30 w-10 h-10"
                    >
                        {isPlaying ? <Music className="w-5 h-5 text-primary" /> : <VolumeX className="w-5 h-5 text-muted-foreground" />}
                        <span className="sr-only">{isPlaying ? 'Mute audio' : 'Unmute audio'}</span>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{isPlaying ? 'Mute audio' : 'Play audio'}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
}
