import './App.css';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';

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
