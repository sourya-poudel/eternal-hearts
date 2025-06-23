import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-dvh flex items-center justify-center text-center text-white">
      <Image
        src="https://i.ibb.co/L5kL04v/IMG-20240714-WA0004.jpg"
        alt="Romantic background"
        data-ai-hint="couple romantic"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="relative z-10 p-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight drop-shadow-lg">
          Sourya & Bibhuti
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl opacity-90 drop-shadow-md">
           A love story worth dying for. In every chapter, I choose you.
        </p>
        <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#timeline">
                    <Heart className="w-4 h-4 mr-2"/>
                    Our Story
                </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                <Link href="#gallery">View Gallery</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
