import "./navigation.styles.scss";

import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import TabSelector from "../../components/tab_selector/tab_selector.component";
import AppTitle from "../../components/app_title/app_title.component";
import NoteCreator from "../../components/note_creator/note_creator.component";
import Footer from "../../components/footer/footer.component";
import NoteEditor from "../../components/note_editor/note_editor.component";

const Navigation = () => {
  const notes = useSelector(state => state.notes)
  const noteBeingEdited = useSelector((state) => state.noteBeingEdited)
  return (
    <>
      {notes.length && noteBeingEdited ? <NoteEditor noteId={noteBeingEdited} /> : <></>}
      <NoteCreator />
      <header>
        <AppTitle />
        <TabSelector />
      </header>
      <Outlet />
      <Footer portfolio={'https://imadfxq.com/'}/>
    </>
  );
};

export default Navigation;
