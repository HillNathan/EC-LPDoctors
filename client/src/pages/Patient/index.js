import React from 'react'
import Header from "../../components/Header"
import PatientNav from "../../components/PatientNav"

import AOS from "aos";
import "aos/dist/aos.css";

import stateList from "../../data/fullStateList.json"

import "../../css-stylesheets/style.css"
import "../../css-stylesheets/patient.css"
import "../../css-stylesheets/search-bar.css"

AOS.init();

function Patient () {

    return (
        <div>
            <Header />
            <div className="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Search by Zip Code" name="search" autocomplete="off" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>

            <PatientNav />

            <section className="intro">  
                <div className="content" data-aos="fade-left">
                    <h1>CONNECTING PATIENTS IS OUR <span1>PRIORITY</span1></h1>
                    <p>Find a Doctor or Dispensary in your area today</p>
                </div>

                <select name="state" id="state">
                    <option value="" selected="selected">Select a State</option>
                    {stateList.map(item => { 
                        return (
                            <option value = {item.value} >{item.name}</option>
                            ) 
                        })
                    }
                </select>
            </section> 


            {/* <!-- // facts-stats section  --> */}

            {/* <!-- // collapsible section  --> */}
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <i class="fas fa-plus"></i>
                                What is a Cannabinoid?
                            </a>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                        <div class="panel-body">
                There are over 480 natural components found within the Cannabis sativa plant, of which 66 have been classified as "cannabinoids;" chemicals unique to the plant. The most well known and researched of these, delta-9-tetrahydrocannabinol (Δ9-THC), is the substance primarily responsible for the psychoactive effects of cannabis.

                The effects of THC are believed to be moderated by the influence of the other components of the plant, most particularly the cannabinoids.
                <br/><br/>
                The cannabinoids are separated into subclasses. These are as follows:<br/><br/>

                <ul>
                <li>Cannabigerols (CBG) </li>
                <li>Cannabichromenes (CBC)</li>
                <li>Cannabidiols (CBD) </li>
                <li>Tetrahydrocannabinols (THC) </li>
                <li> Cannabinol (CBN) and cannabinodiol (CBDL) </li>
                <li>Other cannabinoids (such as cannabicyclol (CBL), cannabielsoin (CBE), cannabitriol (CBT) and other miscellaneous types).</li> 
                </ul>
                <br/><div class="cannabinoid-learn-more">Learn More</div>
                </div>
                    </div>
                </div>

                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingTwo">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <i class="fas fa-plus"></i>
                                What are Cannabis Terpenes?
                            </a>
                        </h4>
                    </div>
                    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div class="panel-body">
                You already know what terpenes are because you’ve experienced them all your life. Simply put, terpenes are what gives an orange its citrusy smell. They give pine trees their unique aroma. They’re even responsible for the relaxing effects in lavender. They are chemicals that determine how things smell.
                Secreted in the same glands that produce cannabinoids like THC and CBD, terpenes are aromatic oils that color cannabis varieties with distinctive flavors like citrus, berry, mint, and pine.<br/><br/>
                Not unlike other strong-smelling plants and flowers, the development of terpenes in cannabis began for adaptive purposes: to repel predators and lure pollinators. There are many factors that influence a plant’s development of terpenes, including climate, weather, age and maturation, fertilizers, soil type, and even the time of day.
                <br/><br/><div class="terpenes-learn-more">Learn More</div>
                </div>
                    </div>
                </div>

                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <i class="fas fa-plus"></i>
                                What is the difference between Cannabinoids and Terpenes?
                            </a>
                        </h4>
                    </div>
                    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="panel-body">
                    Cannabinoids and terpenes work together in something called the entourage effect. 

                    The entourage effect simply means that cannabinoids such as THC and CBD, along with the hundreds of other compounds, along with the terpenes, are meant to work together. It’s the whole plant that does the best job, not just a single compound. While relief does come from using a CBD oil or a THC oil, whole plant therapy has been the most common use. Utilizing all the compounds and terpenes in the plant may just be the best way after all.
                    <br/><br/>
                    Terpenes can intensify or downplay the effects of the cannabinoids. Have you ever noticed how two similar strains can produce profoundly different effects? One may leave you with couch lock and the other may energize you? That’s another aspect of the entourage effect, which is driven by both cannabinoids and terpenes.
                    <br/><br/>
                    <div class="cann-terp-diff-learn-more">Learn More</div>
                </div>
                    </div>
            </div>
                
        </div>        
    
    </div>
    )
}

export default Patient