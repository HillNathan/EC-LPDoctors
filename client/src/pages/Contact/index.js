import React from 'react'
import Header from "../../components/Header"
import PatientNav from "../../components/PatientNav"

import AOS from "aos";
import "aos/dist/aos.css";

import "../../css-stylesheets/style.css"
import "../../css-stylesheets/contact.css"

AOS.init();

function Contact () {
    return (
        <div>
            <Header></Header>
            <PatientNav></PatientNav>

            {/* <!-- // contact form  --> */}
            <div class="container">
                <form class="form-container">
                    <div class="headline"><span>Contact Us</span></div>
                    <div class="form-line success">
                        <input type="text" class="form-input" />
                        <label class="top">Name</label>
                        <div class="check-label"></div>
                    </div>
                    <div class="form-line">
                        <input type="text" class="form-input" required />
                        <label>Your email *</label>
                        <div class="error-label">Field is required!</div>
                        <div class="check-label"></div>
                    </div>
                    <div class="form-line">
                        <input type="text" class="form-input"/>
                        <label>Subject</label>
                        <div class="check-label"></div>
                    </div>
                    <div class="form-line">
                        <textarea class="form-input" required></textarea>
                        <label>Message</label>
                        <div class="check-label"></div>
                        <div class="error-label">Field is required!</div>
                    </div>

                    <input type="button" class="form-button" value="Submit"/>
                </form>
            </div><br/><br/><br/><br/><br/><br/>
            {/* <!-- // end of contact form  --> */}

        </div>
    )
}

export default Contact