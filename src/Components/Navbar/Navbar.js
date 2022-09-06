import React, { useEffect,useState,useRef } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'
import Log1 from '../../Images/Logo.png'
import shadows from '@mui/material/styles/shadows';
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import {HashLink} from 'react-router-hash-link';




function Navbar1() {
  
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

  
 
  
  // var nav = document.querySelector('nav');

  // window.addEventListener('scroll',  ()=> {
  //   if (window.pageYOffset >(100,100) ){
  //     nav.classList.add('navbg');
  //   } else {
  //     nav.classList.remove('navbg', );
  //   }})

  // const position = window.pageYOffset;
  // position >= 120 ? setBarVisibility(true) : setBarVisibility(false);
  // setSrollPosition(position);
  

  return (
    <>
      <div className="header">
        <nav
          class="navbar fixed-top navbar-expand-sm navbar-dark  p-md-3 "
          style={{ background: navColor }}
        >
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

            <div class="collapse navbar-collapse" id="navbarNav">
              <div class="mx-auto"></div>
              <ul class="navbar-nav">
                {/* <li class="nav-item">
            <a class="nav-link text-white" href="#">Home</a>
            <Link to="Home" href="#">Home</Link>
          </li> */}
                <li class="nav-item">
                  <Link to="/#1" className="mynav">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  {/* <a class="nav-link text-white" href="#sponsorATree" >Sponsor a tree</a> */}
                  <Link to="/#2" className="mynav">
                    Sponsor a tree
                  </Link>
                </li>
                <li class="nav-item">
                  {/* <a class="nav-link text-white" href="#joinTheRun">
                    Join the run
                  </a> */}
                  <Link to="/#3" className="mynav">
                    Join the run
                  </Link>
                </li>
                <li class="nav-item">
                  {/* <a class="nav-link text-white" href="#takeThePledge">
                    Take the pledge
                  </a> */}
                  <Link to="/#4" className="mynav">
                    Take the pledge
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Knowyourforest" className="mynav">
                    Know your forest
                  </Link>
                  {/* <a class="nav-link text-white" href="#takeThePledge" >Know your forest</a> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* <Navbar  expand="lg" >
     <Navbar.Toggle aria-controls="basic-navbar-nav "style={{backgroundColor:'white'}} />
        <Navbar.Collapse id="basic-navbar-nav " >
          <Nav className="ms-auto  ">
            <Nav.Link href="#About" className='mynav' >About</Nav.Link>
             <Nav.Link href="#sponsorATree" className='mynav'>Sponsor A Tree</Nav.Link>
            <Nav.Link href="#joinTheRun" className='mynav'>Join the Run</Nav.Link>
            <Nav.Link href="#takeThePledge" className='mynav'>Take the Pledge</Nav.Link> 
            </Nav>
        </Navbar.Collapse>
    </Navbar> */}
    </>
  );
}

export default Navbar1