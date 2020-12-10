import React from 'react'
import { Link } from 'react-router-dom'

function PatientNav () {
    return (
        <nav className="patient-nav-bar">
            <Link to="/patient" id="seeAbout">HOME</Link>
            <Link to="/about" id="seeAbout">ABOUT</Link>
            <Link to="/legal-states" id="seeLegalStates">LEGAL STATES</Link>
            <Link to="/conditions" id="seeConditions">CONDITIONS</Link>
            <Link to="/advertisement" id="seeSponsors">SHOP</Link>
            <Link to="/stats-facts" id="seeFAQS">STATS + FAQS</Link>
            <Link to="/contact" id="seeContact">CONTACT</Link>
        </nav>
    )
}

export default PatientNav
