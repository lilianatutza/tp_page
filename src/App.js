//outline: 5px dotted blue;

import logo from "./logo.svg";
import "./App.css";
import Overview from "./Overview";
import Books from "./Books";
import Videos from "./Videos";
import Characters from "./Characters";
import DiscworldWorld from "./DiscworldWorld";
import Science from "./Science";
import VideoGame from "./VideoGame";
import LastBook from "./LastBook";
import BodyText from "./BodyText";

const App = () => {
  return (
    <div className="App">
      <h1>Discworld</h1>
      <h2>Book Series</h2>
      <h3>🦆What Duck? </h3>
      <div className="buttons">
        <Overview />
        <Books />
        <Videos />
        <Characters />
      </div>
      
      <div>
        <p>Image with Great A'Tuin</p>
        <div>
      <BodyText />
      </div>
        <p>Image with Ank Morpokh</p>
        
      </div>
      
      <div className="buttons">
        <DiscworldWorld />
        <VideoGame />
        <Science />
        <LastBook />
      </div>
      <div className="footer">
        <footer>
          Coded by{" "}
          <a href="https://github.com/lilianatutza" target="_blank">
            Liliana Tuta
          </a>
          , open-sourced on
          <a
            href="https://github.com/lilianatutza/Meteo-project-"
            target="_blank"
          >
            {" "}
            GitHub{" "}
          </a>
          and hosted on{" "}
          <a
            href="https://meteo-projectmeteo-project.netlify.app/"
            target="_blank"
          >
            Netfly
          </a>
          .
        </footer>
      </div>
    </div>
  );
};

export default App;
