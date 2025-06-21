import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

const videos = [
  { src: 'https://placehold.co/600x400.png', hint: 'couple laughing', caption: 'Laughing until we cried' },
  { src: 'https://placehold.co/600x400.png', hint: 'dancing rain', caption: 'Dancing in the summer rain' },
  { src: 'https://placehold.co/600x400.png', hint: 'travel vlog', caption: 'Our trip to the coast' },
  { src: 'https://placehold.co/600x400.png', hint: 'cooking together', caption: 'Kitchen chaos and fun' },
];

export default function VideoSection() {
  return (
    <section id="videos" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Video Memories</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
            Moments in motion, memories in film.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <Card key={index} className="overflow-hidden group">
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
          ))}
        </div>
      </div>
    </section>
  );
}
