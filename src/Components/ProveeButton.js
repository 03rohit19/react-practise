import React, { useState } from "react";

const ProveeButton = ({ Children, onPlay, onPause }) => {
  const [playing, setPlaying] = useState(false);
  const handleButton = (e) => {
    e.stopPropagation();

    if (playing) {
      onPause();
    } else {
      onPlay();
    }
    setPlaying(!playing);
  };
  return (
    <button onClick={handleButton}>
      {Children} :{playing ? "Play" : "Paused"}
    </button>
  );
};

export default ProveeButton;
