import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const letters = [
  {
    title: 'To My Dearest',
    excerpt: 'From the moment I met you, I knew my life would never be the same. Every day with you is a gift I cherish more than words can say...',
  },
  {
    title: 'Remember When?',
    excerpt: 'I was just thinking about our first date. The way you laughed, the sparkle in your eyes... it’s a memory etched forever in my heart.',
  },
  {
    title: 'My Promise',
    excerpt: 'I promise to always be there for you, to lift you up, and to love you with every beat of my heart, now and for all of eternity.',
  },
];

export default function LettersSection() {
  return (
    <section id="letters" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Love Letters</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
            Words from the heart, for you and you only.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {letters.map((letter, index) => (
            <Card key={index} className="flex flex-col text-center items-center p-6 bg-card/50 border-2 border-dashed border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
                <div className="p-4 bg-primary/20 rounded-full mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                </div>
              <CardHeader className="p-2">
                <CardTitle className="font-headline text-2xl">{letter.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="italic text-muted-foreground leading-relaxed">
                  "{letter.excerpt}"
                </p>
              </CardContent>
              <Heart className="w-5 h-5 text-primary/50 mt-4 fill-current" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
