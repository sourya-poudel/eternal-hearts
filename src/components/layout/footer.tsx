import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-center">
        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
          <Heart className="w-4 h-4 text-primary/70" />
          Made with <Heart className="w-4 h-4 text-primary fill-current" /> for my one and only.
          <Heart className="w-4 h-4 text-primary/70" />
        </p>
      </div>
    </footer>
  );
}
