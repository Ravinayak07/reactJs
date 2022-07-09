import react from "react";
import "./About.css";
import github from "../../images/github.png"
import linkedin from "../../images/linkedin.png"; /* We need to add extension for every file except .js files */
function About() {
  return (
    <div className="about_container">
      <p className="about_text1"><span className="highlighted_text">Hi</span> my name is</p>
      <p className="about_text2">Ravi Shankar Nayak</p>
      <p className="about_text3">I am SDE at <span className="highlighted_text">Somewhere</span></p>
      <p className="about_description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid.
      </p>
      <div>
        <a href="https://github.com/Ravinayak07" target="_blank">
        <img src={github} alt="github" />
        </a>
        
        <a href="https://www.linkedin.com/in/ravi-shankar-nayak-302881192/" target="_blank">
        <img src={linkedin} alt="github" />
        </a>
      </div>
      <a href="mailto: ravishankarnayak2000@gmail.com">
        <button className="about_button">
              Get in Touch
        </button>
      </a>
      
    </div>
  );
}

export default About;
