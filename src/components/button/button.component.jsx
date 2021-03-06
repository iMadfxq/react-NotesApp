import "./button.scss";

export const BUTTON_TYPES = {
  NEW_NOTE: "NEW_NOTE",
  DISPLAY_MODE: "DISPLAY_MODE",
  DONE: "DONE",
  HOME: "HOME",
  EDIT: "EDIT",
  CLOSE: "CLOSE",
  SMALL_DELETE: "SMALL_DELETE",
  SMALL_EDIT: "SMALL_EDIT",
  SMALL_ARCHIVE: "SMALL_ARCHIVE",
  RESTORE: "RESTORE",
  RESTORE_ALL: "RESTORE_ALL",
};

const Button = ({ type, currentMode }) => {
  switch (type) {
    case BUTTON_TYPES.NEW_NOTE:
      return <button title="Create a new note" className="NEW_NOTE" type="button">+ New Note</button>;
    case BUTTON_TYPES.DISPLAY_MODE:
      return (
        <div className="DISPLAY_MODE">
          <span>Display Mode</span>
          <div>
            <button title="Show notes in SQUARE style" type="button" id="display-square" className={currentMode === 'display-square' ? 'currentMode' : ''} >⍠</button>
            <button title="Show notes in LIST style" type="button" id="display-list" className={currentMode === 'display-list' ? 'currentMode' : ''}>⌸</button>
          </div>
        </div>
      );
    case BUTTON_TYPES.DONE:
      return <button className="DONE" type="submit" title="Done">&#x2713; Done</button>;
    case BUTTON_TYPES.HOME:
      return <button className="HOME" type="button">&#x21aa; Home</button>;
    case BUTTON_TYPES.EDIT:
      return <button className="EDIT" type="button">✏️ Edit</button>;
    case BUTTON_TYPES.CLOSE:
      return <button className="CLOSE" type="button">&#x2715;</button>;
    case BUTTON_TYPES.SMALL_DELETE:
      return <button className="SMALL_DELETE" type="button" title="Delete">🗑</button>;
    case BUTTON_TYPES.SMALL_EDIT:
      return <button className="SMALL_EDIT" type="button" title="Edit">✏️</button>;
    case BUTTON_TYPES.SMALL_ARCHIVE:
      return <button className="SMALL_ARCHIVE" type="button" title="Archive">📁</button>;
    case BUTTON_TYPES.RESTORE_ALL:
      return <button className="RESTORE_ALL" type="button">Restore All</button>;
    case BUTTON_TYPES.RESTORE:
      return <button className="RESTORE" title="Restore">Restore</button>;
    default:
      throw new Error("Your button had no type, or an unrecognized type.");
  }
};

export default Button;
