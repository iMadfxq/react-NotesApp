import "./display_mode_selector.scss";

import { useDispatch } from "react-redux";
import { ACTION_TYPES } from "../../store/store";

import Button from "../button/button.component";
import { BUTTON_TYPES } from "../button/button.component";

const DisplayModeSelector = ({displayMode}) => {
const dispatch = useDispatch()

  const handleClick = (e) => {
    e.stopPropagation()
    console.dir(e.target)
    if(e.target.tagName === 'BUTTON') {
      dispatch({type: ACTION_TYPES.DISPLAY_MODE_CHANGE, payload: e.target.id})
    }
  }
  return (
    <div className="home__display_mode" onClick={handleClick} >
      <Button type={BUTTON_TYPES.DISPLAY_MODE} currentMode={displayMode} />
    </div>
  );
};

export default DisplayModeSelector;
