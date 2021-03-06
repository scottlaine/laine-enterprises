import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form  name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <div className="field half first">
                        <label htmlFor="name" >Name*</label>
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field half first">
                        <label htmlFor="phone">Phone Number*</label>
                        <input type="text" name="phone" id="phone" required/>
                    </div>
                    <div className="field half">
                        <label htmlFor="phone">Address</label>
                        <input type="text" name="address" id="address" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message*</label>
                        <textarea name="message" id="message" rows="6" required></textarea>
                    </div>
               
                   
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                    <input type="hidden" name="form-name" value="contact" />
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:mlaineenterprises@gmail.com">MLaineEnterprises@gmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Call or Text</h3>
                        <span>(416) 817-7938 </span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Location</h3>
                        <span>Greater Toronto Area including North York, Vaughan, Richmond Hill, Thornhill, Markham, Aurora, Newmarket and the surrounding areas</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
