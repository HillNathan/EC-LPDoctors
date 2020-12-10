import React, { Component } from 'react'
import Header from "../../components/Header"

import AOS from "aos";
import "aos/dist/aos.css";

import "../../css-stylesheets/style.css"
import "../../css-stylesheets/login.css"
import "../../css-stylesheets/doctor.css"

AOS.init();

class Doctor extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                {/*  doctor login form  */}
                <div class="wrapper" id="myForm">
                    <form class="form-signing"
                        method="post"
                        action="/api/doctors/login">
                    <h3 class="form-signing-heading">Welcome Back!</h3>
                    <input type="text" class="form-control" name="username"
                            placeholder="Email Address"/><br/>
                    <input type="password" class="form-control" name="password"
                            placeholder="Password"/>
                    <label class="checkbox">
                        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/>
                        Remember me
                    </label>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                    </form>
                </div> 
                {/*  end of doctor login form  */}
            </div>
        )
    }
}

export default Doctor