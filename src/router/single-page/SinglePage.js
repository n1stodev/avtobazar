import React from 'react'
import { useParams } from 'react-router-dom'
import './SinglePage.css'
import { useLocation } from 'react-router-dom'

const SinglePage = () => {
    const car = useLocation().state
    return (
        <div className='single-page container'>
            <div className="single-page__images">
                <img src={`https://avtobazar-backend.onrender.com/imgs/${car.image}`} alt={car.title} />
            </div>
            <div className="single-page__contents">
                <h1 className="single-page__content-title">{car.title}</h1>
                <p className="single-page__content-sha">Sotuvchi: <span>{'Tojiakhmedov Nurillo'}</span></p>
                <p className="single-page__content-sha">Mashina: <span>{car.title}</span></p>
                <hr />
                <div className="single-page__content-details">
                    <h4 className="single-page__content-detailsTitle">Mashina ma'lumotlari</h4>
                    <ul className="single-page__content-detailsCol">
                        <li className="single-page__content-detailsItem"> Yurgan: <span>{car.distance} km</span></li>
                        <li className="single-page__content-detailsItem"> Rangi: <span>{car.color}</span></li>
                        <li className="single-page__content-detailsItem"> Variantga: <span>{car.variant}</span></li>
                        <li className="single-page__content-detailsItem"> Gaz balon: <span>{"Temir"}</span></li>
                        <li className="single-page__content-detailsItem"> Yili: <span>{car.year}-yil</span></li>
                        <li className="single-page__content-detailsItem"> Positsiya: <span>{4}-positsiya</span></li>
                    </ul>
                </div>
                <p className="single-page__content-price">Narx: <span>{car.price}$</span></p>
                <div className="single-page__content-btns">
                    <button className="single-page__content-btn green">Telefon qilish</button>
                    <button className="single-page__content-btn yellow">SMS yozish</button>
                    {/* <Link to={`product-comments/${id}`}><button className="single-page__content-btn">Fikr bildirish</button></Link> */}
                </div>
                <p className="single-page__content-desc">
                    <span>Tavsif:</span> <br />
                    {
                        car.description
                    }
                </p>
            </div>
        </div>
    )
}

export default SinglePage