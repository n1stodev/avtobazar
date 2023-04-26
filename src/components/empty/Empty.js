import React from 'react'
import './Empty.css'

function Empty({ title, url, desc }) {
    return (
        <div className='empty container'>
            <img src={url} width={120} alt="" />
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}

export default Empty