import './App.css';
import About from './Components/About'
import './Components/ImageCarousel'
import ImageCarousel from './Components/ImageCarousel';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'



function App() {
  const { width, height } = useWindowSize()
  return (
    <div className="App">
      <Confetti
        width={width}
        height={height}
      />
      <ImageCarousel />
      <About />
    </div>
  );
}

export default App;


