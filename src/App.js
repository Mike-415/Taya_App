import React from 'react'
import './App.css'
import About from './Components/About'
import './Components/ImageCarousel'
import ImageCarousel from './Components/ImageCarousel'
//import Modal from './Components/Modal'
import FamilyMembers from './Components/FamilyMembers';



function App() {
  //const { width, height } = useWindowSize()
  //const [showModal, setShowModal] = useState(true)
  return (
    <div className="App">
      {/* showModal && <Modal setShowModal={setShowModal} /> */}
      {/* <Confetti
        width={width}
        height={height}
      /> */}
      <ImageCarousel />
      <About />
      <FamilyMembers />
            {/* Embedding a video */}
            <div className="video-container">
        <video width="100%" controls>
          <source src="https://www.youtube.com/watch?v=P0haCYjysUs" type="video/mp4" />
        </video>
      </div>
    </div>

  );
}

export default App;
