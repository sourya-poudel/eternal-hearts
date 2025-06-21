import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const photos = [
  { src: 'https://placehold.co/600x400.png', hint: 'couple smiling', caption: 'The day we first smiled together. Dec 20, 2023' },
  { src: 'https://placehold.co/400x600.png', hint: 'romantic dinner', caption: 'Our first fancy dinner date. Jan 15, 2024' },
  { src: 'https://placehold.co/600x400.png', hint: 'beach sunset', caption: 'Sunset walks on the beach. Feb 14, 2024' },
  { src: 'https://placehold.co/600x400.png', hint: 'city walk', caption: 'Exploring the city lights. Mar 10, 2024' },
  { src: 'https://placehold.co/400x600.png', hint: 'coffee date', caption: 'Countless coffee dates. Apr 22, 2024' },
  { src: 'https://placehold.co/600x400.png', hint: 'mountain hike', caption: 'Adventures in the mountains. May 30, 2024' },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Photo Gallery</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
            A collection of moments that made us who we are.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {photos.map((photo, index) => (
            <Card key={index} className="overflow-hidden group transform transition-transform duration-300 hover:-translate-y-2">
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
          ))}
        </div>
      </div>
    </section>
  );
}
