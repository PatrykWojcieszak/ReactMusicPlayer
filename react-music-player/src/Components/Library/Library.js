import React from "react";

import Song from "./Song/Song";

import styles from "./Library.module.scss";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  const librraryStyles = [styles.Library];

  if (libraryStatus) librraryStyles.push(styles.ActiveLibrary);

  return (
    <div className={librraryStyles.join(" ")}>
      <h2>Library</h2>
      <div className={styles.LibrarySongs}>
        {songs.map((song) => (
          <Song
            songs={songs}
            cover={song.cover}
            name={song.name}
            artist={song.artist}
            active={song.active}
            key={song.id}
            id={song.id}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
