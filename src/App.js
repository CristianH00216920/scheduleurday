import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from './components/Principal';
import Login from './components/Login';
import Admin from './components/Principal2';


export default function App() {
  return <>
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Principal></Principal>} />

        <Route path='/Login' element={<Login></Login>} />

        <Route path='/Admin' element={<Admin></Admin>} />

      </Routes>

    </BrowserRouter>
  </>
}


