import React from "react";
import "./Apicalling.css";

function Apicalling() {

    const endpoint  = "https://jsonplaceholder.typicode.com/todos";

    //GET
    fetch(endpoint)
    .then(response => response.json())
    .then(data => console.log(data))
    //data is a variable here which will store the json formatter api response
    //data and response are variable names. You canuse any variable name

    return(
       <div>
        Apicalling
       </div>
    )
}

export default Apicalling;