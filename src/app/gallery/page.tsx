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
import { photos } from '@/lib/gallery-data';


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
                            Our Photo Gallery
                            <Heart className="w-10 h-10 text-primary/50" />
                        </h2>
                        <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
                        A collection of moments that made us who we are. Click any photo to see it larger.
                        </p>
                         <Button asChild variant="ghost" className="mt-8">
                            <Link href="/#gallery">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Home
                            </Link>
                        </Button>
                    </div>
                    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 md:gap-8 space-y-8">
                        {photos.map((photo, index) => (
                        <DialogTrigger key={index} asChild onClick={() => setSelectedPhoto(photo)}>
                            <div className="break-inside-avoid group cursor-pointer">
                                <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                                <CardContent className="p-0">
                                    <Image
                                        src={photo.src}
                                        alt={photo.caption}
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
                                        data-ai-hint={photo.hint}
                                    />
                                </CardContent>
                                <CardFooter className="p-4 bg-card">
                                    <p className="text-sm text-muted-foreground">{photo.caption}</p>
                                </CardFooter>
                                </Card>
                            </div>
                        </DialogTrigger>
                        ))}
                    </div>
                    </div>
                    <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none shadow-none">
                        {selectedPhoto && (
                            <div className='relative'>
                                <DialogTitle className="sr-only">{selectedPhoto.caption}</DialogTitle>

                                <DialogDescription className="sr-only">A larger view of the selected photo: {selectedPhoto.caption}</DialogDescription>
                                <DialogClose className="absolute right-2 top-2 z-20 rounded-full p-1 bg-black/50 text-white hover:bg-black/75 transition-colors focus:outline-none">
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
