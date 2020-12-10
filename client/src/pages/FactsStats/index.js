import React from 'react'
import Header from "../../components/Header"
import PatientNav from "../../components/PatientNav"

import AOS from "aos";
import "aos/dist/aos.css";

import "../../css-stylesheets/style.css"
import "../../css-stylesheets/facts-stats.css"
import "../../css-stylesheets/patient.css"
import "../../css-stylesheets/search-bar.css"



AOS.init();

function FactsStats () {
    return (
        <div>
            <Header></Header>
            <PatientNav></PatientNav>
            <div id="stats">STATS & FAQS</div>
        <div id="bar1-title">Medical Marijuana Retail Sales for the U.S. from 2018 to 2022 (in billion U.S. Dollars)</div>
        <div id="bar1-sub">Source: Marijuana Business Daily <i class="fa fa-copyright"></i>&nbsp;Statista</div>
        {/* bar graph animation */}
            <div id="bar-chart">
                <div class="graph">
                <ul class="x-axis">
                    <li><span>2018</span></li>
                    <li><span>2019</span></li>
                    <li><span>2020</span></li>
                    <li><span>2021</span></li>
                    <li><span>2021</span></li>
                </ul>
                <ul class="y-axis">
                    <li><span>8</span></li>
                    <li><span>6</span></li>
                    <li><span>4</span></li>
                    <li><span>2</span></li>
                    <li><span>0</span></li>
                </ul>
                <div class="bars">
                    <div class="bar-group">
                    <div class="bar bar-1 stat-1" style={{height: "45%"}}>    
                        <div id="bar-num">3.7</div>
                        <span>4080</span>
                    </div>
                    <div class="bar bar-2 stat-2" style={{height: "57%"}}>
                        <div id="bar-num">4.5</div>
                        <span>5680</span>
                    </div>
                    </div>
                    <div class="bar-group">
                    <div class="bar bar-4 stat-1" style={{height: "57%"}}>
                        <div id="bar-num">4.5</div>
                        <span>6080</span>
                    </div>
                    <div class="bar bar-5 stat-2" style={{height: "67%"}}>
                        <div id="bar-num">5.5</div>
                        <span>6880</span>
                    </div>
                    </div>
                    <div class="bar-group">
                    <div class="bar bar-7 stat-1" style={{height: "62%"}}>
                        <div id="bar-num">4.9</div>
                        <span>6240</span>
                    </div>
                    <div class="bar bar-8 stat-2" style={{height: "76%"}}>
                        <div id="bar-num">6.1</div>
                        <span>5760</span>
                    </div>
                    </div>
                    <div class="bar-group">
                    <div class="bar bar-10 stat-1" style={{height: "66%"}}>
                        <div id="bar-num">5.4</div>
                        <span>3520</span>
                    </div>
                    <div class="bar bar-11 stat-2" style={{height: "85%"}}>
                        <div id="bar-num">6.8</div>
                        <span>5120</span>
                    </div>
                    </div>
                    <div class="bar-group">
                    <div class="bar bar-13 stat-1" style={{height: "70%"}}>
                        <div id="bar-num">5.9</div>
                        <span>2240</span>
                    </div>
                    <div class="bar bar-14 stat-2" style={{height: "91%"}}>
                        <div id="bar-num">7.3</div>
                        <span>2640</span>
                    </div>

                    <i class="fas fa-circle" id="circle-maximum"><span max>&nbsp; Maximum</span></i>
                    <i class="fas fa-circle" id="circle-minimum"><span min>&nbsp; Minimum</span></i>
                    
                    </div>
                </div>
                </div>
            </div>
        {/* end of bar graph animation */}

            {/*  numbers count section  */}
            <div class="row text-center">
        
                <div class="col">
                <div class="counter">
                    <i class="fas fa-cannabis fa-2x"></i>
                    <h2 class="timer count-title count-number" data-to="100" data-speed="1500"></h2>
                    <p class="count-text ">EXAMPLE</p>
                </div>
                </div>
                
                <div class="col">
                <div class="counter">
                    <i class="fas fa-joint fa-2x"></i>
                    <h2 class="timer count-title count-number" data-to="1700" data-speed="1500"></h2>
                    <p class="count-text ">EXAMPLE</p>
                </div>
                </div>
                        
                <div class="col">
                <div class="counter">
                    <i class="fas fa-diagnoses fa-2x"></i>
                    <h2 class="timer count-title count-number" data-to="11900" data-speed="1500"></h2>
                    <p class="count-text ">EXAMPLE</p>
                </div>
                </div>
            
            </div>
            {/* end of numbers count section*/}
            <br/><br/> 

            {/* terpenes chart */}
            <div class="terpenes-calm-energy">
                <div id="terpenes-calm">
                CALMING 
                </div>

                <div id="terpenes-energy">
                ENERGIZING
                </div>
            </div><br/><br/>
            
            <div>
                <div class="terpenes-boxes-1"><img src="assets/images/flower.png" id="flower"/><div id="terp-types">Myrcene<br/><i>Herbal</i></div></div>
                <div class="terpenes-boxes-2"><img src="assets/images/pine.png" id="pine"/><div id="terp-types">Pinene<br/><i>Pine</i></div></div>
                <div class="terpenes-boxes-3"><img src="assets/images/spice.png" id="spice"/><div id="terp-types">Caryophyllene<br/><i>Peppery</i></div></div>
                <div class="terpenes-boxes-4"><img src="assets/images/lemon.png" id="lemon"/><div id="terp-types">Limonene<br/><i>Citrus</i></div></div>
                <div class="terpenes-boxes-5"><img src="assets/images/fruit.png" id="fruit"/><div id="terp-types">Terpinolene<br/><i>Fruity</i></div></div>
            </div>
            {/*  end of terpenes chart */}

        </div>
    )
}

export default FactsStats