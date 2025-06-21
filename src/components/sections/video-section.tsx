'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle, Heart } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';


const videos = [
  { src: 'https://placehold.co/600x400.png', hint: 'couple laughing', caption: 'Laughing until we cried' },
  { src: 'https://placehold.co/600x400.png', hint: 'dancing rain', caption: 'Dancing in the summer rain' },
  { src: 'https://placehold.co/600x400.png', hint: 'travel vlog', caption: 'Our trip to the coast' },
  { src: 'https://placehold.co/600x400.png', hint: 'cooking together', caption: 'Kitchen chaos and fun' },
];

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null);

  return (
    <section id="videos" className="w-full py-16 md:py-24">
      <Dialog open={!!selectedVideo} onOpenChange={(isOpen) => !isOpen && setSelectedVideo(null)}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold flex items-center gap-3">
              <Heart className="w-10 h-10 text-primary/50" />
              Video Memories
              <Heart className="w-10 h-10 text-primary/50" />
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
              Moments in motion, memories in film. Click a video to view it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <DialogTrigger asChild key={index} onClick={() => setSelectedVideo(video)}>
                <Card className="overflow-hidden group cursor-pointer">
                  <CardContent className="p-0 relative">
                    <Image
                      src={video.src}
                      alt={video.caption}
                      width={600}
                      height={400}
                      data-ai-hint={video.hint}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <PlayCircle className="w-20 h-20 text-white/80 transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <p className="text-white font-semibold">{video.caption}</p>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
            ))}
          </div>
        </div>
        <DialogContent className="max-w-4xl w-full p-2 bg-transparent border-none shadow-none aspect-video">
          {selectedVideo && (
            <div className="relative w-full h-full">
                <Image
                  src={selectedVideo.src}
                  alt={selectedVideo.caption}
                  fill
                  data-ai-hint={selectedVideo.hint}
                  className="object-contain rounded-lg shadow-2xl"
                />
                 <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <PlayCircle className="w-24 h-24 text-white/80" />
                </div>
                <p className="absolute bottom-4 left-4 right-4 p-4 bg-black/50 text-white rounded-b-lg text-center backdrop-blur-sm">{selectedVideo.caption}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
