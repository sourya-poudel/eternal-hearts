'use client';

import { Heart } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeartInstance = ({ style }: { style: React.CSSProperties }) => (
    <Heart
        className="absolute text-primary/20 fill-current"
        style={style}
    />
);

export default function FloatingHearts() {
    const [hearts, setHearts] = useState<React.CSSProperties[]>([]);

    useEffect(() => {
        const createHearts = () => {
            const newHearts = Array.from({ length: 25 }).map((_, i) => ({
                left: `${Math.random() * 100}vw`,
                animationName: 'float-up',
                animationDuration: `${10 + Math.random() * 15}s`,
                animationTimingFunction: 'ease-in',
                animationDelay: `${Math.random() * 7}s`,
                animationIterationCount: 'infinite',
                width: `${10 + Math.random() * 25}px`,
                height: `${10 + Math.random() * 25}px`,
                opacity: 0,
            }));
            setHearts(newHearts);
        };
        createHearts();
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            {hearts.map((style, i) => (
                <HeartInstance key={i} style={style} />
            ))}
        </div>
    );
}
