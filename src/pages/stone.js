import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic12 from '../assets/images/stone2.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Stone</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Stone</h1>
                    </header>
                    <span className="image main"><img src={pic12} alt="" /></span>
                    <p>We offer a variety of services for your stone driveway such as: Interlock sealing, pattern concrete sealing, interlock cleaning, interlock repairs, interlock installation, pressure washing, gum removal, 
          stamped and pattern concrete sealing, concrete washing and cleaning, flagstone washing and cleaning, 
          flagstone sealing, and other customized services to meet your needs. </p>

                    <h4>Why Should I Seal My Stone Driveway?</h4>
                    <p>Whether you’re having a beautiful new concrete driveway poured or you already have one, it’s important that you protect and maintain your investment. A good sealer will keep your driveway looking great for many years, or rejuvenate an existing surface. Sealing a concrete driveway can be compared to waxing your car, wearing sunscreen or spraying Scotchgard™ on your favourite shirt. A sealer will improve your driveway’s appearance, keep UV rays from causing it to fade and protect it from stains.</p>
                    <p>Whether your driveway is stamped or exposed concrete, sealing after the concrete has cured, and every few years after, is recommended as part of the maintenance routine. A sealed concrete driveway will have a rich color and glossy sheen if desired. Sealers are available in many different gloss levels, ranging from no-gloss to high-gloss. Additionally, you can apply a slip resistant sealer if you driveway is sloped (note: slip resistance is extremely beneficial on pool decks, stairs and sidewalks, wherever you may walk when it is wet).</p>
                    <p>Stain protection is another benefit of sealing a concrete driveway. Your driveway will be subjected to many things in the great outdoors that can leave unsightly stains on the surface – leaves, dirt, fertilizer, pet urine, oil, tire tracks and much more. The right sealer will aid in keeping all of the above from penetrating the surface of the concrete and leaving an unsightly stain.</p>
                    <p>A third reason why you should seal your driveway is that it will reduce the chance of freeze thaw damage. Freeze thaw damage can cause cracks or surface flaking and is caused by water penetrating the surface of the concrete and then expanding as it freezes. A sealer will help to keep water from sinking into the driveway.</p>
                    <p>How do you know when it’s time to seal your concrete? Water will bead on the surface if your sealer is doing its job. When this no longer happens it is time to reseal! High traffic areas will likely need resealing on a frequent basis.</p>
                    <a href="/get-a-quote" className="button next scrolly">GET A QUOTE</a>
                </div>
            </section>
        </div>
    </Layout>
)

export default Generic