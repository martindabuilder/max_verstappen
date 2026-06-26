import { useState, useEffect } from 'react'

import Donuts from './components/Donuts.jsx'
import Intro from './components/Intro.jsx'
import WDC from './components/WDCSection.jsx'

import './styles/App.css'
import './styles/Donuts.css'


function App() {

  return (
    <>
      {/* intro portion of the site */}
      <Intro />
      <Donuts />
    
      {/* 1st scroll portion of the site - Drivers championships*/}
      <WDC />

      {/* 2nd scroll portion of the site - wins*/}

    </>
  );
}

export default App
