import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {NavLink} from "react-router-dom";
import ReactDOM from "react-dom";
import PhotoDetails from './PhotoDetails';
import './App.css'
function Photolist() {
const [photos, setphoto] = useState([]);
const [id,setId]=useState(1)
const [visiblephoto,setvisiblephoto]=useState("");
const [searchResults, setSearchResults] =useState([]);
useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        setphoto(response.data.slice(0,10))
        setSearchResults(response.data.slice(0,10))
        setId(response.id)
      })
      .catch(error => {
     console.log(error)
      })
  }, [photos]);

  const handleChange = event => {
    setvisiblephoto(event.target.value);
  };


  useEffect(() => {
    const results=photos.filter(photo=>
     photo.title.includes(visiblephoto) 
      );
     setSearchResults(results);
  }, [photos]);

    return (
        <section>
          <h1>Please refresh the page if filter will not work</h1>
        <div className="row">
          <input
            type="text"
            placeholder="Search"
            value={visiblephoto}
            onChange={handleChange}
            className="col s8 m8"
          />
          {/* <button onClick={filterPhotos} className="btn  col s2 m2">
            Filter
          </button> */}
        </div>
    
        <div className="row">
         
          {searchResults.map(photo =>(
      
<div key={photo.id} className="col s4 m4">
<div className="card">
  <div className="card-image">
    <img src={photo.thumbnailUrl}/>
    <span className="card-title">{photo.title}</span>
  </div>
 
  <div className="card-action">
    <NavLink to={`/${photo.id}`}>This is a link</NavLink>
    
  </div>
</div>
</div>

          ))}
        </div>
        </section>
    )
}

export default Photolist
