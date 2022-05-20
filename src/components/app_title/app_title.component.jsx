import "./app_title.styles.scss";

import { openModal } from "../../utils/open_close_MODALS.js";

import Button from "../button/button.component";
import { BUTTON_TYPES } from "../button/button.component";

const AppTitle = () => {
  const handleNewNoteClick = () => {
    const noteFormWrapper = document.querySelector(".wrapper");
    openModal(noteFormWrapper)
    console.dir(noteFormWrapper)
  };

  return (
    <section className="header__title">
      <h1>Notes - React App</h1>
      <div onClick={handleNewNoteClick}>
        <Button type={BUTTON_TYPES.NEW_NOTE} />
      </div>
    </section>
  );
};

export default AppTitle;
