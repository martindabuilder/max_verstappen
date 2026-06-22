import { useState, useEffect } from 'react'

import Donuts from './components/Donuts.jsx'
import Intro from './components/Intro.jsx'

import './styles/App.css'
import './styles/Donuts.css'


function App() {

  return (
    <>
      <Intro />
      <Donuts />
    </>
  );
}

export default App
