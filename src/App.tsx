import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/app.sass'
import Sheets from './components/pages/sheet/Sheets';
import Debts from './components/pages/debts/Debts';
import Stats from './components/pages/stats/Stats';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <img src="/assets/blob.png" alt="" className="blob-background"/>
      <Navbar></Navbar>
      <Routes>
        <Route index element={<Sheets/>}></Route>
        <Route path='debts' element={<Debts/>}></Route>
        <Route path='stats' element={<Stats/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
