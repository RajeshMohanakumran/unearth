import React from 'react';
import './App.css';
import { Routes,Route,Link } from 'react-router-dom';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className='main'>
      <Main/>
      <Sidebar/>
    </div>
  );
}

export default App;
