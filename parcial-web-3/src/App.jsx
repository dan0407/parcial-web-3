import { store } from './redux/store';
import Login from './pages/login';
import Dex from './pages/dex';
import Fild from './pages/field';
import Lab from './pages/lab';

import { BrowserRouter, Routes,Route } from "react-router";

import './App.css'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dex" element={<Dex />} />
        <Route path="/Fild" element={<Fild />} />
        <Route path="/Lab" element={<Lab />} />
    
      </Routes>
    </BrowserRouter>
  );
};


export default App
