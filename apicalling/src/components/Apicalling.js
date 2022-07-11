import React, {useEffect, useState} from "react";
import "./Apicalling.css";

function Apicalling() {

    const endpoint  = "https://jsonplaceholder.typicode.com/todos";

    const [name, setName] = useState("")
    const [surname, setsurName] = useState("")

    const callApi = () => {
            fetch(endpoint)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))

    }

    console.log(name);

    useEffect(()=>{
        callApi();
        console.log("useEffect chala");
    }, [name]);


    // //GET
    // fetch(endpoint)
    // .then(response => response.json())
    // .then(data => console.log(data))
    // //Error handling(edge case)
    // .catch(error => console.log(error))
    // //data is a variable here which will store the json formatter api response
    // //data ,response , error are variable names. You canuse any variable name

    return(
       <div>
       <h1>Hello</h1>
       <label>Name</label>
       <input value={name} onChange={e => setName(e.target.value)} />
       <label>surname</label>
       <input value={surname} onChange={e => setsurName(e.target.value)} />
       </div>
    )
}

export default Apicalling;