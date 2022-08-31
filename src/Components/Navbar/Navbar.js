import React, { useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'
import { Link } from 'react-router-dom';

import{HashLink as Liink} from 'react-router-hash-link'


function Navbar1() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
   
        <Navbar  expand="lg" >
     
        
        <Navbar.Toggle aria-controls="basic-navbar-nav "style={{backgroundColor:'white'}} />
        <Navbar.Collapse id="basic-navbar-nav " >
          <Nav className="ms-auto  ">
            
            {/* <Link to={'/#sponsorTree'} smooth className='mynav'> Sponsor A Tree</Link>
            <Link to={'/#joinRun'} smooth className='mynav'>Join the Run</Link>
            <Link to={'/#pledge'} smooth><button className='btn1'>Take the Pledge</button></Link> */}
            <Nav.Link href="#About" className='mynav' >About</Nav.Link>
             <Nav.Link href="#sponsorATree" className='mynav'>Sponsor A Tree</Nav.Link>
            <Nav.Link href="#joinTheRun" className='mynav'>Join the Run</Nav.Link>
            <Nav.Link href="#takeThePledge" className='mynav'>Take the Pledge</Nav.Link> 
             
             {/* <a href="#sponsorTree">Sponsor A Tree </a>
            <a href="#joinRun">Join the Run</a> 
            <a href="#pledge">Take the Pledge</a>  */}
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
    
    
    </>
  )
}

export default Navbar1