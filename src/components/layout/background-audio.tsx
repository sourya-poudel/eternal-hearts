'use client';

import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Music } from 'lucide-react';

export default function BackgroundAudio() {
  const [showMusicDialog, setShowMusicDialog] = useState(false);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const consentKey = 'musicConsent-v2'; // Using a new key to reset state

  // Function to create and inject the player
  const createPlayer = () => {
    if (playerContainerRef.current && playerContainerRef.current.innerHTML === '') {
      playerContainerRef.current.innerHTML = `
        <iframe
          title="Spotify Player"
          style="display: none;"
          src="https://open.spotify.com/embed/track/6qqrTXSdwiJaq8SO0X2lSe?utm_source=generator&theme=1&autoplay=1"
          width="1"
          height="1"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>`;
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const consent = sessionStorage.getItem(consentKey);
    
    if (consent === 'true') {
      createPlayer();
    } 
    else if (consent === null) {
      // If we haven't asked yet, show the dialog immediately.
      setShowMusicDialog(true);
    }
  }, []);

  const handleEnableMusic = () => {
    sessionStorage.setItem(consentKey, 'true');
    setShowMusicDialog(false);
    // Create the player directly on click. This is the most reliable way.
    createPlayer();
  };

  const handleDeclineMusic = () => {
    sessionStorage.setItem(consentKey, 'false');
    setShowMusicDialog(false);
  };

  const handleDialogChange = (isOpen: boolean) => {
    setShowMusicDialog(isOpen);
    // If the user closes the dialog without making a choice, consider it a 'decline'.
    if (!isOpen && sessionStorage.getItem(consentKey) === null) {
        handleDeclineMusic();
    }
  };

  return (
    <>
      <Dialog open={showMusicDialog} onOpenChange={handleDialogChange}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 font-headline text-2xl">
              <Music className="w-6 h-6 text-primary" />
              Experience The Music
            </DialogTitle>
            <DialogDescription className="pt-2">
              This site has a special background song. Would you like to play it to enhance your experience?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:justify-center pt-4">
            <Button onClick={handleEnableMusic} className="w-full sm:w-auto">
                <Music className="mr-2 h-4 w-4" />
                Yes, play our song
            </Button>
            <Button onClick={handleDeclineMusic} variant="outline" className="w-full sm:w-auto">
                No, thanks
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* This container will hold the iframe, injected imperatively */}
      <div ref={playerContainerRef} />
    </>
  );
}
