import React, {useEffect, useState} from "react";
import "./Apicalling.css";

function Apicalling() {

    const endpoint  = "https://fakestoreapi.com/products";

    const [name, setName] = useState("")
    const [surname, setsurName] = useState("")

    //to accesss the data variable outside its scope
    const [apiData, setapiData] = useState(null)

    const callApi = () => {
            fetch(endpoint)
            .then(response => response.json())
            .then(data => setapiData(data))  //passing data to apiData through setapiData fun
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
       <div className="apicalling_container">
        {apiData.map((value,key)=>(
            <div className="apidata_container">
            <p>{value.title}</p>
            <img src={value.image} />
            <p>Category: {value.category}</p>
            <p>Rs. {value.price}</p>
            <p>Rating. {value.rating.rate} </p>
            <p></p>
            </div>
        ))}
       <h1>Hello</h1>
       <label>Name</label>
       <input value={name} onChange={e => setName(e.target.value)} />
       <label>surname</label>
       <input value={surname} onChange={e => setsurName(e.target.value)} />
       </div>
    )
}

export default Apicalling;