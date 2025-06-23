'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Heart, Lock, Unlock } from 'lucide-react';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";

const letters = [
  {
    title: 'To My Dearest',
    excerpt: 'From the moment I met you...',
    fullText: 'From the moment I met you, I knew my life would never be the same. Every day with you is a gift I cherish more than words can say. You bring out the best in me, and I am a better person for knowing you. Your smile is my sun, your laugh my favorite song.',
  },
  {
    title: 'Remember When?',
    excerpt: 'I was just thinking about our first...',
    fullText: 'I was just thinking about our first date. The way you laughed, the sparkle in your eyes... it’s a memory etched forever in my heart. I was so nervous, but you made me feel so comfortable. I replay that night in my head more often than I should probably admit.',
  },
  {
    title: 'My Promise',
    excerpt: 'I promise to always be there for...',
    fullText: 'I promise to always be there for you, to lift you up, and to love you with every beat of my heart, now and for all of eternity. Through thick and thin, in sickness and in health, I will be your rock, your confidant, and your biggest fan.',
  },
];

type Letter = typeof letters[0];

export default function LettersSection() {
    const [password, setPassword] = useState('');
    const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);
    const [unlockedLetters, setUnlockedLetters] = useState<string[]>([]);
    const [showPasswordDialog, setShowPasswordDialog] = useState(false);
    const { toast } = useToast();

    const handleCardClick = (letter: Letter) => {
        setSelectedLetter(letter);
        if (!unlockedLetters.includes(letter.title)) {
          setShowPasswordDialog(true);
        }
    };
      
    const handlePasswordSubmit = () => {
        if (password === 'souryabibhutiforever' && selectedLetter) {
          setUnlockedLetters([...unlockedLetters, selectedLetter.title]);
          setShowPasswordDialog(false);
          setPassword('');
        } else {
          toast({
            title: "Incorrect Password",
            description: "The key to this heart is a bit different. Please try again.",
            variant: "destructive",
          });
          setPassword('');
        }
    };
    
    const isLetterOpen = selectedLetter && unlockedLetters.includes(selectedLetter.title);

  return (
    <section id="letters" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold flex items-center gap-3">
            <Heart className="w-10 h-10 text-primary/50" />
            Love Letters
            <Heart className="w-10 h-10 text-primary/50" />
            </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
            Words from the heart, locked away for you and you only.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {letters.map((letter, index) => (
            <Card key={index} 
                onClick={() => handleCardClick(letter)}
                className="flex flex-col text-center items-center p-6 bg-card/80 backdrop-blur-lg border-2 border-dashed border-primary/20 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <div className="p-4 bg-primary/20 rounded-full mb-4">
                    {unlockedLetters.includes(letter.title) ? <Unlock className="w-8 h-8 text-primary" /> : <Lock className="w-8 h-8 text-primary" />}
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
        <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60">
                <Link href="/letters">Read More Letters</Link>
            </Button>
        </div>
      </div>
      
        {/* Password Dialog */}
        <Dialog open={showPasswordDialog} onOpenChange={setShowPasswordDialog}>
            <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Unlock This Letter</DialogTitle>
                <DialogDescription>
                This letter is sealed with a secret word. Enter the password to read it.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password-section" className="text-right">
                    Password
                </Label>
                <Input
                    id="password-section"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="col-span-3"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handlePasswordSubmit();
                        }
                    }}
                />
                </div>
            </div>
            <DialogFooter>
                <Button onClick={handlePasswordSubmit}>Unlock</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>

        {/* Letter Content Dialog */}
        <Dialog open={!!isLetterOpen} onOpenChange={(isOpen) => !isOpen && setSelectedLetter(null)}>
            <DialogContent className="max-w-4xl w-full h-[90vh] flex flex-col p-0">
                <DialogHeader className="p-6 pb-2">
                    <DialogTitle className="font-headline text-3xl text-primary text-center">{selectedLetter?.title}</DialogTitle>
                </DialogHeader>
                <div className="flex-grow overflow-y-auto px-6 pb-6">
                    <p className="whitespace-pre-wrap font-body text-lg leading-loose text-foreground">
                        {selectedLetter?.fullText}
                    </p>
                </div>
                <DialogFooter className="p-6 pt-0 border-t">
                    <Button type="button" variant="secondary" onClick={() => setSelectedLetter(null)}>
                        Close
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </section>
  );
}
