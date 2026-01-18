'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Music } from 'lucide-react';

export default function BackgroundAudio() {
  const [showMusicDialog, setShowMusicDialog] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(false);

  useEffect(() => {
    // This effect should only run on the client
    if (typeof window === 'undefined') return;

    // Check session storage for user's consent
    const consent = sessionStorage.getItem('musicConsent');
    
    if (consent === 'true') {
      setMusicEnabled(true);
    } else if (consent === null) {
      // If consent is not given or denied, show the dialog after a delay
      const timer = setTimeout(() => {
        setShowMusicDialog(true);
      }, 2000); // 2-second delay
      return () => clearTimeout(timer);
    }
  }, []);

  const handleEnableMusic = () => {
    sessionStorage.setItem('musicConsent', 'true');
    setMusicEnabled(true);
    setShowMusicDialog(false);
  };

  const handleDeclineMusic = () => {
    sessionStorage.setItem('musicConsent', 'false');
    setShowMusicDialog(false);
  };

  const handleDialogChange = (isOpen: boolean) => {
    setShowMusicDialog(isOpen);
    if (!isOpen) {
        // If the dialog is being closed without consent, treat it as declining for the session.
        if (sessionStorage.getItem('musicConsent') === null) {
            handleDeclineMusic();
        }
    }
  }

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

      {musicEnabled && (
        <div className="hidden">
          <iframe
            title="Spotify Player"
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/track/6qqrTXSdwiJaq8SO0X2lSe?utm_source=generator&theme=1&autoplay=1"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      )}
    </>
  );
}
