import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Player.module.scss";

const Player = ({ isPlaying, songInfo }) => {
  return (
    <div className={styles.Player}>
      <div className={styles.TimeControl}>
        <p>12:00</p>
        <div className={styles.Track}>
          <input type="range" min={0} />
          <div className={styles.AnimateTrack}></div>
        </div>
        <p>3:38</p>
      </div>
      <div className={styles.PlayControl}>
        <FontAwesomeIcon
          size="2x"
          className={styles.SkipBack}
          icon="angle-left"
        />
        <FontAwesomeIcon
          size="2x"
          className={styles.Play}
          icon={isPlaying ? "pause" : "play"}
        />
        <FontAwesomeIcon
          className={styles.SkipForward}
          icon="angle-right"
          size="2x"
        />
        <FontAwesomeIcon size="2x" icon="volume-down" />
      </div>
    </div>
  );
};

export default Player;
