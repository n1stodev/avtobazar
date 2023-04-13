import React, { useState } from "react";
import { PRODUCTS } from "../../static";
import "./Liked.css";
import { BsHeart } from "react-icons/bs";

function Liked() {
    const [yuk, setYuk] = useState(PRODUCTS[0]);
    const [mashina, setMashina] = useState(PRODUCTS[1]);
    const [motot, setMotot] = useState(PRODUCTS[2]);
   
     const handleYuk = (postId) => {
       const postIndex = yuk.findIndex(post => post.id === postId);
       const updatedPosts = [...yuk];
       if (!yuk[postIndex].liked) {
        const updatedPosts = [...yuk];
        updatedPosts.splice(postIndex, 1);
        setYuk(updatedPosts);
      } else {
        const updatedPosts = [...yuk];
        updatedPosts[postIndex].liked = !updatedPosts[postIndex].liked;
        setYuk(updatedPosts);
      }
       setYuk(updatedPosts);
     };
   
     const handleMashina = (postId) => {
       const postIndex = mashina.findIndex(post => post.id === postId);
       const updatedPosts = [...mashina];
       if (!mashina[postIndex].liked) {
        const updatedPosts = [...mashina];
        updatedPosts.splice(postIndex, 1);
        setMashina(updatedPosts);
      } else {
        const updatedPosts = [...mashina];
        updatedPosts[postIndex].liked = !updatedPosts[postIndex].liked;
        setMashina(updatedPosts);
      }
       setMashina(updatedPosts);
     };
   
     const handleMotot = (postId) => {
       const postIndex = motot.findIndex(post => post.id === postId);
       const updatedPosts = [...motot];
       if (!motot[postIndex].liked) {
        const updatedPosts = [...motot];
        updatedPosts.splice(postIndex, 1);
        setMotot(updatedPosts);
      } else {
        const updatedPosts = [...motot];
        updatedPosts[postIndex].liked = !updatedPosts[postIndex].liked;
        setMotot(updatedPosts);
      }
       setMotot(updatedPosts);
     };
  return (
    <div className="liked">
      <div className="flex">
        <h2 className="main__productsTitle">Yuk mashinalar</h2>
        {PRODUCTS[0]
          .filter((product) => product.liked === true)
          .map((liked) => {
            return (
              <div className="main__productsCard" key={liked.id}>
                <img src={liked.url} alt="" className="main__pCImg" />
                <h2 className="main__pCTitle">{liked.name}</h2>
                <div className="caca">
                  <h1 className="main__pCPrice">{liked.price} $</h1>
                  <p className="main__pCCategory">{liked.category}</p>
                </div>
                <button className={liked.liked ? 'main__pCLikedTrue' : 'main__pCLiked'} onClick={() => handleYuk(liked.id)}><BsHeart /></button>
              </div>
            );
          })}
          {PRODUCTS[0].every((post) => !post.liked) && (
            <h3>Yuk mashinalarda yoqtirilganlar yo'q</h3>
          )}
        <h2 className="main__productsTitle">Yengil mashinalar</h2>
        {PRODUCTS[1]
          .filter((product) => product.liked === true)
          .map((liked) => {
            return (
              <div className="main__productsCard" key={liked.id}>
                <img src={liked.url} alt="" className="main__pCImg" />
                <h2 className="main__pCTitle">{liked.name}</h2>
                <div className="caca">
                  <h1 className="main__pCPrice">{liked.price} $</h1>
                  <p className="main__pCCategory">{liked.category}</p>
                </div>
                <button className={liked.liked ? 'main__pCLikedTrue' : 'main__pCLiked'} onClick={() => handleMashina(liked.id)}><BsHeart /></button>
              </div>
            );
          })}
          {PRODUCTS[1].every((post) => !post.liked) && (
            <h3>Yengil mashinalarda yoqtirilganlar yo'q</h3>
          )}
        <h2 className="main__productsTitle">Mototsikllar</h2>
        {PRODUCTS[2]
          .filter((product) => product.liked === true)
          .map((liked) => {
            return (
              <div className="main__productsCard" key={liked.id}>
                <img src={liked.url} alt="" className="main__pCImg" />
                <h2 className="main__pCTitle">{liked.name}</h2>
                <div className="caca">
                  <h1 className="main__pCPrice">{liked.price} $</h1>
                  <p className="main__pCCategory">{liked.category}</p>
                </div>
                <button className={liked.liked ? 'main__pCLikedTrue' : 'main__pCLiked'} onClick={() => handleMotot(liked.id)}><BsHeart /></button>
              </div>
            );
          })}
          {PRODUCTS[2].every((post) => !post.liked) && (
            <h3>Mototsikllarda yoqtirilganlar yo'q</h3>
          )}
      </div>
    </div>
  );
}

export default Liked;
