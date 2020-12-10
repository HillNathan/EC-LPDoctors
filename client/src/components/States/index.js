import React, { Component } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

import "../../css-stylesheets/style.css"
import "../../css-stylesheets/legalstates.css"

import legalStateList from "../../data/legalStates.json"

AOS.init();

class StatesComponent extends Component {

    state = {
        displayState : false,
        stateToDisplay : ""
    }

    render() {

        return (
            <div id="content" data-aos="fade-up">
               <div class="columns">
                    <ul>
                    {
                        legalStateList.map(theState => {
                            return (
                                <li id={theState.stateName.toLowerCase()}>{theState.stateName}</li>
                            )
                        })
                    }
                    </ul>         
                </div>
            </div>
        )
    }
}

export default StatesComponent
