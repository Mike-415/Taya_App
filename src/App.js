import React, { useState } from 'react'
import './App.css'
import About from './Components/About'
import './Components/ImageCarousel'
import ImageCarousel from './Components/ImageCarousel'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import Modal from './Components/Modal'



function App() {
  //const { width, height } = useWindowSize()
  const [showModal, setShowModal] = useState(true)
  return (
    <div className="App">
      {showModal && <Modal setShowModal={setShowModal} />}
      {!showModal && <ImageCarousel />}
      {/* <Confetti
        width={width}
        height={height}
      /> */}
      <ImageCarousel />
      <About />
    </div>
  );
}

export default App;


