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
  RESTORE_ALL: "RESTORE_ALL",
};

const Button = ({ type }) => {
  switch (type) {
    case BUTTON_TYPES.NEW_NOTE:
      return <button className="NEW_NOTE">+ New Note</button>;
    case BUTTON_TYPES.DISPLAY_MODE:
      return (
        <div className="DISPLAY_MODE">
          <div>Display Mode</div>
          <div>
            <button>⍠</button>
            <button>⌸</button>
          </div>
        </div>
      );
    case BUTTON_TYPES.DONE:
      return <button className="DONE">&#x2713; Done</button>;
    case BUTTON_TYPES.HOME:
      return <button className="HOME">&#x21aa; Home</button>;
    case BUTTON_TYPES.EDIT:
      return <button className="EDIT">✏️ Edit</button>;
    case BUTTON_TYPES.CLOSE:
      return <button className="CLOSE">&#x2715;</button>;
    case BUTTON_TYPES.SMALL_DELETE:
      return <button className="SMALL_DELETE">🗑</button>;
    case BUTTON_TYPES.SMALL_EDIT:
      return <button className="SMALL_EDIT">✏️</button>;
    case BUTTON_TYPES.SMALL_ARCHIVE:
      return <button className="SMALL_ARCHIVE">📁</button>;
    case BUTTON_TYPES.RESTORE_ALL:
      return <button className="RESTORE_ALL">Restore All</button>;
    default:
      throw new Error("Your button had no type, or an unrecognized type.");
  }
};

export default Button;
