import "./note_creator.styles.scss";

import { useNavigate } from "react-router-dom";

import { ACTION_TYPES } from "../../store/store";
import { useDispatch } from "react-redux";

import { closeModal } from "../../utils/open_close_MODALS.js";

import Button from "../button/button.component";
import { BUTTON_TYPES } from "../button/button.component";

const noteCreatorFn = (title, content) => {
  return {
    title,
    content,
    date: new Date(),
    id: Date.now(),
    archived: false,
  };
};


const NoteCreator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    const noteFormWrapper = document.querySelector(".wrapper");
    e.preventDefault();
    const note = noteCreatorFn(e.target[1].value, e.target[2].value);
    dispatch({ type: ACTION_TYPES.NEW_NOTE, payload: note });
    e.target.reset();
    closeModal(noteFormWrapper);
    navigate('/')
    dispatch({ type: ACTION_TYPES.TAB_CHANGE, payload: 'main-tab' });
  };

  const handleClick = (e) => {
    e.stopPropagation();
    const noteFormWrapper = document.querySelector(".wrapper");
    if (e.target === document.querySelector(".CLOSE")) {
      closeModal(noteFormWrapper);
    }
  };

  return (
    <div className="wrapper">
      <form
        className="note--creator"
        onClick={handleClick}
        onSubmit={handleSubmit}
      >
        <Button type={BUTTON_TYPES.CLOSE} />
        <input type="text" placeholder="Title" required />
        <textarea placeholder="Type your note..." required></textarea>
        <Button type={BUTTON_TYPES.DONE} />
      </form>
    </div>
  );
};

export default NoteCreator;
