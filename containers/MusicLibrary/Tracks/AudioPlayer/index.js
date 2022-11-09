import { useEffect, useRef } from "react";

import { IconMusic } from "./styled";

const AudioSrc = ({ src, onEnded }) => {
  const audioRef = useRef(null);
  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.load();
    audioElement.addEventListener("canplaythrough", audioElement.play);
    audioElement.addEventListener("ended", onEnded);
    return () => {
      audioElement.removeEventListener("canplaythrough", audioElement.play);
      audioElement.removeEventListener("ended", onEnded);
    };
  }, []);
  return <audio src={src} ref={audioRef} />;
};

const AudioPlayer = ({ icon, src, isPlaying, play, stop }) => {
  const onClick = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  };

  return (
    <div>
      <IconMusic {...icon} onClick={onClick} isPlaying={isPlaying} />
      {!!isPlaying && <AudioSrc src={src} onEnded={stop} />}
    </div>
  );
};

export default AudioPlayer;
