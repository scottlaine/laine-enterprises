import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Home"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Asphalt</h3>
                                <p>See how we can help your asphalt driveway</p>
                            </header>
                            <Link to="/asphalt" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Stone</h3>
                                <p>Let us transform your stone driveways back to new</p>
                            </header>
                            <Link to="/stone" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>About Us</h3>
                                <p>How we got to where we are today</p>
                            </header>
                            <Link to="/about-us" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Get A Quote</h3>
                                <p>Call, text or message us and we will get back to you as fast as we can!</p>
                            </header>
                            <Link to="/get-a-quote" className="link primary"></Link>
                        </article>
                        
                    </section>
                    <section id="two">
                    
                        <div className="inner">
                        <header className="major">
                            
                                <h2>Testimonials</h2>
                            </header>
                      
                        <div className="grid-wrapper">
                        
                    <div className="col-4">
                    
                           
                            <blockquote><b>Jane</b> <br></br>"I dont think my driveway has ever looked this good before! The job was done very neat and the repairs are almost unnoticeable." </blockquote>
                        </div>
                        <div className="col-4">
                            
                            <blockquote><b>Adam</b> <br></br>"I have been a customer of Laine Enterprises for years and they always do a great job. My driveway does not seem to age."</blockquote>
                        </div>
                        <div className="col-4">
                          
                            <blockquote><b>Trish</b> <br></br>"I love the way my driveway looks and the people were so helpfull and friendly!" </blockquote>
                        </div>
                        </div>
                        <br></br>
                            <header className="major">
                            
                                <h2>Why Should I Seal My Driveway?</h2>
                            </header>
                            <p>Sealing your driveway is the most cost effective and quick way to preserve your driveway from deterioration.
                             In general, applying sealer every 2-3 years will prolong your driveway's overall lifetime. 
                             Contact us today for a free consultation and discover how our professionally trained staff can help.</p>
                            
                            <header className="major">
                                <h2>What We Offer</h2>
                            </header>
                            <p>We offer a variety of excellent quality services for your landscaping and home or commercial cleaning or repair needs including: <br></br>
          Asphalt sealing, Patching, Ramps, Oil stain removal, Interlock sealing, pattern concrete sealing, interlock cleaning, interlock repairs, interlock installation, pressure washing, gum removal, 
          underground parking garage pressure washing, stamped and pattern concrete sealing, concrete washing and cleaning, flagstone washing and cleaning, 
          flagstone sealing, and other customized services to meet your needs.</p>
                            
                            <header className="major">
                                <h2>Why Choose Us?</h2>
                            </header>
                            <p>For over 35 years Laine Enterprises has serviced the Greater Toronto Area including North York, Vaughan, Richmond Hill, Thornhill, Markham, Aurora, Newmarket and the surrounding areas. Our mission is to provide specialized protection and restoration services for all types of customers both residential and commercial using only the highest quality of matirials. 
          We take pride in providing our clients with superior services through our quality equipment and products as well as our technical expertise.
          Customer approval is our highest priority, as we value our clients and are enthusiastic about showing them the difference Years of experience can make.</p>

                            <ul className="actions">
                                <li><Link to="/get-a-quote" className="button next">GET A QUOTE</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex