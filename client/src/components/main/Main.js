import React, { useState } from 'react'
import './Main.css'
import { Link } from 'react-router-dom'
import Cars from '../../static'
import { BsHeart, BsHeartFill, BsChevronRight } from 'react-icons/bs'

function Main() {
  const [car, setCar] = useState(Cars);

  const handleCar = (postId) => {
    const postIndex = car.findIndex(post => post.id === postId);
    const updatedPosts = [...car];
    updatedPosts[postIndex].liked = true;
    setCar(updatedPosts);
  };
  return (
    <div className='main'>
      <div className="container">
        <div className="main__pageLinks">
          <Link to='/motorcycles' className="main__pLItem">
          </Link>
          <Link to='/cars' className="main__pLItem">
          </Link>
          <Link to='/trucks' className="main__pLItem">
          </Link>
        </div>
        <div className="main__products">
          {
            Cars?.map((e) => (
              <div className="main__productsCard" key={e.id}>
                <Link to={`/products/${e.id}`}>
                  <img src={e.img} alt="" className='main__pCImg' />
                </Link>
                <h2 className='main__pCTitle'>{e.name}</h2>
                <div className='caca'>
                  <h1 className='main__pCPrice'>{e.price} $</h1>
                  <p className='main__pCCategory'>{e.category}</p>
                </div>
                <div className="main__pCBtns">
                  <button className='main__pCLiked' onClick={() => handleCar(e.id)}>{e.liked ? <BsHeartFill /> : <BsHeart />}</button>
                  <Link to={`/products/${e.id}`} className={"main__pCBtn"}><button>Batafsil</button></Link>
                </div>
                <Link to={`product-comments/${e.id}`} className="main__pc-comment">
                  <span>Fikr bildirish</span>
                  <BsChevronRight />
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Main