import './App.css';
import Button from './components/button/button.component';
import { BUTTON_TYPES } from './components/button/button.component';

function App() {
  return (
    <>
      <Button type={BUTTON_TYPES.newNote} />
      <Button type={BUTTON_TYPES.noteDisplayMode} />
    </>
  );
}

export default App;
