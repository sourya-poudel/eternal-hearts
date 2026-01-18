'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react';
import { places } from '@/lib/places-data';
import Link from 'next/link';

export default function PlacesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? places.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLast = currentIndex === places.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const currentPlace = places[currentIndex];

  return (
    <section id="places" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold flex items-center gap-3">
            <MapPin className="w-10 h-10 text-primary/50" />
            Our Special Places
            <MapPin className="w-10 h-10 text-primary/50" />
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
            A map of our journey. The meaningful spots where our love story unfolded.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl bg-card/80 backdrop-blur-lg border border-primary/20">
            <div className="aspect-video">
              <iframe
                src={currentPlace.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={currentPlace.title}
              ></iframe>
            </div>
            <CardHeader className="p-6">
              <CardTitle className="font-headline text-3xl">{currentPlace.title}</CardTitle>
              <CardDescription>{currentPlace.location}</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-muted-foreground">{currentPlace.description}</p>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center mt-8 gap-4">
            <Button variant="outline" size="icon" onClick={goToPrevious}>
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous Place</span>
            </Button>
            <div className="text-sm text-muted-foreground">
              {currentIndex + 1} / {places.length}
            </div>
            <Button variant="outline" size="icon" onClick={goToNext}>
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next Place</span>
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="bg-transparent border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60">
            <Link href="/places">Explore All Places</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
