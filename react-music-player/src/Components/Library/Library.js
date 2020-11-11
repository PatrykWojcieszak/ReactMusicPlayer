import React from "react";

import Song from "./Song/Song";

import styles from "./Library.module.scss";

const Library = ({
  songs,
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
            key={song.id}
            id={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
