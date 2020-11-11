import React from "react";

import styles from "./Song.module.scss";

const Song = ({ name, artist, cover, active }) => {
  const songStyles = [styles.LibrarySong];
  if (active) songStyles.push(styles.Selected);

  return (
    <div className={songStyles.join(" ")}>
      <img src={cover} alt="" />
      <div className={styles.SongDescription}>
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default Song;
