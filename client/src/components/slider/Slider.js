import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { CAROUSEL } from '../../static'
import './Slider.css'

function Slider() {
    const [curInx, setCurInx] = useState(0)
    const prevSlide = () => {
        const isFirstSlide = curInx === 0
        const newInx = isFirstSlide ? CAROUSEL.length - 1 : curInx - 1
        setCurInx(newInx)
    }

    const nextSlide = () => {
        const isLastSlide = curInx === CAROUSEL.length - 1
        const newInx = isLastSlide ? 0 : curInx + 1
        setCurInx(newInx)
    }
    return (
        <div className='carousel'>
            <div className="container">
                <div className="carousel__item" style={{ background: `url(${CAROUSEL[curInx]}) no-repeat center/cover` }}></div>
                <button className="carousel__btn carousel__btn1" onClick={() => prevSlide()}><BsChevronCompactLeft /></button>
                <button className="carousel__btn carousel__btn2" onClick={() => nextSlide()}><BsChevronCompactRight /></button>
            </div>
        </div>
    )
}

export default Slider