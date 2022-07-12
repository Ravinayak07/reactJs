import React from "react";
import "./Home.css";
import {useNavigate} from "react-router-dom";

function Home() {

    //first create a variable and store the useNavigate fun in it
    const navigate = useNavigate();

    const goToAboutPage = ()=>{
        //call the variable inside the function
      navigate("/about-me")
        
    }

    const goToOrdersPage = ()=>{
        //call the variable inside the function
      navigate("/orders")
        
    }
    return(
        <div className="home_container">
            <button onClick={goToAboutPage}>Go to About Me Page</button>
            <button onClick={goToOrdersPage}>Go to Orders Page</button>
            <button>Go to MobilesPage</button>
        </div>
    )
}
export default Home;