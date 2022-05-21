import "./home.styles.scss";

import { useSelector } from "react-redux";

import Note from "../../components/note/note.component";
import DisplayModeSelector from "../../components/display_mode_selector/display_mode_selector.component";

const Home = () => {
  const displayMode = useSelector((state) => state.displayMode);
  const notes = useSelector((state) => state.notes);

  const filteredNotes = notes.filter((note) => note.archived === false)

  return (
    <section className="home__container">
      <DisplayModeSelector />
      <section className="notes__container">
        {filteredNotes.map((note) => {
          return (
            <Note
              key={note.id}
              type={displayMode}
              content={note.content}
              title={note.title}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Home;
