import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../../static'
import { BsHeart } from 'react-icons/bs'
// import img1 from '../../assets/images/page__link1.jpg'
// import img2 from '../../assets/images/page__link2.jpg'
// import img3 from '../../assets/images/page__link3.jpg'

function Main() {
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
          <h2 className="main__productsTitle">Yuk mashinalar</h2>
          {
            PRODUCTS[0]?.map((e, inx) => (
              <div className="main__productsCard" key={inx}>
                <img src={e.url} alt="" className='main__pCImg' />
                <h2 className='main__pCTitle'>{e.name}</h2>
                <div className='caca'>
                  <h1 className='main__pCPrice'>{e.price} $</h1>
                  <p className='main__pCCategory'>{e.category}</p>
                </div>
                <div className="main__pCBtns">
                  <button className="main__pCLiked"><BsHeart /></button>
                  <button className="main__pCBtn">Batafsil</button>
                </div>
              </div>
            ))
          }
          <h2 className="main__productsTitle">Yengil mashinalar</h2>
          {
            PRODUCTS[1]?.map((e, inx) => (
              <div className="main__productsCard" key={inx}>
                <img src={e.url} alt="" className='main__pCImg' />
                <h2 className='main__pCTitle'>{e.name}</h2>
                <div className='caca'>
                  <h1 className='main__pCPrice'>{e.price} $</h1>
                  <p className='main__pCCategory'>{e.category}</p>
                </div>
                <div className="main__pCBtns">
                  <button className="main__pCLiked"><BsHeart /></button>
                  <button className="main__pCBtn">Batafsil</button>
                </div>
              </div>
            ))
          }
          <h2 className="main__productsTitle">Mototsikllar</h2>
          {
            PRODUCTS[2]?.map((e, inx) => (
              <div className="main__productsCard" key={inx}>
                <img src={e.url} alt="" className='main__pCImg' />
                <h2 className='main__pCTitle'>{e.name}</h2>
                <div className='caca'>
                  <h1 className='main__pCPrice'>{e.price} $</h1>
                  <p className='main__pCCategory'>{e.category}</p>
                </div>
                <div className="main__pCBtns">
                  <button className="main__pCLiked"><BsHeart /></button>
                  <button className="main__pCBtn">Batafsil</button>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Main