import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'



const Elements = (props) => (
    <Layout>
        <Helmet>
            <title>About Us</title>
            <meta name="description" content="Elements Page" />
        </Helmet>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About Us</h1>
                    </header>

                   
                    <p>For over 35 years Laine Enterprises has serviced the Greater Toronto Area including North York, Vaughan, Richmond Hill, Thornhill, Markham, Aurora, Newmarket and the surrounding areas.
                    We take pride in our reputation as a driveway sealing company, and we stand behind all of our work. We are a company that listens to our customers and takes the time to understand their intent and vision about each project.

                    </p>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <h3>Our Product</h3>
                            <p>Laine Enterprises is proud and committed to provide our customers with only the best products on the market. The sealer that we have been using for the last 30+ years has shown tremendous results to the extent where we are proud to provide all our customers with warranties on all the jobs completed.
Many companies on the market tend to water down their sealer in order to cut cost and maximize their profits. We believes in quality over quantity.</p>
                        </div>
                        <div className="col-6">
                            <h3>Our Style</h3>
                            <p>Our highly experienced team will ensure that after the sealer is applied on your driveway, it will make you say, “Wow” and ensure that the driveway looks brand new. All projects get examined upon completion to ensure that the highest customer satisfaction is achieved.  Over the years, Laine Enterprises has done over 10,000 driveways. All with satisfied our customers.</p>
                        </div>
                        <div className="col-4">
                            <h3>Our Promise</h3>
                            <p>We pride ourselves on our reputation within the industry and secure the majority of our work through repeat business and personal recommendation. All our work is guaranteed so you get the security of knowing that the project will be completed to your satisfaction.</p>
                        </div>
                        <div className="col-4">
                            <h3>Our Customers</h3>
                            <p>We pride ourselves on establishing long lasting relationships with property owners and property managers by providing the best possible cost effective solutions for all their asphalt and stone sealing needs. </p>
                        </div>
                        <div className="col-4">
                            <h3>Our Work</h3>
                            <p>We are proud of our work and are happy to show examples of completed projects along with client references.</p>
                        </div>
                        <a href="/get-a-quote" className="button next scrolly">GET A QUOTE</a>
                    </div>

                   
                    </div>
                   
               
            </section>

        </div>

    </Layout>
)

export default Elements