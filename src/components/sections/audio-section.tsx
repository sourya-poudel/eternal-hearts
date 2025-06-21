import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Music, Play, Pause, Mic } from 'lucide-react';

const audioFiles = [
  {
    type: 'song',
    title: 'Our Song',
    artist: 'A Special Dedication',
  },
  {
    type: 'message',
    title: 'A Message For You',
    artist: 'From my heart',
  },
  {
    type: 'song',
    title: 'First Dance',
    artist: 'Memory Lane',
  },
  {
    type: 'message',
    title: 'Good Morning, Love',
    artist: 'Voice Note',
  },
];

export default function AudioSection() {
  return (
    <section id="audio" className="w-full py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Soundtrack</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
            The melodies and voices that tell our story.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {audioFiles.map((file, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-primary/20 p-4 rounded-full">
                  {file.type === 'song' ? (
                    <Music className="w-8 h-8 text-primary" />
                  ) : (
                    <Mic className="w-8 h-8 text-primary" />
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg">{file.title}</h3>
                  <p className="text-sm text-muted-foreground">{file.artist}</p>
                </div>
                <Button size="icon" variant="ghost" className="rounded-full w-12 h-12 hover:bg-primary/10 group">
                  <Play className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="sr-only">Play</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
