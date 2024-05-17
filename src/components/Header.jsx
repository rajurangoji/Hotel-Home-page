import React from 'react'
import logo from '../assets/logo.png'
import './Header.css'
function Header() {
    return (
        <div className='header'>
            {/* <div className="num">
                Call : +91 85199 60366
            </div> */}
            <button>Call : +91 85199 60366</button>
            <img src={logo} alt="" />
            <button>Book a Table</button>

        </div>
    )
}

export default Header
