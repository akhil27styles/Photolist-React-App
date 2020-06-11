import React, { useState, useEffect } from 'react'
import axios from "axios"
import { NavLink } from 'react-router-dom';
import Photolist from "./Photolist";
function PhotoDetails(props) {
    const [photoDetails,setphotodetails]=useState([]);
    const [id,setid]=useState(0);
    console.log(props);
    useEffect(()=>{
        const get=props.match.params.PhotoDetails
        axios.get(`https://jsonplaceholder.typicode.com/photos/${get}`)
        .then(response =>{
            setphotodetails(response.data)
            setid(response.data);
        });
    },[setphotodetails])
    return (
        <div className="row">
            <div>
                <NavLink to="/">Back</NavLink>
                <h6>If the picture did not display try to refresh the page or otherwise open other cards links may be this is the problem with Api</h6>
            </div>
        <div key={photoDetails.id}className="col s4 m4">
<div className="card">
  <div className="card-image">
    <img src={photoDetails.thumbnailUrl} alt={photoDetails.id}/>
    <span className="card-title">{photoDetails.title}</span>
  </div>

</div>
</div>
</div>
    )
}

export default PhotoDetails
