import React, { Component } from 'react'
import Header from "../../components/Header"

import AOS from "aos";
import "aos/dist/aos.css";

import "../../css-stylesheets/style.css"
import "../../css-stylesheets/login.css"
import "../../css-stylesheets/doctor.css"

AOS.init();

class SignUp extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                {/*  doctor sign up form  */}
                <div class="wrapper" id="myForm">
                <form class="form-signing">
                    <h3 class="form-signing-heading">Sign Up</h3>
                    <h7 class="form-signing-sub-heading">Please fill in this form to create an account.</h7>
                    <input type="text" class="form-control" name="firstname" placeholder="First"/><br/>
                        <input type="text" class="form-control" name="lastname" placeholder="Last"/><br/>
                    <input type="text" class="form-control" name="username" placeholder="Email Address"/><br/>
                    <input type="password" class="form-control" name="password" placeholder="Password"/>
                    <label class="checkbox" >
                    <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" />
                    Remember me
                    </label>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Get Started</button>
                </form>
                </div> 
                {/*  end of doctor sign up form  */}
            </div>
        )
    }
}

export default SignUp