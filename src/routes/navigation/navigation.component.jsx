import "./navigation.styles.scss";

import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import TabSelector from "../../components/tab_selector/tab_selector.component";
import AppTitle from "../../components/app_title/app_title.component";
import NoteCreator from "../../components/note_creator/note_creator.component";
import Footer from "../../components/footer/footer.component";

const Navigation = () => {
  const creatingNote = useSelector((state) => state.creatingNote)
  return (
    <>
      <NoteCreator creatingNote={creatingNote} />
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
