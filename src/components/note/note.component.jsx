import "./note.styles.scss";

import Button from "../button/button.component";
import { BUTTON_TYPES } from "../button/button.component";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ACTION_TYPES } from "../../store/store";

export const NOTE_STYLES = {
  LIST_STYLE: "display-list",
  SQUARE_STYLE: "display-square",
};

const Note = ({ type, content, title, id }) => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.stopPropagation();
    if (e.target.className === BUTTON_TYPES.SMALL_DELETE) {
      let notesWithoutDeleted = notes.filter((note) => {
        if (
          note.id !==
          Number(e.target.parentElement.parentElement.parentElement.dataset.id)
        ) {
          return note;
        }
        return;
      });
      console.log(notesWithoutDeleted);
      dispatch({
        type: ACTION_TYPES.NOTE_DELETED,
        payload: notesWithoutDeleted,
      });
    } else if (e.target.className === BUTTON_TYPES.SMALL_ARCHIVE) {
      console.log("archived");
    }
  };

  switch (type) {
    case NOTE_STYLES.SQUARE_STYLE:
      return (
        <article className="squareNote" onClick={handleClick} data-id={id}>
          <div className="squareNote__header">
            <h3>{title}</h3>
            <div>
              <Button type={BUTTON_TYPES.SMALL_EDIT} />
              <Button type={BUTTON_TYPES.SMALL_ARCHIVE} />
              <Button type={BUTTON_TYPES.SMALL_DELETE} />
            </div>
          </div>
          <div className="squareNote__textarea">
            <textarea value={content} disabled></textarea>
          </div>
        </article>
      );
    case NOTE_STYLES.LIST_STYLE:
      return (
        <article className="listNote" onClick={handleClick} data-id={id}>
          <div className="listNote__textarea">
            <h3>{title}</h3>
            <textarea disabled value={content}></textarea>
          </div>
          <div className="listNote__header">
            <div>
              <Button type={BUTTON_TYPES.SMALL_EDIT} />
              <Button type={BUTTON_TYPES.SMALL_ARCHIVE} />
              <Button type={BUTTON_TYPES.SMALL_DELETE} />
            </div>
          </div>
        </article>
      );
    default:
      throw new Error(
        "style type of note unrecognized or not present, pass it as a prop"
      );
  }
};

export default Note;
