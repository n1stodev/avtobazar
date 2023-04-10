import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'
import { FiMessageCircle, FiHeart, FiUser } from 'react-icons/fi'
import { FaTruckMoving, FaMotorcycle, FaCarSide, FaBars } from 'react-icons/fa'
import { BsXLg } from 'react-icons/bs'

function Navbar() {
    const [open, setOpen] = useState(false)
    const [nav, setNav] = useState(false)

    let navRef = useRef()

    useEffect(() => {
        let handler = e => {
            if (!navRef.current.contains(e.target)) {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    }, [])


    return (
        <div className='navbar'>
            <div className="container">
                <Link to='/'><h2 className="nav__logo">Auto<span>Bazar</span> </h2></Link>
                <div className={`nav__collection ${nav ? 'active' : 'unactive'}`}>
                    <button className="nav__btn" onClick={() => setOpen(!open)}>Katalog</button>
                    <ul className="nav__col">
                        <NavLink to='/'>
                            <FiMessageCircle />
                            <span>Xabarlar</span>
                        </NavLink>
                        <NavLink to='/'>
                            <FiHeart />
                            <span>Yoqtirilganlar</span>
                        </NavLink>
                        <NavLink to='/'>
                            <FiUser />
                            <span>Kirish</span>
                        </NavLink>
                    </ul>
                </div>
                <div className={`nav__dropdown ${open ? 'active' : 'unactive'}`} ref={navRef}>
                    <h2>Katalog</h2>
                    <Link to='/' classsName='nav__dropdownItem'>
                        <FaCarSide />
                        <span>Yengil mashinalar</span>
                    </Link>
                    <Link to='/' classsName='nav__dropdownItem'>
                        <FaMotorcycle />
                        <span>Mototsikllar</span>
                    </Link>
                    <Link to='/' classsName='nav__dropdownItem'>
                        <FaTruckMoving />
                        <span>Yuk mashinalar</span>
                    </Link>
                </div>
                <button onClick={() => setNav(!nav)} className="nav__btn">{nav ? <FaBars /> : <BsXLg />}</button>
            </div>
        </div>
    )
}

export default Navbar