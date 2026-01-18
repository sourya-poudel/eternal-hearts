'use client';

export default function BackgroundAudio() {
  return (
    <div className="hidden">
         <iframe
            title="Spotify Player"
            style={{borderRadius: '12px'}}
            src="https://open.spotify.com/embed/track/6qqrTXSdwiJaq8SO0X2lSe?utm_source=generator&theme=1"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
        </iframe>
    </div>
  );
}
