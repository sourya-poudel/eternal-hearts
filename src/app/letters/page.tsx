import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FloatingHearts from '@/components/layout/floating-hearts';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
  {
    title: 'An Ordinary Tuesday',
    excerpt: 'It was just a Tuesday, but with you, it felt like the most extraordinary day. Thank you for making the simple moments magical.',
  },
  {
    title: 'Looking Ahead',
    excerpt: 'I dream of our future, of all the adventures we have yet to embark on. With you by my side, I know it will be beautiful.',
  },
  {
    title: 'Thank You',
    excerpt: 'Thank you for your patience, for your kindness, and for seeing the best in me, even when I couldn\'t see it myself.',
  },
];

export default function LettersPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background relative">
        <FloatingHearts />
        <div className="relative z-10">
            <Header />
            <main>
                <section id="letters-full" className="w-full py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold flex items-center gap-3">
                        <Heart className="w-10 h-10 text-primary/50" />
                        Love Letters
                        <Heart className="w-10 h-10 text-primary/50" />
                        </h2>
                    <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
                        Words from the heart, for you and you only.
                    </p>
                    <Button asChild variant="ghost" className="mt-8">
                        <Link href="/#letters">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {letters.map((letter, index) => (
                        <Card key={index} className="flex flex-col text-center items-center p-6 bg-card/80 backdrop-blur-lg border-2 border-dashed border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
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
                        <div className="flex items-center justify-center gap-2 p-4 pt-2">
                            <Heart className="w-5 h-5 text-primary/50 fill-current" />
                            <Heart className="w-5 h-5 text-primary/30 fill-current" />
                            <Heart className="w-5 h-5 text-primary/20 fill-current" />
                        </div>
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
