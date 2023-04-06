import './App.css';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Navbar />
      <Slider />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
