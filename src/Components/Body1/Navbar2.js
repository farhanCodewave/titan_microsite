import React, { useEffect,useState } from 'react'

import './Navbar2.css'


import { Link } from "react-router-dom";
import {HashLink} from 'react-router-hash-link'



function Navbar2() {
  
  const [navColor, setnavColor] = useState("transparent");
  const handleScroll = () => {
    window.scrollY > 100 ? setnavColor("#84ab44") : setnavColor("transparent");
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
 
  
  
  

  return (
    <>
   <div className='header' >
  
  <nav class="navbar fixed-top navbar-expand-sm navbar-dark  p-md-3 " style={{background:navColor}} >
    <div class="container">
    {/* <a class="navbar-brand" href="#"><img src={Log1} style={{height:'30px'}}></img></a> */}
      <button
     
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav" >
        <div class="mx-auto"></div>
        <ul class="navbar-nav">
          <li class="nav-item">
            
            <Link to="/#About" href="#">Home</Link>
          </li>
           <li class="nav-item"   >
          <Link to="/#About" href="#About">About</Link>
            
          </li>
          <li class="nav-item">
          {/* <Link to="/http://localhost:3000/#joinTheRun" href="#sponsorATree">Sponsor a tree</Link> */}
          <a href="http://localhost:3000/#joinTheRun">Sponsor a tree</a>
            
          </li>
          <li class="nav-item">
          <Link to="/#joinTheRun" href="#">Join the run</Link>
           
          </li>
          <li class="nav-item">
            
            <Link to="/#Take the pledge" href="#">Take the pledge</Link>
           
          </li> 
           
        </ul>
      </div>
    </div>
  </nav>
  </div>





       
    
    
    </>
  )
}

export default Navbar2