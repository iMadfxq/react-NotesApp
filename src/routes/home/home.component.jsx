import "./home.styles.scss";

import Note from "../../components/note/note.component";
import { NOTE_STYLES } from "../../components/note/note.component";
import DisplayModeSelector from "../../components/display_mode_selector/display_mode_selector.component";

const Home = () => {
  return (
    <section className="home__container">
      <DisplayModeSelector />
      <section className="notes__container">
        <Note type={NOTE_STYLES.SQUARE_STYLE} />
        <Note type={NOTE_STYLES.LIST_STYLE} />
      </section>
    </section>
  );
};

export default Home;
