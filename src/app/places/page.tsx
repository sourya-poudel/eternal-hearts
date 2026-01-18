'use client';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FloatingHearts from '@/components/layout/floating-hearts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { places } from '@/lib/places-data';

export default function PlacesPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background relative">
      <FloatingHearts />
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
           <section id="places-full" className="w-full py-16 md:py-24 bg-secondary/50">
              <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-16">
                  <h2 className="font-headline text-4xl md:text-5xl font-bold flex items-center gap-3">
                    <MapPin className="w-10 h-10 text-primary/50" />
                    Our Special Places
                    <MapPin className="w-10 h-10 text-primary/50" />
                  </h2>
                  <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
                    A complete map of our journey. The meaningful spots where our love story unfolded.
                  </p>
                   <Button asChild variant="ghost" className="mt-8">
                        <Link href="/#places">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {places.map((place, index) => (
                    <Card key={index} className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow duration-300 bg-card/80 backdrop-blur-lg border border-primary/20">
                       <div className="aspect-video">
                        <iframe
                            src={place.embedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={place.title}
                        ></iframe>
                        </div>
                      <CardHeader className="p-6">
                        <CardTitle className="font-headline text-2xl">{place.title}</CardTitle>
                        <CardDescription>{place.location}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <p className="text-muted-foreground">{place.description}</p>
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
