import React from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../../static'
import './SinglePage.css'
import img1 from '../../assets/images/page__link1.jpg'

function SinglePage() {
    const { id } = useParams()
    const car = PRODUCTS.find(item => item.id === id)
    console.log(car)
    return (
        <div className='single-page container'>
            <div className="single-page__images">
                <img src={car.img} alt="" />
            </div>
            <div className="single-page__contents">
                <h1 className="single-page__content-title">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                <p className="single-page__content-sha">Sotuvchi: <span>{'Tojiakhmedov Nurillo'}</span></p>
                <p className="single-page__content-sha">Mashina: <span>{'Jentra'}</span></p>
                <hr />
                <div className="single-page__content-details">
                    <h4 className="single-page__content-detailsTitle">Mashina ma'lumotlari</h4>
                    <ul className="single-page__content-detailsCol">
                        <li className="single-page__content-detailsItem">- Yurgan: <span>{200000} km</span></li>
                        <li className="single-page__content-detailsItem">- Rangi: <span>{'Qora'}</span></li>
                        <li className="single-page__content-detailsItem">- Variantga: <span>{"Yo'q"}</span></li>
                        <li className="single-page__content-detailsItem">- Gaz balon: <span>{"Temir"}</span></li>
                        <li className="single-page__content-detailsItem">- Yili: <span>{2020}-yil</span></li>
                        <li className="single-page__content-detailsItem">- Positsiya: <span>{4}-positsiya</span></li>
                    </ul>
                </div>
                <p className="single-page__content-price">Narx: <span>{3000}$</span></p>
                <div className="single-page__content-btns">
                    <button className="single-page__content-btn">Telefon qilish</button>
                    <button className="single-page__content-btn">SMS yozish</button>
                    <button className="single-page__content-btn">Fikr bildirish</button>
                </div>
                <p className="single-page__content-desc">
                    <span>Tavsif:</span> <br />
                    {
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis officiis nemo aliquid, vero dolorem eveniet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis officiis nemo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis officiis nemo aliquid, vero dolorem eveniet itaque deleniti ea! Eveniet, minus. aliquid, vero dolorem eveniet itaque deleniti ea! Eveniet, minus. itaque deleniti ea! Eveniet, minus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis officiis nemo aliquid, vero dolorem eveniet itaque deleniti ea! Eveniet, minus.'
                    }
                </p>
            </div>
        </div>
    )
}

export default SinglePage