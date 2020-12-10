import React from 'react'

import AOS from "aos";
import "aos/dist/aos.css";

import "../../css-stylesheets/style.css"

AOS.init();

const svgStyle="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;" + 
               "font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;" + 
               "isolation:auto;mix-blend-mode:normal;shape-padding:0;text-decoration-color:#000000;" + 
               "text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;" +
               "text-transform:none;white-space:normal"

function Header () {

    return (
        <div>
             {/* MMJ logo + heartbeat SVG + slogan header */}
             <div id="QuickMMJ" data-aos="fade-left">
                QUICK MMJ
            </div>

            <div id="OneStop" data-aos="fade-right">
                THE ONE-STOP RESOURCE FOR MEDICAL MARIJUANA
            </div>

            <div className="scan-icon">
                <div className="monitor">
                    <div className="scan-box">
                    </div>
                </div>
                <div className="heartbeat">
                    <svg width="157.84mm" height="92.105mm" version="1.1" viewBox="0 0 157.84 92.105" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                        <title>heartbeat-line</title>
                        <g transform="translate(-23.176 -25.07)">
                            <path d="m90.104 25.07c-1.1007 0.0185-2.0578 0.75939-2.3516 1.8203l-14.102 51.006h-47.992c-1.3708 5.52e-4 -2.4818 1.1116-2.4824 2.4824v0.26562c5.52e-4 1.3708 1.1116 2.4818 2.4824 2.4824h50.076c1.1165-5.34e-4 2.0954-0.74609 2.3926-1.8223l11.412-41.33 13.593 75.102c0.39081 2.492 3.8175 2.8816 4.7578 0.54102l11.195-33.543 59.804 0.09088c1.3723 0.01137 2.4937-1.0925 2.5039-2.4648l2e-3 -0.26367c9e-3 -1.3693-1.0917-2.4876-2.4609-2.5l-61.681-0.11041c-1.0228-0.0085-1.9461 0.61094-2.3262 1.5605l-8.4358 25.951-13.636-77.145c-0.17579-1.1326-1.1039-1.9978-2.2461-2.0938-0.08731-0.0073-0.17245-0.01437-0.25781-0.02148-0.0825-0.0067-0.16529-0.0093-0.24805-0.0078z" color="#000000" colorRendering="auto" dominantBaseline="auto" imageRendering="auto" shapeRendering="auto" solid-color="#000000" style={{svgStyle}} href="#path10"/>
                        </g>
                    </svg> 
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/>
            {/* End of MMJ logo + heartbeat SVG + slogan header  */}
        </div>
    )
}

export default Header