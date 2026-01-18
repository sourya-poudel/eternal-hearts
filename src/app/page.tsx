import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import TimelineSection from '@/components/sections/timeline-section';
import GallerySection from '@/components/sections/gallery-section';
import VideoSection from '@/components/sections/video-section';
import LettersSection from '@/components/sections/letters-section';
import FloatingHearts from '@/components/layout/floating-hearts';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background relative">
      <FloatingHearts />
      <div className="relative z-0">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <TimelineSection />
          <GallerySection />
          <VideoSection />
          <LettersSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
