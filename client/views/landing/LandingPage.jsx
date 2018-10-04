import * as React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.scss'
import image1 from './images/TMY.jpg'

class LandingPage extends React.Component {
    render() {
	    return (
	        <div className='Landing_Container'>
	            {/* put landing page content here */}
                <img className='main_image-1' src={image1} alt='Thinky Thinky Makey Makey' />
                <section className='main_about-text-cont containerFluid'>
                    <div className='row'>
                        <div className='colMd4 colMdOffset0 colXs10 colXsOffset1'>
                            <h1 id='about' className='main_about-label'>About</h1>
                            <hr className='hr'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='colMd5 colMdOffset0 colXs10 colXsOffset1'>
                            <h2 id='about' className='main_about-subhead'>
                              A design agency with a serious passion for collaboration.
                            </h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='colMd5 colMdOffset0 colXs10 colXsOffset1'>
                            <p id='about' className='main_about-body'>
                              From our platform of world-class insight, we help companies innovate products and services that deeply connect with people.<br/><br/>We create meaningful experiences with lasting value.<br/><strong>Better. Not more.</strong>
                            </p>
                        </div>
                    </div>
                </section>
	            <Link to='/404'>404</Link>
	            <Link to='/about'>About</Link>
	            <Link to='/login'>Login</Link>
	            <Link to='/signup'>Signup</Link>
                <p id='something'>something</p>
	        </div>
	    )
    }
}

export default LandingPage
