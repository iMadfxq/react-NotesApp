import "./button.scss"

export const BUTTON_TYPES = {
  "newNote": "newNote",
  "noteDisplayMode": "noteDisplayMode",

}

const Button = ({type}) => {
  switch(type) {
    case BUTTON_TYPES.newNote:
      return (
        <button>New Note</button>
      )
    case BUTTON_TYPES.noteDisplayMode:
      return (
        <div>
          <button>squares</button>
          <button>columns</button>
        </div>
      )
    default:
      throw new Error("Your button had no type, or an unrecognized type.")
  }
}

export default Button