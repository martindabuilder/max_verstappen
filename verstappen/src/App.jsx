import { useState, useEffect } from 'react'

import Donuts from './components/IntroComps/Donuts.jsx'
import Intro from './components/IntroComps/Intro.jsx'
import WDC from './components/WDCComps/WDCSection.jsx'
import Wins from './components/WinsComps/WinsSection.jsx'
import Podiums from './components/PodiumsComps/PodiumsSection.jsx'
import Ending from './components/EndingComps/EndingSection.jsx'

import HorizontalGallery from './shared/HorizontalGallery.jsx'

import './styles/App.css'
import './styles/IntroStyles/Donuts.css'


function App() {
  return (
    <>
      {/* intro portion of the site */}
      <Intro />
      <Donuts />

      {/* Reusable scroll gallery transition section*/}
      <HorizontalGallery />

      {/* 1st scroll portion of the site - Drivers championships*/}
      <WDC />
      <HorizontalGallery />

      {/* 2nd scroll portion of the site - wins*/}
      <Wins />
      <HorizontalGallery />

      {/* 3rd scroll portion of the site - podiums*/}
      <Podiums />
      <HorizontalGallery />


      {/* Ending portion of the site*/}
      <Ending />
    </>
  );
}

export default App
