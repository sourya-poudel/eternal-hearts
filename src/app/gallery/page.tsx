'use client';

import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useState } from 'react';
import { Heart, X, ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FloatingHearts from '@/components/layout/floating-hearts';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const photos = [
  { src: 'https://placehold.co/600x400.png', hint: 'couple smiling', caption: 'The day we first smiled together. Dec 20, 2023' },
  { src: 'https://placehold.co/400x600.png', hint: 'romantic dinner', caption: 'Our first fancy dinner date. Jan 15, 2024' },
  { src: 'https://placehold.co/600x400.png', hint: 'beach sunset', caption: 'Sunset walks on the beach. Feb 14, 2024' },
  { src: 'https://placehold.co/600x400.png', hint: 'city walk', caption: 'Exploring the city lights. Mar 10, 2024' },
  { src: 'https://placehold.co/400x600.png', hint: 'coffee date', caption: 'Countless coffee dates. Apr 22, 2024' },
  { src: 'https://placehold.co/600x400.png', hint: 'mountain hike', caption: 'Adventures in the mountains. May 30, 2024' },
  { src: 'https://placehold.co/600x400.png', hint: 'baking together', caption: 'Making a mess in the kitchen. Jun 18, 2024' },
  { src: 'https://placehold.co/400x600.png', hint: 'park picnic', caption: 'A perfect picnic day. Jul 05, 2024' },
  { src: 'https://placehold.co/600x400.png', hint: 'stargazing', caption: 'Under a sky full of stars. Aug 21, 2024' },
  { src: 'https://placehold.co/600x400.png', hint: 'reading books', caption: 'Quiet moments together. Sep 12, 2024' },
  { src: 'https://placehold.co/400x600.png', hint: 'holiday celebration', caption: 'Our first holiday as a couple. Oct 31, 2024' },
  { src: 'https://placehold.co/600x400.png', hint: 'rainy day', caption: 'Cozy on a rainy day. Nov 19, 2024' },
  { src: 'https://placehold.co/600x400.png', hint: 'anniversary dinner', caption: 'Our first anniversary dinner. Dec 16, 2024' },
];

export default function GalleryPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(null);

  return (
    <div className="flex flex-col min-h-dvh bg-background relative">
        <FloatingHearts />
        <div className="relative z-10">
            <Header />
            <main>
                <section id="gallery-full" className="w-full py-16 md:py-24">
                <Dialog open={!!selectedPhoto} onOpenChange={(isOpen) => !isOpen && setSelectedPhoto(null)}>
                    <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center text-center mb-12">
                        <h2 className="font-headline text-4xl md:text-5xl font-bold flex items-center gap-3">
                            <Heart className="w-10 h-10 text-primary/50" />
                            Photo Gallery
                            <Heart className="w-10 h-10 text-primary/50" />
                        </h2>
                        <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
                        A collection of moments that made us who we are. Click a photo to see it larger.
                        </p>
                         <Button asChild variant="ghost" className="mt-8">
                            <Link href="/#gallery">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Home
                            </Link>
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                        {photos.map((photo, index) => (
                        <DialogTrigger key={index} asChild onClick={() => setSelectedPhoto(photo)}>
                            <Card className="overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                            <CardContent className="p-0">
                                <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                                    <Image
                                    src={photo.src}
                                    alt={photo.caption}
                                    width={600}
                                    height={400}
                                    data-ai-hint={photo.hint}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </CardContent>
                            <CardFooter className="p-4 bg-card">
                                <p className="text-sm text-muted-foreground">{photo.caption}</p>
                            </CardFooter>
                            </Card>
                        </DialogTrigger>
                        ))}
                    </div>
                    </div>
                    <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none shadow-none">
                        {selectedPhoto && (
                            <div className='relative'>
                                <DialogTitle className="sr-only">{selectedPhoto.caption}</DialogTitle>
                                <DialogDescription className="sr-only">A larger view of the selected photo: {selectedPhoto.caption}</DialogDescription>
                                <DialogClose className="absolute right-2 top-2 z-10 rounded-full p-1 bg-black/50 text-white hover:bg-black/75 transition-colors focus:outline-none">
                                    <X className="w-6 h-6" />
                                    <span className="sr-only">Close</span>
                                </DialogClose>
                                <Image
                                src={selectedPhoto.src}
                                alt={selectedPhoto.caption}
                                width={1200}
                                height={800}
                                data-ai-hint={selectedPhoto.hint}
                                className="object-contain w-full h-auto max-h-[90vh] rounded-lg shadow-2xl"
                                />
                                <p className="absolute bottom-4 left-4 right-4 p-4 bg-black/50 text-white rounded-b-lg text-center backdrop-blur-sm">{selectedPhoto.caption}</p>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
                </section>
            </main>
            <Footer />
        </div>
    </div>
  );
}
