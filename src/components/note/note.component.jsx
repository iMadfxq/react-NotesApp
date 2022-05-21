import "./note.styles.scss";

import Button from "../button/button.component";
import { BUTTON_TYPES } from "../button/button.component";

export const NOTE_STYLES = {
  LIST_STYLE: "display-list",
  SQUARE_STYLE: "display-square",
};

const Note = ({ type, content, title }) => {
  switch (type) {
    case NOTE_STYLES.SQUARE_STYLE:
      return (
        <article className="squareNote">
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
        <article className="listNote">
          <div className="listNote__textarea">
            <h3>{title}</h3>
            <textarea disabled value={content}></textarea>
          </div>
          <div className="listNote__header">
            <Button type={BUTTON_TYPES.SMALL_EDIT} />
            <Button type={BUTTON_TYPES.SMALL_ARCHIVE} />
            <Button type={BUTTON_TYPES.SMALL_DELETE} />
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
