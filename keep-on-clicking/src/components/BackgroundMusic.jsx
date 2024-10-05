import { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Set volume to 10%
      audioRef.current
        .play()
        .catch((error) => console.log("Autoplay prevented:", error));
    }
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source
        src="../public/assets/Audio/CHIPTUNE_Minstrel_Dance(chosic.com).mp3"
        type="audio/mpeg"
      />
      Your browser does not support the audio element.
    </audio>
  );
};

export default BackgroundMusic;
