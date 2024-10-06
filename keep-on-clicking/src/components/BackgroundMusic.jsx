import "react";

const BackgroundMusic = () => {
  return (
    <audio autoPlay loop>
      <source
        src="/assets/audio/CHIPTUNE_Minstrel_Dance(chaosic.com).mp3"
        type="audio/mp3"
      />
      Your browser does not support the audio element.
    </audio>
  );
};
export default BackgroundMusic;
