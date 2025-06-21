import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Play, ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FloatingHearts from '@/components/layout/floating-hearts';
import Link from 'next/link';

const audioFiles = [
  {
    title: 'Our Song',
    artist: 'A Special Dedication',
  },
  {
    title: 'A Message For You',
    artist: 'From my heart',
  },
  {
    title: 'First Dance',
    artist: 'Memory Lane',
  },
  {
    title: 'Good Morning, Love',
    artist: 'Voice Note',
  },
  {
    title: 'Road Trip Playlist',
    artist: 'Adventures on the road',
  },
  {
    title: 'Rainy Day Mood',
    artist: 'Cozied up inside',
  },
  {
    title: 'Favorite Movie Scores',
    artist: 'The sound of our stories',
  },
  {
    title: 'Late Night Talks',
    artist: 'Whispers and dreams',
  },
];

export default function AudioPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background relative">
        <FloatingHearts />
        <div className="relative z-10">
            <Header />
            <main>
                <section id="audio-full" className="w-full py-16 md:py-24 bg-secondary/50">
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
                    <Button asChild variant="ghost" className="mt-8">
                        <Link href="/#audio">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {audioFiles.map((file, index) => (
                        <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6 flex items-center gap-4">
                            <div className="bg-primary/20 p-4 rounded-full">
                            <Heart className="w-8 h-8 text-primary" />
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
            </main>
            <Footer />
        </div>
    </div>
  );
}
