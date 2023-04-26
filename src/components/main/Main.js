import React, { useState, useEffect } from 'react'
import './Main.css'
import { Link } from 'react-router-dom'
import { POST_API } from '../../static'
import { BsHeart } from 'react-icons/bs'

function Main() {
  const [Car, setCar] = useState([])

  useEffect(() => {
    fetch(POST_API)
      .then((response) => response.json())
      .then((car) => setCar(car))
      .catch((err) => console.log(err));
  }, []);

  console.log(Car)
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
            Car?.map((e) => (
              <div className="main__productsCard" key={e._id}>
                <Link to={`/products/${e._id}`}>
                  <img src={`https://avtobazar-backend.onrender.com/imgs/${e.image}`} alt="" className='main__pCImg' />
                </Link>
                <h2 className='main__pCTitle'>{e.title}</h2>
                <div className='caca'>
                  <h1 className='main__pCPrice'>{e.price} $</h1>
                  <p className='main__pCCategory'>{e.category}</p>
                </div>
                <div className="main__pCBtns">
                  <button className='main__pCLiked'><BsHeart /></button>
                  <Link to={`/products/${e._id}`} className={"main__pCBtn"}><button>Batafsil</button></Link>
                </div>
                <Link to={`product-comments/${e._id}`} className="main__pc-comment">
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