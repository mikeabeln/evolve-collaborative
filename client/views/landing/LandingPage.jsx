import * as React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.scss'
import image1 from './images/TMY.jpg'
import image2 from './images/steps.jpg'
import image3 from './images/map.png'

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
                <section className='main_services-text-cont containerFluid'>
                    <div className='row'>
                        <div className='colMd4 colMdOffset0 colXs10 colXsOffset1'>
                            <h1 className='main_about-label'>Services</h1>
                            <hr className='hr'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='colMd5 colMdOffset0 colXs10 colXsOffset1'>
                            <h2 id='services' className='main_about-subhead'>
                              Insight
                            </h2>
                            <p className='main_body'>
                              Our integrated approach to design research takes your team along on the journey and generates strategic and tactical outputs that drive meaningful innovation.
                            </p>
                        </div>
                        <div className='colMd5 colMdOffset2 colX10 colXsOffset1'>
                            <p>image</p>
                        </div>
                    </div>
                    <div className='row services-spacer'>
                        <div className='colMd5 colMdOffset0 colX10 colXsOffset1 services-image-large'>
                            <p>image</p>
                        </div>
                        <div className='colMd5 colMdOffset2 colXs10 colXsOffset1'>
                            <hr className='hr'/>
                            <h2 id='services' className='main_about-subhead'>
                              Design
                            </h2>
                            <p className='main_body'>
                              From physical, to digital, to service, across business categories and in pursuit of new ones, we love – and live – to create design that people connect with.
                            </p>
                        </div>
                        <div className='colMd5 colMdOffset0 colX10 colXsOffset1 services-image-small'>
                            <p>image</p>
                        </div>
                    </div>
                    <div className='row services-spacer'>
                        <div className='colMd5 colMdOffset0 colXs10 colXsOffset1'>
                            <hr className='hr'/>
                            <h2 id='services' className='main_about-subhead'>
                              Innovation
                            </h2>
                            <p className='main_body'>
                              Our igenerative and evaluative tools help teams and stakeholders push human-centered innovation in the organization and take that next evolutionary leap.
                            </p>
                        </div>
                        <div className='colMd5 colMdOffset2 colX10 colXsOffset1'>
                            <p>image</p>
                        </div>
                    </div>
                </section>
                <div className='main_tbd-cont'>
                    <h1 className='main_tbd'>Artwork 3 TBD</h1>
                </div>
                <section className='main_team-text-cont containerFluid'>
                    <div className='row'>
                        <div className='colMd4 colMdOffset0 colXs10 colXsOffset1'>
                            <h1 className='main_about-label'>Team</h1>
                            <hr className='hr'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='colMd5 colMdOffset0 colXs10 colXsOffset1'>
                            <h2 id='team' className='main_about-subhead'>
                              Inquisitive by nature, collaborative by design.
                            </h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='colMd5 colMdOffset0 colXs10 colXsOffset1'>
                            <p className='main_body'>
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
                              We would love to hear about what you and your team are working on at the moment.<br/>
                              Say <a className='contact_mail-link' href='mailto:hello@evolvecollaborative.com'>
                                    <strong>hello@evolvecollaborative.com</strong>
                                </a> or follow us <a className='contact_mail-link' target='_blank' href='https://www.instagram.com/evolvecollab/'>
                                    <strong>@evolvecollab</strong>
                                </a><br/><br/>To learn more about career opportunities, collaborations, and internships, please contact
                                <a className='contact_mail-link'href='mailto:work@evolvecollaborative.com'>
                                    <strong> work@evolvecollaborative.com</strong>
                                </a><br/><br/>
                                We are located at<br/>
                                <strong className='contact_address'>222 NE Oregon Street, Suite 214 Portland, OR 97232</strong>
                            </p>
                        </div>
                    </div>
                </section>
                <img className='main_image-1' src={image3} alt='Map of portland showing our location visually.'/>
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
