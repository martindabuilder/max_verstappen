import { useState, useEffect } from 'react'

import Donuts from './components/IntroComps/Donuts.jsx'
import Intro from './components/IntroComps/Intro.jsx'
import WDC from './components/WDCComps/WDCSection.jsx'
import Wins from './components/WinsComps/WinsSection.jsx'
import Podiums from './components/PodiumsComps/PodiumsSection.jsx'
import Ending from './components/EndingComps/EndingSection.jsx'

import ScrollGallery from './shared/ScrollGallery.jsx'

import './styles/App.css'
import './styles/IntroStyles/Donuts.css'


function App() {
  /*On refresh the page starts from the top again*/
  useEffect(() => {
    window.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      {/* intro portion of the site */}
      <Intro />
      <Donuts />

      {/* Reusable scroll gallery transition section*/}
      <ScrolllGallery />

      {/* 1st scroll portion of the site - Drivers championships*/}
      <WDC />
      <ScrolllGallery />
      
      {/* 2nd scroll portion of the site - wins*/}
      <Wins />

      <Podiums />

      {/* Ending portion of the site*/}
      <Ending />
    </>
  );
}

export default App
