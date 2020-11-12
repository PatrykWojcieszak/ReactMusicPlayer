import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Player.module.scss";

import { playAudio } from "../../util";

const Player = ({
    isPlaying,
    setIsPlaying,
    audioRef,
    songInfo,
    setSongInfo,
    currentSong,
    songs,
    setCurrentSong,
    setSongs,
  }) => {
    const [activeVolume, setActiveVolume] = useState(false);

    const activeLibraryHandler = (nextPrev) => {
      const newSongs = songs.map((song) => {
        if (song.id === nextPrev.id) {
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
    };
  
    const trackAnim = {
      transform: `translateX(${songInfo.animationPercentage}%)`,
    };
  
    function getTime(time) {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
    }
  
    const dragHandler = (e) => {
      audioRef.current.currentTime = e.target.value;
      setSongInfo({ ...songInfo, currentTime: e.target.value });
    };
  
    const playSongHandler = () => {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
      } else {
        audioRef.current.play();
        setIsPlaying(!isPlaying);
      }
    };
  
    const skipTrackHandler = async (direction) => {
      let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
  
      if (direction === "skip-forward") {
        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
      }
  
      if (direction === "skip-back") {
        if ((currentIndex - 1) % songs.length === -1) {
          await setCurrentSong(songs[songs.length - 1]);
          activeLibraryHandler(songs[songs.length - 1]);
          playAudio(isPlaying, audioRef);
          return;
        }
  
        await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
      }
  
      if (isPlaying) audioRef.current.play();
    };
  
    const changeVolume = (e) => {
      let value = e.target.value;
      audioRef.current.volume = value;
      setSongInfo({ ...songInfo, volume: value });
    };
  
    return (
      <div className={styles.Player}>
        <div className={styles.TimeControl}>
          <p>{getTime(songInfo.currentTime)}</p>
          <div
            style={{
              background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
            }}
            className={styles.Track}>
            <input
              value={songInfo.currentTime}
              type="range"
              max={songInfo.duration || 0}
              min={0}
              onChange={dragHandler}
            />
            <div style={trackAnim} className={styles.AnimateTrack}></div>
          </div>
          <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
        </div>
        <div className={styles.PlayControl}>
          <FontAwesomeIcon
            size="2x"
            onClick={() => skipTrackHandler("skip-back")}
            className={styles.SkipBack}
            icon="angle-left"
          />
          <FontAwesomeIcon
            size="2x"
            onClick={playSongHandler}
            className={styles.Play}
            icon={isPlaying ? "pause" : "play"}
          />
          <FontAwesomeIcon
            className={styles.SkipForward}
            icon="angle-right"
            size="2x"
            onClick={() => skipTrackHandler("skip-forward")}
          />
          <FontAwesomeIcon
            size="2x"
            onClick={() => setActiveVolume(!activeVolume)}
            icon="volume-down"
          />
          {activeVolume && (
            <input
              onChange={changeVolume}
              value={songInfo.volume}
              max="1"
              min="0"
              step="0.01"
              type="range"
            />
          )}
        </div>
      </div>
    );
  };
  
  export default Player;
