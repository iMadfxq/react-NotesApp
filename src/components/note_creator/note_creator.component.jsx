import "./note_creator.styles.scss";

import {ACTION_TYPES} from '../../store/store'
import { useDispatch } from "react-redux";

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

const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const note = noteCreatorFn(e.target[1].value, e.target[2].value)
    dispatch({type: ACTION_TYPES.NEW_NOTE, payload: note})
  }
  
  const handleClick = (e) => {
    e.stopPropagation()
    const noteForm = document.querySelector(".wrapper");
    console.log(e.target);
    if (
      e.target === document.querySelector(".CLOSE") 
    ) {
      noteForm.style.opacity = "0";
      setTimeout(() => {
        //to make the transition smoother
        noteForm.style.zIndex = "1";
      }, 400);
    }
  };
  return (
    <div className="wrapper">
      <form className="note--creator" onClick={handleClick} onSubmit={handleSubmit}>
        <Button type={BUTTON_TYPES.CLOSE} />
        <input type="text" placeholder="Title" required />
        <textarea placeholder="Type your note..."></textarea>
        <Button type={BUTTON_TYPES.DONE} />
      </form>
    </div>
  );
};

export default NoteCreator;
