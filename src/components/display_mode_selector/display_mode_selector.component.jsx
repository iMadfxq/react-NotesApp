import "./display_mode_selector.scss";

import Button from "../button/button.component";
import { BUTTON_TYPES } from "../button/button.component";

const DisplayModeSelector = () => {
  return (
    <div className="home__display_mode">
      <Button type={BUTTON_TYPES.DISPLAY_MODE} />
    </div>
  );
};

export default DisplayModeSelector;
