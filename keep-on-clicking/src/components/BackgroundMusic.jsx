import { useRef, useEffect } from "react";

const BackgroundMusic = ({ src, isPlaying }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      const playPromise = audioElement.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started
          })
          .catch((error) => {
            // Autoplay was prevented.
            console.log("Autoplay prevented:", error);
          });
      }
    } else {
      audioElement.pause();
    }
  }, [isPlaying]);

  return <audio ref={audioRef} src={src} loop />;
};

export default BackgroundMusic;
