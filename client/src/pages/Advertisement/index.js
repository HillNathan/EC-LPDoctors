import React from 'react'
import Header from "../../components/Header"
import PatientNav from "../../components/PatientNav"

import AOS from "aos";
import "aos/dist/aos.css";

import "../../css-stylesheets/style.css"
import "../../css-stylesheets/advertisement.css"

AOS.init();

function Advertisement () {
    return (
        <div>
            <Header></Header>
            <PatientNav></PatientNav>
            <div class="sponsors-heading">
  WHERE TO SHOP
</div>

{/* <!-- ad section  -->
<!-- PHOTO GRID - DESKTOP VIEW //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// --> */}

<div class="pdphotogrid pdphotogriddesktop">
  <div class="pdpgcolumn1">
  <div class="pdphotobox pdphotoboxmedium">
  <figure class="effect-pdfx">
  <img src="assets/images/pets.jpg" alt="img13" />
  <figcaption>
  <h2>CBD FOR PETS</h2>
  <p>Learn more</p>
  <a href="#">View more</a>
  </figcaption>
  </figure>
  </div>
  {/* <!-- pdphotobox END --> */}
  <div class="pdphotobox pdphotoboxmedium">
  <figure class="effect-pdfx">
  <img src="assets/images/doctormj.jpg" alt="img13" />
  <figcaption>
  <h2>DOCTOR JOHN DOE</h2>
  <p>SCHEDULE TODAY</p>
  <a href="#">View more</a>
  </figcaption>
  </figure>
  </div>
  {/* <!-- pdphotobox END --> */}
  </div>
  {/* <!-- pdpgcolumn1 END --> */}
  <div class="grid-item pdpgcolumngutter"></div>
  <div class="pdpgcolumn2">
  <div class="pdphotobox pdphotoboxlarge">
  <figure class="effect-pdfx">
  <img src="assets/images/CBD.jpg" alt="img13" />
  <figcaption>
  <h2>BENEFITS OF CBD OIL</h2>
  <p>EXAMPLE EXAMPLE EXAMPLE</p>
  <a href="#">View more</a>
  </figcaption>
  </figure>
  </div>
  {/* <!-- pdphotobox END --> */}
  </div>
  {/* <!-- pdpgcolumn2 END --> */}
  <div class="grid-item pdpgcolumngutter"></div>
  <div class="pdpgcolumn3">
  <div class="pdphotobox pdphotoboxsmall">
  <figure class="effect-pdfx">
  <img src="assets/images/jointpain.jpg" alt="img13" />
  <figcaption>
  <h2>DECREASE JOINT PAIN</h2>
  {/* <!-- <p>Rates are dropping</p> --> */}
  <a href="#">View more</a>
  </figcaption>
  </figure>
  </div>
  {/* <!-- pdphotobox END --> */}
  <div class="pdphotobox pdphotoboxsmall">
  <figure class="effect-pdfx">
  <img src="assets/images/visitus.jpg" alt="img13" />
  <figcaption>
  <h2>BEST DISPENSARIES</h2>
  {/* <!-- <p>Become a part of our team</p> --> */}
  <a href="#">View more</a>
  </figcaption>
  </figure>
  </div>
  {/* <!-- pdphotobox END --> */}
  </div>
  {/* <!-- pdpgcolumn3 END --> */}
  </div>
  {/* <!-- pdphotogrid END --> */}
  
  
  {/* <!-- PHOTO GRID - MOBILE VIEW //// //// //// //// //// //// //// //// //// //// //// //// //// //// //// --> */}
  
  <div class="pdphotogrid pdphotogridmobile">
    
    <div class="pdpgcolumn1">
    
      <div class="pdphotobox pdphotobox2x6">
      <figure class="effect-pdfx">
      <img src="assets/images/pets.jpg" alt="img13" />
      <figcaption>
      <h2>CBD FOR PETS</h2>
      <p>Learn more</p>
      <a href="#">View more</a>
      </figcaption>
      </figure>
      </div>
      {/* <!-- pdphotobox END --> */}
      
      <div class="pdphotobox pdphotobox2x6">
      <figure class="effect-pdfx">
      <img src="assets/images/doctormj.jpg" alt="img13" />
      <figcaption>
      <h2>DOCTOR JOHN DOE</h2>
      {/* <!-- <p>Rates are dropping</p> --> */}
      <a href="#">SCHEDULE TODAY</a>
      </figcaption>
      </figure>
      </div>
      {/* <!-- pdphotobox END --> */}
      
      <div class="pdphotobox pdphotobox2x6">
      <figure class="effect-pdfx">
      <img src="assets/images/CBD.jpg" alt="img13" />
      <figcaption>
      <h2>BENEFITS OF CBD OIL</h2>
      <p>LEARN MORE</p>
      <a href="#">View more</a>
      </figcaption>
      </figure>
      </div>
      {/* <!-- pdphotobox END --> */}
      
    </div>
    {/* <!-- pdpgcolumn1 END --> */}
    
    <div class="grid-item pdpgcolumngutter"></div>
    
    <div class="pdpgcolumn2">
        
      <div class="pdphotobox pdphotobox2x6">
      <figure class="effect-pdfx">
      <img src="assets/images/jointpain.jpg" alt="img13" />
      <figcaption>
      <h2>DECREASE JOINT PAIN</h2>
      <p>LEARN MORE</p>
      <a href="#">View more</a>
      </figcaption>
      </figure>
      </div>
      {/* <!-- pdphotobox END --> */}
      
      <div class="pdphotobox pdphotobox2x6">
      <figure class="effect-pdfx">
      <img src="assets/images/visitus.jpg" alt="img13" />
      <figcaption>
      <h2>BEST DISPENSARIES</h2>
      <p>LEARN MORE</p>
      <a href="#">View more</a>
      </figcaption>
      </figure>
      </div>
      {/* <!-- pdphotobox END --> */}
      
      <div class="pdphotobox pdphotobox2x6">
      <figure class="effect-pdfx">
      <img src="assets/images/background3.jpg" alt="img13" />
      <figcaption>
      <h2>MARIJUANA IN THE WORLD</h2>
      {/* <!-- <p>Become a part of our team</p> --> */}
      <a href="#">View more</a>
      </figcaption>
      </figure>
      </div>
      {/* <!-- pdphotobox END --> */}
        
    </div>
    {/* <!-- pdpgcolumn2 END --> */}
    
  </div>
  {/* <!-- pdphotogrid END --> */}

{/* <!-- end of ad section  --> */}
</div>
    )
}

export default Advertisement