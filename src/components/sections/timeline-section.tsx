'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Heart, CalendarHeart, HandHeart, Users, HeartPulse } from 'lucide-react';
import { useState, useEffect } from 'react';

const timelineEvents = [
  {
    date: 'December 16, 2023',
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
    icon: <Heart className="w-6 h-6 text-white fill-white" />,
    special: 'timer',
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
];

const CountdownTimer = () => {
    const [timeSince, setTimeSince] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const proposalDate = new Date('2025-04-01T00:00:00');
        
        const interval = setInterval(() => {
            const now = new Date();
            if (now < proposalDate) return;

            const totalSeconds = Math.floor((now.getTime() - proposalDate.getTime()) / 1000);
            const days = Math.floor(totalSeconds / (3600 * 24));
            const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            
            setTimeSince({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);
  
  return (
    <div className="w-full md:w-5/12 p-4 flex items-center justify-center">
        <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 w-full bg-primary/10 border-primary/20">
            <CardHeader className="text-center">
                <CardTitle className="font-headline text-2xl text-primary">Counting Up Since We Began</CardTitle>
                <CardDescription>Our journey as one...</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-4 gap-2 text-center">
                    <div>
                        <div className="font-bold text-3xl md:text-4xl text-primary">{timeSince.days}</div>
                        <div className="text-xs text-muted-foreground">Days</div>
                    </div>
                     <div>
                        <div className="font-bold text-3xl md:text-4xl text-primary">{timeSince.hours}</div>
                        <div className="text-xs text-muted-foreground">Hours</div>
                    </div>
                     <div>
                        <div className="font-bold text-3xl md:text-4xl text-primary">{timeSince.minutes}</div>
                        <div className="text-xs text-muted-foreground">Minutes</div>
                    </div>
                     <div>
                        <div className="font-bold text-3xl md:text-4xl text-primary">{timeSince.seconds}</div>
                        <div className="text-xs text-muted-foreground">Seconds</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}


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

              {/* Other Side: Timer or Empty Div */}
              {event.special === 'timer' ? (
                <CountdownTimer />
              ) : (
                <div className="hidden md:block md:w-5/12"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
