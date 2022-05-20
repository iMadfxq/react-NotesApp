import "./home.styles.scss";

import { useSelector } from "react-redux";

import Note from "../../components/note/note.component";
import { NOTE_STYLES } from "../../components/note/note.component";
import DisplayModeSelector from "../../components/display_mode_selector/display_mode_selector.component";

const Home = () => {
  const notes = useSelector((state) => state.notes)
  console.log(notes)
  return (
    <section className="home__container">
      <DisplayModeSelector />
      <section className="notes__container">
        {notes.map((note) => {
          return <Note key={note.id} type={NOTE_STYLES.SQUARE_STYLE} content={note.content} title={note.title} />
          
        })}
      </section>
    </section>
  );
};

export default Home;
