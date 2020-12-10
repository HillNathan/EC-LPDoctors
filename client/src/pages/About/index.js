import React from 'react'
import Header from "../../components/Header"
import PatientNav from "../../components/PatientNav"

import AOS from "aos";
import "aos/dist/aos.css";

import "../../css-stylesheets/style.css"
import "../../css-stylesheets/about.css"

AOS.init();

function About () {

    return (
        <div>
            <Header />
            <PatientNav />
            <div class="container">
                <section class="grid info">
                    <div class="column-xs-12 column-md-1">
                        <div class="about">
                            <h1 class="section-heading">About MMJ</h1>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About