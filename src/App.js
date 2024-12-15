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
      <div className="video-container">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/watch?v=P0haCYjysUs"
          title="Happy B-Day Video 2024"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>

  );
}

export default App;
