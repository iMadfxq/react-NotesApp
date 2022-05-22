import { useEffect } from "react";

import { Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import './App.scss';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Archived from './routes/archived/archived.component';


function App() {
  const currentTab = useSelector((state) => state.currentTab)
  const navigate = useNavigate()
  useEffect(() => {
    if(currentTab === 'main-tab') {
      navigate('/')
    } else {
      navigate('/archived')
    }
  }, [])
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='archived' element={<Archived />} />
      </Route>
    </Routes>
  );
}

export default App;
