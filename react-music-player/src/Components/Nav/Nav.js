import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Nav.module.scss";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  const openLibraryHandler = () => {
    setLibraryStatus(!libraryStatus);
  };

  return (
    <nav>
      <h1>React Music Player</h1>
      <button
        className={libraryStatus ? styles.LibraryActive : null}
        onClick={openLibraryHandler}>
        Library
        <FontAwesomeIcon icon="music"></FontAwesomeIcon>
      </button>
    </nav>
  );
};

export default Nav;
