import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FloatingHearts from '@/components/layout/floating-hearts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Heart, CalendarHeart, HandHeart, Users, HeartPulse, Gift, Music2, Camera, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const timelineEvents = [
  {
    date: 'December 16, 2024',
    title: 'First Meeting',
    description: 'The day our paths crossed and a new story began. A moment of serendipity.',
    icon: <Heart className="w-6 h-6 text-white" />,
  },
  {
    date: 'December 21, 2024',
    title: 'First Interaction',
    description: 'Our first real conversation at the COFAS international computer olympiad.',
    icon: <CalendarHeart className="w-6 h-6 text-white" />,
  },
  {
    date: 'April 1, 2025',
    title: 'The Proposal',
    description: 'Exactly at midnight, when I asked you to be mine forever, and our journey truly started.',
    icon: <Gift className="w-6 h-6 text-white" />,
  },
  {
    date: 'April 3, 2025',
    title: 'First Time Holding Hands',
    description: 'That simple touch that sent sparks flying and made the world disappear.',
    icon: <HandHeart className="w-6 h-6 text-white" />,
  },
  {
    date: 'April 19, 2025',
    title: 'Parents Found Out',
    description: 'The day our love became known, marking a new chapter in our story.',
    icon: <Users className="w-6 h-6 text-white" />,
  },
  {
    date: 'May 6, 2025',
    title: 'Our First Kiss',
    description: 'A moment sealed with a kiss, a promise of all the beautiful moments to come.',
    icon: <HeartPulse className="w-6 h-6 text-white" />,
  },
  {
    date: 'July 1, 2025',
    title: 'First Gift Exchange',
    description: 'Exchanging gifts that symbolized our growing affection and understanding of each other.',
    icon: <Gift className="w-6 h-6 text-white" />,
  },
  {
    date: 'August 23, 2025',
    title: 'First Dance',
    description: 'The moment our hearts found their rhythm — our very first dance.',
    icon: <Music2 className="w-6 h-6 text-white" />,
  },
  {
    date: 'August 24, 2025',
    title: 'First Couple Photo',
    description: 'The day we captured us — the beginning of a beautiful chapter.',
    icon: <Camera className="w-6 h-6 text-white" />,
  },
];

export default function TimelinePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background relative">
      <FloatingHearts />
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
           <section id="timeline-full" className="w-full py-16 md:py-24 bg-secondary/50">
              <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center mb-16">
                  <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Sweet Timeline</h2>
                  <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
                    A complete history of our beautiful journey together, one moment at a time.
                  </p>
                   <Button asChild variant="ghost" className="mt-8">
                        <Link href="/#timeline">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                </div>
                <div className="max-w-3xl mx-auto">
                    <div className="relative border-l-2 border-dashed border-primary/30 ml-6 py-4">
                        {timelineEvents.map((event, index) => (
                            <div key={index} className="mb-12 relative">
                                <div className="absolute -left-[31px] -top-1 z-10">
                                    <div className="bg-primary rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                                        {event.icon}
                                    </div>
                                </div>
                                <div className="ml-12">
                                    <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 bg-card/80 backdrop-blur-lg border-primary/20">
                                        <CardHeader className="p-6">
                                            <CardDescription>{event.date}</CardDescription>
                                            <CardTitle className="font-headline text-2xl">{event.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-6 pt-0">
                                            <p className="text-muted-foreground">{event.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
              </div>
            </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
