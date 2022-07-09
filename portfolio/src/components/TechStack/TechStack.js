import React from "react";
import "./TechStack.css";
import react from "../../images/techStack/react.png";
import vuejs from "../../images/techStack/vuejs.png";
import js from "../../images/techStack/js.png";
import nodejs from "../../images/techStack/nodejs.png";
import firebase from "../../images/techStack/firebase.png";
import html from "../../images/techStack/html.png";
import css from "../../images/techStack/css.png";
import python from "../../images/techStack/python.png";
import cpp from "../../images/techStack/cpp.png";
import bootstrap from "../../images/techStack/bootstrap.png";

function TechStack() {
    return(
     <div className="techstack_container">
        <p className="techstack_title">Tech Stack</p>
        <div className="techstack_image_rows_container">
                <div className="techstack_image_row1_container">
                    <div className="techstack_image_element_container">
                        <img src={react} alt="react image" />
                        <p>React</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={vuejs} alt="react image" />
                        <p>Vue</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={js} alt="react image" />
                        <p>Javascript</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={nodejs} alt="react image" />
                        <p>NodeJs</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={firebase} alt="react image" />
                        <p>Firebase</p>
                    </div>
                    
                   
                </div>
       
                <div className="techstack_image_row1_container">
                    <div className="techstack_image_element_container">
                        <img src={cpp} alt="react image" />
                        <p>Cpp</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={html} alt="react image" />
                        <p>HTML</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={css} alt="react image" />
                        <p>CSS</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={python} alt="react image" />
                        <p>Python</p>
                    </div>
                    <div className="techstack_image_element_container">
                        <img src={bootstrap} alt="react image" />
                        <p>bootstrap</p>
                    </div>
                    
                   
                </div>

              

            </div>

            <div>

            </div>

        </div>

    );
}

export default TechStack;