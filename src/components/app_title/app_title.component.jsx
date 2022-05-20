import "./app_title.styles.scss";

import Button from "../button/button.component";
import { BUTTON_TYPES } from "../button/button.component";

const AppTitle = () => {
  const handleNewNoteClick = () => {
    const noteForm = document.querySelector(".wrapper");
    noteForm.style.zIndex = '3'
    noteForm.style.opacity = "1";
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
