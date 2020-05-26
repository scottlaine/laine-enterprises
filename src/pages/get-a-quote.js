import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Contact from '../components/Contact'


const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Get A Quote</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Get A Quote</h1>
                    </header>
                <p>Leave your name, email and a small message about your driveway or what questions you may have about it. <br></br> You can also call or text. </p>

          <Contact />
                </div>
            </section>
        </div>
    </Layout>
)

export default Generic