import React from 'react'
import './Heero.css'
import heroImg from '../assets/img1.jpg'
import sravan from '../assets/sravan.jpg'

function Heero() {
    return (
        <div className='hero'>
            <div className='hero-head'>
                <h1>Welcome to <br />V4 memories.</h1>
                <h2><i>where love is our lens and memories are our masterpiece.</i></h2>

                <p>
                    Let us capture the essence of your special day with passion and precision. Welcome to a world where your love story unfolds in every frame.
                </p>
                <button>Contact Us</button>
            </div>
            <div className="hero-img">
                <img src={sravan} alt="" />

            </div>

        </div>
    )
}

export default Heero
