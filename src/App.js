import './App.css';
import Button from './components/button/button.component';
import { BUTTON_TYPES } from './components/button/button.component';

function App() {
  return (
    <>
      <Button type={BUTTON_TYPES.NEW_NOTE} />
      <Button type={BUTTON_TYPES.DISPLAY_MODE} />
      <Button type={BUTTON_TYPES.DONE} />
      <Button type={BUTTON_TYPES.HOME} />
      <Button type={BUTTON_TYPES.EDIT} />
      <Button type={BUTTON_TYPES.CLOSE} />
      <Button type={BUTTON_TYPES.SMALL_DELETE} />
      <Button type={BUTTON_TYPES.SMALL_EDIT} />
      <Button type={BUTTON_TYPES.SMALL_ARCHIVE} />
    </>
  );
}

export default App;
