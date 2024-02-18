import { useState, useEffect } from "react";

const SoundPlayer = () => {
  const [audio] = useState(new Audio("../../../assets/audio/audio.mp3"));

  useEffect(() => {
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return null;
};

export default SoundPlayer;
