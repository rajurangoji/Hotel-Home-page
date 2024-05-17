import React from 'react'
import Navbar from '../components/Navbar'
import Heero from '../components/Heero'
import '../App.css'
import AboutUs from '../components/AboutUs'
import Menu from '../components/Menu'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'


function HomePage() {
    return (
        <div className='Homepage'>
            <Header />
            <Navbar />
            <Heero />
            <AboutUs />
            <Menu/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default HomePage
