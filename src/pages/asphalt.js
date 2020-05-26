import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/asphalt2.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Asphalt</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Asphalt</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>We offer a variety of services for your asphalt driveway such as: Asphalt sealing, Patching, Ramps, Oil stain removal, pressure washing, gum removal, and other customized services to meet your needs </p>
                    <h4>Why Should I Seal My Asphalt Driveway?</h4>
                    
                    <p>As time goes by, that blacktop is exposed to many factors that do their best to dry out and damage blacktop: sun, rain, freeze/thaw cycles, de-icing salts, gas, oil, traffic, etc. All of these elements will gradually break down the asphalt binder or ‘glue’ that holds the aggregate together. With the continuous loss of this ‘glue’, the aggregates in the top layer begins to ravel and will show surface cracks. If these cracks are not properly filled, and the pavement is not sealed in time the water will penetrate the sub-base causing more cracks, ruts, potholes and eventual failure of the blacktop.</p>
                    <p>Just like a high quality paint job, prepping the blacktop is crucial — edging, cleaning and repairing all damage first before applying the protective layer or ‘shield’ of sealer is critical to ensuring a longer lasting and aesthetically pleasing blacktop.</p>
                    <p>Our goal is to beautify and extend the life of the asphalt. Paving is not only expensive but uses a lot of our natural resources – another reason it is important to sustain your blacktop investment.</p>
                    <a href="/get-a-quote" className="button next scrolly">GET A QUOTE</a>
                </div>
            </section>
        </div>
    </Layout>
)

export default Generic