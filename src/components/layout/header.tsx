'use client';

import { Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#timeline', label: 'Timeline' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#videos', label: 'Videos' },
  { href: '#letters', label: 'Letters' },
  { href: '#audio', label: 'Soundtrack' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-4 lg:gap-6", className)}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-16 flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-primary" />
          <span className="font-headline text-2xl font-bold text-foreground">
            Sourya & Bibhuti
          </span>
        </Link>
        <div className="hidden md:flex">
            <NavLinks />
        </div>
        <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="p-6">
                    <Link href="/" className="flex items-center gap-2 mb-8">
                        <Heart className="w-6 h-6 text-primary" />
                        <span className="font-headline text-2xl font-bold text-foreground">
                            Sourya & Bibhuti
                        </span>
                    </Link>
                    <NavLinks className="flex-col items-start space-y-4"/>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
