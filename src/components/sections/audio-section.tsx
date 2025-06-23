
'use client';

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Play, Pause } from 'lucide-react';
import Link from 'next/link';
import { audioFiles } from '@/lib/audio-data';

const previewAudioFiles = audioFiles.slice(0, 4);

export default function AudioSection() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = (src: string) => {
    if (audioRef.current) {
      if (currentlyPlaying === src && !audioRef.current.paused) {
        audioRef.current.pause();
        setCurrentlyPlaying(null);
      } else {
        if (currentlyPlaying !== src) {
          audioRef.current.src = src;
        }
        audioRef.current.play().catch(e => console.error("Audio playback error:", e));
        setCurrentlyPlaying(src);
      }
    }
  };

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = 0.5;
    
    const handleEnded = () => setCurrentlyPlaying(null);
    const audio = audioRef.current;
    audio.addEventListener('ended', handleEnded);

    return () => {
        if (audio) {
            audio.removeEventListener('ended', handleEnded);
            audio.pause();
        }
    };
  }, []);

  return (
    <section id="audio" className="w-full py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold flex items-center gap-3">
            <Heart className="w-10 h-10 text-primary/50" />
            Our Soundtrack
            <Heart className="w-10 h-10 text-primary/50" />
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
            The melodies and voices that tell our story.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {previewAudioFiles.map((file) => (
            <Card key={file.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-primary/20 p-4 rounded-full">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg">{file.title}</h3>
                  <p className="text-sm text-muted-foreground">{file.artist}</p>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full w-12 h-12 hover:bg-primary/10 group"
                  onClick={() => togglePlay(file.src)}
                >
                  {currentlyPlaying === file.src ? (
                    <Pause className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  ) : (
                    <Play className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  )}
                  <span className="sr-only">{currentlyPlaying === file.src ? 'Pause' : 'Play'}</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60">
                <Link href="/audio">Explore Soundtrack</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
