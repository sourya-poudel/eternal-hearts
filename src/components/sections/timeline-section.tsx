import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const timelineEvents = [
  {
    date: 'December 16, 2023',
    title: 'First Meeting',
    description: 'The day our paths crossed and a new story began. A moment of serendipity.',
    icon: <Heart className="w-6 h-6 text-white" />,
  },
  {
    date: 'April 1, 2025',
    title: 'Anniversary',
    description: 'Celebrating a year of love, laughter, and unforgettable memories together.',
    icon: <Heart className="w-6 h-6 text-white" />,
  },
  {
    date: 'Future...',
    title: 'Many More to Come',
    description: 'Our adventure is just beginning. Here\'s to a future filled with endless love.',
    icon: <Heart className="w-6 h-6 text-white" />,
  },
];

export default function TimelineSection() {
  return (
    <section id="timeline" className="w-full py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Sweet Timeline</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
            Marking the milestones of our beautiful journey.
          </p>
        </div>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

          {timelineEvents.map((event, index) => (
            <div key={index} className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              {/* Event Card */}
              <div className="w-full md:w-5/12">
                <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                  <CardHeader>
                    <CardDescription>{event.date}</CardDescription>
                    <CardTitle className="font-headline text-2xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Icon */}
              <div className="z-10 absolute left-1/2 -ml-6 hidden md:block">
                  <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                    {event.icon}
                  </div>
              </div>

              {/* Spacer */}
              <div className="hidden md:block md:w-1/12"></div>

              {/* Date on the other side for larger screens */}
              <div className="hidden md:block md:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
