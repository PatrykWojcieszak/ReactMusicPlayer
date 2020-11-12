import React from "react";

import styles from "./Song.module.scss";

import { playAudio } from "../../../util";

const Song = ({
  name,
  artist,
  cover,
  id,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
  active,
}) => {
  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong({ ...selectedSong[0] });

    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSongs(newSongs);
    playAudio(isPlaying, audioRef);
  };

  const songStyles = [styles.LibrarySong];

  if (active) songStyles.push(styles.Selected);

  return (
    <div onClick={songSelectHandler} className={songStyles.join(" ")}>
      <img src={cover} alt="" />
      <div className={styles.SongDescription}>
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
};

export default Song;
