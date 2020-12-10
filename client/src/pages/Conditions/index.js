import React from 'react'
import Header from "../../components/Header"
import PatientNav from "../../components/PatientNav"

import AOS from "aos";
import "aos/dist/aos.css";

import "../../css-stylesheets/style.css"
import "../../css-stylesheets/conditions.css"

AOS.init();

function Conditions () {
    return (
        <div>
            <Header></Header>
            <PatientNav></PatientNav>
            {/* <!-- // Conditons header //  --> */}
            <div class="conditions-header">
                CONDITIONS
            </div>

            <div class="conditions-subheader">
                Medical Marijuana can help treat a number of conditions including:
            </div>
            {/* <!-- // End of Conditons header //  --> */}

            {/* <!-- // Conditions Cards //   --> */}
            <div class="example">
                <div class="cards-wrapper">
                <div class="card">
                    <div class="title">Alzheimer's disease</div>
                    <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel!</div>
                </div>
                <div class="card">
                    <div class="title">Anxiety</div>
                    <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel!</div>
                </div>
                <div class="card">
                    <div class="title">Cancer</div>
                    <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel!</div>
                </div>
                <div class="card">
                    <div class="title">Crohn's disease</div>
                    <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel!</div>
                </div>
                <div class="card">
                    <div class="title">Eating Disorders</div>
                    <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel!</div>
                </div>
                <div class="card">
                    <div class="title">Epilepsy</div>
                    <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel!</div>
                </div>
                <div class="card">
                    <div class="title">Glaucoma</div>
                    <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel!</div>
                </div>
                <div class="card">
                    <div class="title">Multiple sclerosis</div>
                    <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel!</div>
                </div>
                <div class="card">
                    <div class="title">Muscle Spasms</div>
                    <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel!</div>
                </div>
                <div class="card">
                    <div class="title">Seizures</div>
                    <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, aliquam. Expedita vero quod impedit vel!</div>
                </div>
                </div>
                
                <div class="columns-wrapper">
                <div class="column"></div>
                <div class="column"></div>
                </div>
            </div>
            {/* <!-- // End of Conditions Cards //   --> */}
        </div>
        )
    }

export default Conditions
