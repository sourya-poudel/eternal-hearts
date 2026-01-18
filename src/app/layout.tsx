import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import FloatingTimer from '@/components/layout/floating-timer';
import BackgroundAudio from '@/components/layout/background-audio';

export const metadata: Metadata = {
  title: 'Sourya & Bibhuti',
  description: 'In every chapter, I choose you.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Belleza&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <FloatingTimer />
        <BackgroundAudio />
      </body>
    </html>
  );
}
