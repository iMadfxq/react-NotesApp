import "./note_editor.styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPES } from "../../store/store";

import Button from "../button/button.component";
import { BUTTON_TYPES } from "../button/button.component";
import { useState } from "react";

const NoteEditor = ({ noteId }) => {
  const dispatch = useDispatch()
  const notes = useSelector((state) => state.notes);
  const note = notes.filter((n) => {
    if (n.id == noteId) {
      return notes;
    } else {
      return;
    }
  });

  const [titleEdited, setTitle] = useState(String(note[0].title))
  const [contentEdited, setContent] = useState(String(note[0].content))
  const handleSubmit = (e) => {
    e.preventDefault()
    const notesWithEdits = notes.map((n) => {
      if (n.id == noteId) {
        n.title = titleEdited
        n.content = contentEdited
        return n;
      } else {
        return n;
      }
    })
      dispatch({type: ACTION_TYPES.NOTE_EDITED, payload: notesWithEdits})
  }
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  const handleContentChange = (e) => {
    setContent(e.target.value)
  }

  return (
    <section className="editor__wrapper">
      <form className="note-edited" onSubmit={handleSubmit}>
        <input type="text" onChange={handleTitleChange} value={titleEdited} />
        <textarea value={contentEdited} onChange={handleContentChange} ></textarea>
        <Button type={BUTTON_TYPES.DONE} />
      </form>
    </section>
  );
};

export default NoteEditor;
