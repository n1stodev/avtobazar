import React from 'react'
import { useParams } from 'react-router-dom'
import POST_API from '../../static'
import './SinglePage.css'

const SinglePage = () => {
    const params = useParams()

    const car = POST_API.find(car => car.id === +(params.id))
    return (
        <div className='single-page container'>
            <div className="single-page__images">
                <img src={car.img} alt={'saSA'} />
            </div>
            <div className="single-page__contents">
                <h1 className="single-page__content-title">{'Lorem ipsum dolor Lorem ipsum dolor'}</h1>
                <p className="single-page__content-sha">Sotuvchi: <span>{'Tojiakhmedov Nurillo'}</span></p>
                <p className="single-page__content-sha">Mashina: <span>{car.title}</span></p>
                <hr />
                <div className="single-page__content-details">
                    <h4 className="single-page__content-detailsTitle">Mashina ma'lumotlari</h4>
                    <ul className="single-page__content-detailsCol">
                        <li className="single-page__content-detailsItem"> Yurgan: <span>{200000} km</span></li>
                        <li className="single-page__content-detailsItem"> Rangi: <span>{'Qora'}</span></li>
                        <li className="single-page__content-detailsItem"> Variantga: <span>{"Yo'q"}</span></li>
                        <li className="single-page__content-detailsItem"> Gaz balon: <span>{"Temir"}</span></li>
                        <li className="single-page__content-detailsItem"> Yili: <span>{2020}-yil</span></li>
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
                        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis officiis nemo aliquid, vero dolorem eveniet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis officiis nemo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis officiis nemo aliquid, vero dolorem eveniet itaque deleniti ea! Eveniet, minus. aliquid, vero dolorem eveniet itaque deleniti ea! Eveniet, minus. itaque deleniti ea! Eveniet, minus.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis officiis nemo aliquid, vero dolorem eveniet itaque deleniti ea! Eveniet, minus.'
                    }
                </p>
            </div>
        </div>
    )
}

export default SinglePage