import React from 'react'
import bg from '../../assets/images/comment__bg.jpg'
import './Comments.css'

function Comments() {
    return (
        <div className='comments container'>
            <img src={bg} alt="" />
            <div className="comments__body">
                <div className="comments__content">
                    <div className="comments__in">
                        <div className="comments__in-body">
                            <p>{'Salom qanchekan?'}</p>
                            <span>{'00: 41'}</span>
                        </div>
                        <div className="comments__in-user-img">F</div>
                    </div>
                    <div className="comments__in">
                        <div className="comments__in-body">
                            <p>{'Assalomu alaykum oka yaxshimisiz tekinga berasizmi?'}</p>
                            <span>{'00: 41'}</span>
                        </div>
                        <div className="comments__in-user-img">F</div>
                    </div>
                </div>
                <form className="comments__form">
                    <input type="text" className='comments__form-inp' />
                    <button type='submit' className="comments__form-btn">Yuborish</button>
                </form>
            </div>
        </div>
    )
}

export default Comments