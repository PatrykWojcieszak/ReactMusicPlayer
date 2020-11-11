import React, { useState } from "react";

import Song from "../Song/Song";
import Nav from "../Nav/Nav";

const Home = (props) => {
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <div>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song />
    </div>
  );
};

export default Home;
