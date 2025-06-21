'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function FloatingTimer() {
    const [timeSince, setTimeSince] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const proposalDate = new Date('2025-04-01T00:00:00');
        
        const interval = setInterval(() => {
            const now = new Date();
            if (now < proposalDate) {
                setTimeSince({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            };

            const totalSeconds = Math.floor((now.getTime() - proposalDate.getTime()) / 1000);
            const days = Math.floor(totalSeconds / (3600 * 24));
            const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            
            setTimeSince({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const timelineSection = document.getElementById('timeline');
            if (!timelineSection) {
                setIsVisible(true);
                return;
            }

            const rect = timelineSection.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

            setIsVisible(!isInView);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
  return (
    <div className={cn(
        "fixed bottom-4 right-4 z-50 transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
    )}>
        <Card className="shadow-2xl bg-card border-primary/30 w-64">
            <CardHeader className="p-3 pb-1 text-center">
                <CardTitle className="font-headline text-md text-primary flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4" />
                    Our Journey
                </CardTitle>
                <CardDescription className="text-xs">Time Since 'Yes'</CardDescription>
            </CardHeader>
            <CardContent className="p-3 pt-1">
                <div className="grid grid-cols-4 gap-1 text-center">
                    <div>
                        <div className="font-bold text-xl text-primary">{timeSince.days}</div>
                        <div className="text-xs text-muted-foreground">d</div>
                    </div>
                     <div>
                        <div className="font-bold text-xl text-primary">{timeSince.hours}</div>
                        <div className="text-xs text-muted-foreground">h</div>
                    </div>
                     <div>
                        <div className="font-bold text-xl text-primary">{timeSince.minutes}</div>
                        <div className="text-xs text-muted-foreground">m</div>
                    </div>
                     <div>
                        <div className="font-bold text-xl text-primary">{timeSince.seconds}</div>
                        <div className="text-xs text-muted-foreground">s</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
