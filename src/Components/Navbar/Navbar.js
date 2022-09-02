import React, { useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'



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
            
          
            <Nav.Link href="#About" className='mynav' >About</Nav.Link>
             <Nav.Link href="#sponsorATree" className='mynav'>Sponsor A Tree</Nav.Link>
            <Nav.Link href="#joinTheRun" className='mynav'>Join the Run</Nav.Link>
            <Nav.Link href="#takeThePledge" className='mynav'>Take the Pledge</Nav.Link> 
             
            
          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
    
    
    </>
  )
}

export default Navbar1