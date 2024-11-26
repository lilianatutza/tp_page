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

const App = () => {
  return (
    <div className="App">
      <h1>Discworld</h1>
      <h2>Book Series</h2>
      <div className="buttons">
        <Overview />
        <Books />
        <Videos />
        <Characters />
      </div>
      <div>
        <p>Image with Great A'Tuin</p>
        <p>Image with Ank Morpokh</p>

        <p>
          <a href="https://en.wikipedia.org/wiki/Discworld" target="_blank">
            Discworld{" "}
          </a>
          is a comic fantasy book series written by the English author Terry
          Pratchett, set on the Discworld, a flat planet balanced on the backs
          of four elephants which in turn stand on the back of a giant turtle.
          The series began in 1983 with The Colour of Magic and continued until
          the final novel The Shepherd's Crown, which was published in 2015,
          following Pratchett's death. The books frequently parody or take
          inspiration from classic works, usually fantasy or science fiction, as
          well as mythology, folklore and fairy tales, and often use them for
          satirical parallels with cultural, political and scientific issues..{" "}
        </p>
        <p>
          🦆What Duck? 🦆The Duck Man 🦆 is a beggar in Ankh-Morpork; he seems
          relatively sane except for the duck on his head that he doesn't seem
          aware of. People will ask him about the duck, and he says "what duck?"
          because he either doesn't know it's there or refuses to acknowledge it
          despite it definitely being there 🦆.
        </p>
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
