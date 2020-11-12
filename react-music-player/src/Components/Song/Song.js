import React from "react";

import styles from "./Song.module.scss";

const Song = ({ currentSong, isPlaying }) => {
  return (
    <div className={styles.SongContainer}>
      <img
        className={isPlaying ? styles.RotateSong : null}
        src={currentSong.cover}
        alt=""
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
