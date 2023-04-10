import React from 'react'
import './SignUp.css'

function SignUp() {
    return (
        <div className="sign">
            <div className='sign__form'>
                <h2 className="sign__title">RO'YHATDAN O'TISH</h2>
                <form action="">
                    <input type="text" placeholder='Ismingiz...' required />
                    <input type="tel" placeholder='Telefon raqamingiz' required />
                    <button type='submit' className="sign__btn">RO'YHATDAN O'TISH</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp