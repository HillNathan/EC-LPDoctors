import React from 'react'
import { withRouter, Link } from "react-router-dom"
import Header from "../../components/Header"

import AOS from "aos";
import "aos/dist/aos.css";

import "../../css-stylesheets/style.css"
import "../../css-stylesheets/login.css"

AOS.init();

function Splash () {
    
    return (
        <div>
        <Header />

            {/*  Patient-Doctor Portal Entry LP  */}
            <div className="container">
                <div className="split-section" id="split-1">
                    <div className="split-box">
                        <h1 className="split-heading">
                            <span className="split-heading-main">I AM A</span>
                            <span className="split-heading-sub">PATIENT</span><br/>
                            <i className="far fa-user"></i>
                        </h1>
                        <Link to="/patient" id="patient-seemore" className="btn btn-outline-white">SEE MORE</Link>
                    </div>
                </div>
                <div className="split-section" id="split-2">
                    <div className="split-box">
                        <h1 className="split-heading">
                            <span className="split-heading-main" id="doc-main">I AM A</span>
                            <span className="split-heading-sub" id="doc-main2">DOCTOR</span><br/>
                            <i className="fas fa-user-md"></i>
                        </h1>
                        <Link to="/doctor" id="doctor-login" className="btn btn-outline-white">SIGN IN</Link>
                        <Link to="/sign-up" id="doctor-signup" className="btn btn-outline-white">SIGN UP</Link>
                    </div>
                </div>
                
            </div><br/><br/><br/>
        </div>
    )
}

export default withRouter(Splash)