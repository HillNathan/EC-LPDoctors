import React from 'react'
import Header from "../../components/Header"
import PatientNav from "../../components/PatientNav"
import StateComponent from '../../components/States'

import AOS from "aos";
import "aos/dist/aos.css";

import "../../css-stylesheets/style.css"
import "../../css-stylesheets/legalstates.css"

import legalStateList from "../../data/legalStates.json"

AOS.init();



function LegalStates () {
    return (
        <div>
            <Header />
            <PatientNav />
            <div class="legal-header" data-aos="fade-down">LEGAL STATES</div>

            <StateComponent />
        </div>
    )
}

export default LegalStates
