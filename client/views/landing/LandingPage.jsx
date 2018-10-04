import * as React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.scss'
import image1 from './images/TMY.jpg'
import image2 from './images/steps.jpg'

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
                            <h2 className='main_about-subhead'>
                              A design agency with a serious passion for collaboration.
                            </h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='colMd5 colMdOffset0 colXs10 colXsOffset1'>
                            <p id='about' className='main_body'>
                              From our platform of world-class insight, we help companies innovate products and services that deeply connect with people.<br/><br/>We create meaningful experiences with lasting value.<br/><strong>Better. Not more.</strong>
                            </p>
                        </div>
                    </div>
                </section>
                <div className='main_tbd-cont'>
                    <h1 className='main_tbd'>Artwork 2 TBD</h1>
                </div>
                <section className='main_team-text-cont containerFluid'>
                    <div className='row'>
                        <div className='colMd4 colMdOffset0 colXs10 colXsOffset1'>
                            <h1 id='team' className='main_about-label'>Team</h1>
                            <hr className='hr'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='colMd5 colMdOffset0 colXs10 colXsOffset1'>
                            <h2 id='about' className='main_about-subhead'>
                              Inquisitive by nature, collaborative by design.
                            </h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='colMd5 colMdOffset0 colXs10 colXsOffset1'>
                            <p id='team' className='main_body'>
                              We are founded on the idea that the best design always arises from collaboration. Beyond our core team, we have a global network of specialists which allows us to bring new perspectives to complex problems.
                            </p>
                        </div>
                    </div>
                </section>
                <img className='main_image-1' src={image2} alt='Steps to great creative collaboration.'/>
                <section className='main_contact-text-cont containerFluid'>
                    <div className='row'>
                        <div className='colMd4 colMdOffset0 colXs10 colXsOffset1'>
                            <h1 id='contact' className='main_about-label'>Contact Us</h1>
                            <hr className='hr-w'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='colMd5 colMdOffset0 colXs10 colXsOffset1'>
                            <p id='about' className='main_body'>
                              We would love to hear about what you and your team are working on at the moment.<br/>Say<a href='mailto:hello@evolvecollaborative.com'><strong>hello@evolvecollaborative.com</strong></a> or follow us <strong>@evolvecollab</strong><br/><br/>To learn more about career opportunities, collaborations, and internships, please contact <a href='mailto:work@evolvecollaborative.com'><strong>work@evolvecollaborative.com</strong></a><br/><br/>We are located at <strong>222 NE Oregon Street, Suite 214 Portland, OR 97232</strong>
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
