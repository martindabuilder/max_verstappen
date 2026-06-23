import { useState, useEffect } from 'react'

import Donuts from './components/Donuts.jsx'
import Intro from './components/Intro.jsx'
import ScrollHint from './components/ScrollHint.jsx'


import './styles/App.css'
import './styles/Donuts.css'


function App() {

  return (
    <>
      {/* intro portion of the site */}
      <Intro />
      <Donuts />
    </>
  );
}

export default App
