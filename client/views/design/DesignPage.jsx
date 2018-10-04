import * as React from 'react'
import { Link } from 'react-router-dom'
import './DesignPage.scss'
import image1 from '../../assets/images/services-main.png'
import image2 from '../../assets/images/half-1.png'
import image3 from '../../assets/images/half-2.png'
import image4 from '../../assets/images/full.png'
import servicesOval from './images/services_oval-black.png'

class DesignPage extends React.Component {
    render() {
	    return (
	        <div className='Landing_Container'>
	            {/* put landing page content here */}
                <section className='insight_top-text-cont containerFluid bleed-right'>
                    <div className='row'>
                        <div className='colXs6'>
                            <h1 id='about' className='main_about-label'>Services</h1>
                            <hr className='hr-ws'/>
                            <h2 className='services_subhead'>
                              Design
                            </h2>
                            <p className='services_main-body'>
                              We are founded on the idea that the best design always arises from collaboration. Beyond our core team, we have a global network of specialists.
                            </p>
                        </div>
                        <div className='colXs6 services_main-img-cont'>
                            <img src={image1} className='services_main-img'/>
                        </div>
                    </div>
                </section>
                <section className='containerFluid full-bleed'>
                    <div className='colXs12'>
                        <h3 className='text-section'>We are founded on the idea that the best design always arises from collaboration. Beyond our core team, we have a global network of specialists which allows us to bring new perspectives to complex problems.</h3>
                    </div>
                </section>
                <section className='containerFluid full-bleed'>
                    <div className='row'>
                        <div className='colXs6'>
                            <img className='service_main-img' src={image2}/>
                        </div>
                        <div className='colXs6'>
                            <img className='service_main-img' src={image3}/>
                        </div>
                    </div>
                </section>
                <section className='containerFluid full-bleed'>
                    <div className='colXs12'>
                        <h3 className='text-section'>We are founded on the idea that the best design always arises from collaboration. Beyond our core team, we have a global network of specialists which allows us to bring new perspectives to complex problems.</h3>
                    </div>
                </section>
                <section className='containerFluid full-bleed'>
                    <div className='row full-bleed'>
                        <div className='colXs6 no-flow full-bleed'>
                            <img className='service_main-img' src={image2}/>
                        </div>
                        <div className='colXs6 full-bleed text-half-cont'>
                            <h3 className='text-section-alt'>We are founded on the idea that the best design always arises from collaboration. Beyond our core team, we have a global network of specialists which allows us to bring new perspectives to complex problems.</h3>
                        </div>
                    </div>
                </section>
                <img className='service_main-img neg-top' src={image4}/>
                <section className='services-text-cont containerFluid'>
                    <div className='row'>
                        <div className='colMd4 colMdOffset0 colXs10 colXsOffset1'>
                            <h1 className='main_about-label'>Other Services & Case Studies</h1>
                            <hr className='hr'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='colMd5 colMdOffset0 colXs10 colXsOffset1'>
                            <h2 className='main_about-subhead'>
                              Insight
                            </h2>
                            <p className='main_body'>
                              Our integrated approach to design research takes your team along on the journey and generates strategic and tactical outputs that drive meaningful innovation.
                            </p>
                        </div>
                        <div className='colMd5 colMdOffset2 colX10 colXsOffset1'>
                            <Link to='/insight'> <img className='services-oval' src={servicesOval}/></Link>
                        </div>
                    </div>
                    <div className='row services-spacer'>
                        <div className='colMd5 colMdOffset0 colXs10 colXsOffset1'>
                            <hr className='hr'/>
                            <h2 className='main_about-subhead'>
                              Innovation
                            </h2>
                            <p className='main_body'>
                              Our igenerative and evaluative tools help teams and stakeholders push human-centered innovation in the organization and take that next evolutionary leap.
                            </p>
                        </div>
                        <div className='colMd5 colMdOffset2 colX10 colXsOffset1'>
                            <Link to='/innovation'> <img className='services-oval' src={servicesOval}/></Link>
                        </div>
                    </div>
                </section>
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
	        </div>
	    )
    }
}

export default DesignPage
