import React, { useState } from "react";

import Song from "../Song/Song";
import Nav from "../Nav/Nav";
import Library from "../Library/Library";
import Player from '../Player/Player';

import chillhop from "../../data";

const Home = (props) => {
  const [libraryStatus, setLibraryStatus] = useState(false);

  const [songs, setSongs] = useState(chillhop());

  return (
    <div>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song />
      <Player/>
      <Library songs={songs} libraryStatus={libraryStatus} />
    </div>
  );
};

export default Home;
