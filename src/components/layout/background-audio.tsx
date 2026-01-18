'use client';

export default function BackgroundAudio() {
  return (
    <div className="fixed bottom-4 left-4 z-50">
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/track/6qqrTXSdwiJaq8SO0X2lSe?utm_source=generator"
        width="300"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
