import { useState, useEffect } from 'react'

import Donuts from './components/IntroCmp/Donuts.jsx'
import Intro from './components/IntroCmp/Intro.jsx'
import WDC from './components/WDC/WDCSection.jsx'
import Wins from './components/Wins/WinsSection.jsx'

import './styles/App.css'
import './styles/IntroStyles/Donuts.css'


function App() {
  return (
    <>
      {/* intro portion of the site */}
      <Intro />
      <Donuts />
          
      {/* 1st scroll portion of the site - Drivers championships*/}
      <WDC />

      {/* 2nd scroll portion of the site - wins*/}
      <Wins />

    </>
  );
}

export default App
