import { useState, useEffect } from 'react'

import Donuts from './components/IntroComps/Donuts.jsx'
import Intro from './components/IntroComps/Intro.jsx'
import WDC from './components/WDCComps/WDCSection.jsx'
import Wins from './components/WinsComps/WinsSection.jsx'
import Podiums from './components/PodiumsComps/PodiumsSection.jsx'

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

      {/* 3rd scroll portion of the site - podiums*/}
      <Podiums />

    </>
  );
}

export default App
