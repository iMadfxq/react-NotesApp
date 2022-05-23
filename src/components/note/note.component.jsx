import "./note.styles.scss";

import Button from "../button/button.component";
import { BUTTON_TYPES } from "../button/button.component";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ACTION_TYPES } from "../../store/store";
import { openModal } from "../../utils/open_close_MODALS";

export const NOTE_STYLES = {
  LIST_STYLE: "display-list",
  SQUARE_STYLE: "display-square",
};

const Note = ({ type, content, title, id, archived }) => {
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
      let notesWithArchivedProperty = notes.map((note) => {
        if (
          note.id ==
          Number(e.target.parentElement.parentElement.parentElement.dataset.id)
        ) {
          note.archived = true;
        }
        return note;
      });
      dispatch({
        type: ACTION_TYPES.NOTE_ARCHIVED,
        payload: notesWithArchivedProperty,
      });
    } else if (e.target.className === BUTTON_TYPES.RESTORE) {
      let notesWithoutArchivedProperty = notes.map((note) => {
        if (
          note.id ==
          Number(e.target.parentElement.dataset.id)
        ) {
          note.archived = false;
        }
        return note;
      });
      dispatch({
        type: ACTION_TYPES.NOTE_ARCHIVED,
        payload: notesWithoutArchivedProperty,
      });
    } else if (e.target.className === BUTTON_TYPES.SMALL_EDIT) {
      let noteEditorWrapper = document.querySelector('.editor__wrapper')
      dispatch({
        type: ACTION_TYPES.EDITING,
        payload: Number(e.target.parentElement.parentElement.parentElement.dataset.id),
      });
      openModal(noteEditorWrapper)
    }
  };

  switch (type) {
    case NOTE_STYLES.SQUARE_STYLE:
      return (
        <article className="squareNote" onClick={handleClick} data-id={id}>
          <div className="squareNote__header">
            <h3>{title}</h3>
            <div>
              {!archived ? (
                <>
                  <Button type={BUTTON_TYPES.SMALL_EDIT} />
                  <Button type={BUTTON_TYPES.SMALL_ARCHIVE} />
                </>
              ) : (
                <></>
              )}
              <Button type={BUTTON_TYPES.SMALL_DELETE} />
            </div>
          </div>
          <div className="squareNote__textarea">
            <textarea value={content} disabled></textarea>
          </div>
          {archived ? <Button type={BUTTON_TYPES.RESTORE} /> : <></>}
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
              {archived === false ? (
                <>
                  <Button type={BUTTON_TYPES.SMALL_EDIT} />
                  <Button type={BUTTON_TYPES.SMALL_ARCHIVE} />
                </>
              ) : (
                <></>
              )}
              <Button type={BUTTON_TYPES.SMALL_DELETE} />
            </div>
          </div>
          {archived ? <Button type={BUTTON_TYPES.RESTORE} /> : <></>}
        </article>
      );
    default:
      throw new Error(
        "style type of note unrecognized or not present, pass it as a prop"
      );
  }
};

export default Note;
