import "./note_editor.styles.scss";

import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPES } from "../../store/store";

import Button from "../button/button.component";
import { BUTTON_TYPES } from "../button/button.component";
import { useState } from "react";

const NoteEditor = ({ noteId }) => {
  const dispatch = useDispatch()
  const actualNotes = useSelector((state) => state.notes);
  const noteBeingEdited = actualNotes.filter((n) => {
    if (n.id == noteId) {
      return n;
    } else {
      return;
    }
  });

  const [titleEdited, setTitle] = useState(noteBeingEdited[0].title)
  const [contentEdited, setContent] = useState(noteBeingEdited[0].content)
  const handleSubmit = (e) => {
    e.preventDefault()
    const notesWithEdits = actualNotes.map((n) => {
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
