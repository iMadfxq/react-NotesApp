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
};

const Button = ({ type }) => {
  switch (type) {
    case BUTTON_TYPES.NEW_NOTE:
      return <button>New Note</button>;
    case BUTTON_TYPES.DISPLAY_MODE:
      return (
        <div>
          <button>squares</button>
          <button>columns</button>
        </div>
      );
    case BUTTON_TYPES.DONE:
      return <button>&#x2713; Done</button>;
    case BUTTON_TYPES.HOME:
      return <button>&#x21aa; Home</button>;
    case BUTTON_TYPES.EDIT:
      return <button>✏️ Edit</button>;
    case BUTTON_TYPES.CLOSE:
      return <button>&#x2715;</button>;
      case BUTTON_TYPES.SMALL_DELETE:
        return <button>🗑</button>;
        case BUTTON_TYPES.SMALL_EDIT:
        return <button>✏️</button>;
        case BUTTON_TYPES.SMALL_ARCHIVE:
        return <button>📁</button>;
  
    default:
      throw new Error("Your button had no type, or an unrecognized type.");
  }
};

export default Button;
