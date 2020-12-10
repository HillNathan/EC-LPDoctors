import React, { Component } from 'react'
import Header from "../../components/Header"

import AOS from "aos";
import "aos/dist/aos.css";

import "../../css-stylesheets/login.css"
import "../../css-stylesheets/doctorLP.css"

AOS.init();

class DoctorLP extends Component {
    render() {
        return (
            <div>
                <nav class="menu" tabindex="0">
                    <div class="smartphone-menu-trigger"></div>
                <header class="avatar">
                        <img src='../images/billing.png' alt="user image" />
                    <h2>John D.</h2>
                </header>
                    <ul>
                    <li tabindex="0" class="icon-dashboard"><span>Dashboard</span></li>
                    <li tabindex="0" class="icon-users"><span>Patients</span></li>
                    <li tabindex="0" class="icon-ads"><span>Advertisements</span></li>
                    <li tabindex="0" class="icon-docs"><span>My Documents</span></li>
                    <li tabindex="0" class="icon-billing"><span>Billing</span></li>
                    <li tabindex="0" class="icon-settings"><span>Settings</span></li>
                </ul>
                </nav>

                <div className="primary">
                    <main>
                    <div class="helper">
                        WELCOME BACK!
                    </div>
                    </main>
                    <br/>
                    

                    <section class="statistics">
                    <div class="container-fluid">
                        <div class="row">
                        <div class="col-md-4">
                            <div class="box">
                            <i class="fa fa-envelope fa-fw bg-primary"></i>
                            <div class="info">
                                <h3>2</h3> <span>Emails</span>
                                <p>View Here</p>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="box">
                            <i class="fas fa-ad fa-fw bg-primary"></i>
                            <div class="info">
                                <h3>6</h3> <span>Ads</span>
                                <p>Manage Here</p>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="box">
                            <i class="fas fa-users fa-fw bg-primary"></i>
                            <div class="info">
                                <h3>7</h3> <span>Patients</span>
                                <p>Manage Here</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default DoctorLP