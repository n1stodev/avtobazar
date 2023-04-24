import React, { useState } from "react";
import Cars from "../../static";
import "./Liked.css";
import { Link } from 'react-router-dom'
import { BsHeartFill, BsChevronRight } from "react-icons/bs";

function Liked() {
  const [car, setCar] = useState(Cars);

  const handleCar = function (postId) {
    const postIndex = car.findIndex(post => post.id === postId);
    const updatedPosts = [...car];
    updatedPosts[postIndex].liked = false;
    setCar(updatedPosts);
  };
  return (
    <div className="liked container">
      <h2 className="main__productsTitle">Tanlanganlar</h2>
      <div className="liked__posts">
        {Cars
          .filter((product) => (product.liked === true))
          .map(liked =>
            <div className="main__productsCard" key={liked.id}>
              <img src={liked.img} className="main__pCImg" />
              <h2 className="main__pCTitle">{liked.name}</h2>
              <div className="caca">
                <h1 className="main__pCPrice">{liked.price} $</h1>
                <p className="main__pCCategory">{liked.category}</p>
              </div>
              <div className="main__pCBtns">
                <button className={'main__pCLikedTrue'} onClick={() => handleCar(liked.id)}><BsHeartFill /></button>
                <button className='main__pCBtn'><Link to={`/products/${liked.id}`}>Batafsil</Link></button>
              </div>
              <div className="main__pc-comment">
                <span>Fikr bildirish</span>
                <BsChevronRight />
              </div>
            </div>
          )}
        {Cars.every((post) => !post.liked) && (
          <h3>Tanlanganlar yo'q</h3>
        )}
      </div>
    </div>
  );
}

export default Liked;
