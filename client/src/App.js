import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Home from './router/home/Home';
import SignIn from './router/signin/SignIn';
import SignUp from './router/signup/SignUp';
import { Routes, Route } from 'react-router-dom'
import Liked from './router/liked/Liked';
import SinglePage from './router/single-page/SinglePage';
import Comments from './components/comments/Comments';
import UserProfile from './router/user-profile/UserProfile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/products/:id' element={<SinglePage />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/liked' element={<Liked />} />
        <Route path='product-comments/:id' element={<Comments />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
