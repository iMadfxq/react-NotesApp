import "./archived.styles.scss";

import Note from "../../components/note/note.component";

import { useSelector } from "react-redux";

import DisplayModeSelector from "../../components/display_mode_selector/display_mode_selector.component";

const Archived = () => {
  const displayMode = useSelector((state) => state.displayMode);
  const notes = useSelector((state) => state.notes);

  const filteredNotes = notes.filter((note) => note.archived);
  return (
    <section className="home__container archived">
      <DisplayModeSelector displayMode={displayMode} />
      <section className="notes__container">
        {filteredNotes.map((note) => {
          return (
            <Note
              key={note.id}
              type={displayMode}
              content={note.content}
              id={note.id}
              title={note.title}
              archived={note.archived}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Archived;
