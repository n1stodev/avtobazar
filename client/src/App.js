import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Home from './router/home/Home';
import SignIn from './router/signin/SignIn';
import SignUp from './router/signup/SignUp';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
