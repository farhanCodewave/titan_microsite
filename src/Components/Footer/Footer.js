import React ,{ useState }from 'react'
import facebook from '../../Images/facebook.png'
import instagram from '../../Images/instagram.png'
import twitter from '../../Images/twitter.png'
import Logo from '../../Images/Logo.png'
import linkedIn from '../../Images/linkedin.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'

import './Footer.css'


function Footer() {
    const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [mail,setMail]=useState('')
  const [mess,setMess]=useState('')
  let errors={};
  if(!mail.value){
    errors.mail="Please enter your Email"
    
    }
    else if(!/\S+@\S+\.\S+/.test(mail.value)){
      errors.mail="Email is invalid"
    }

const contactSubmit=(e)=>{
e.preventDefault()
console.log(mail,mess)
const data={
      Email:mail,
       Message:mess,


}
fetch("https://sheet.best/api/sheets/794a59a7-09e5-455d-9f66-0b648cc24809", {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((r) => r.json())
  .then((data) => {
    // The response comes here
    console.log(data);
    setMail('')
setMess('')
  })
  .catch((errorr) => {
    // Errors are reported there
    console.log(errorr);
  });
}


  return (
    <div className=' footer1' id='foot'>
        <div className='container'>
<div className='row '>
    <div className='col-md-4  footerBoxes footerBoxess footer-box1' >
        <div>
            <img src={Logo} style={{width:"200px",height:"180px",paddingLeft:'20px'}}></img>
        </div>
        <div className='social'>
            <div><a href=' https://twitter.com/TitanCompanyLtd' target='blank'>
        <img src={twitter} style={{width:'30px',height:'30px'}}></img>
       </a></div>
            <div><a href='  https://www.instagram.com/titancompanyltd/ ' target='blank'>
        <img src={instagram} style={{width:'30px',height:'30px'}}></img>
       </a></div>
            <div><a href=' https://www.facebook.com/TitanCompanyLimited/' target='blank'>
        <img src={facebook} style={{width:'30px',height:'30px'}}></img>
       </a></div>
       <div><a href=' https://www.linkedin.com/company/titan-industries/' target='blank'>
        <img src={linkedIn} style={{width:'30px',height:'30px'}}></img>
       </a></div>
       
       </div>
    </div>
    <div className='col-md-4  footerBoxes footerBoxess' >
        <ul>
            <li><a href='#About'>About</a></li>
            <li><a href="#sponsorATree">Sponsor A Tree </a></li>
            <li><a href='#joinTheRun'>Join the Run</a></li>
            <li><a href="#takeThePledge">Take the Pledge</a></li>
            
            <li onClick={handleShow} className='privaccy'>Privacy Policy </li>
            
        </ul>
        <div className='col-md-12'>
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title >Privacy Policy</Modal.Title>
        </Modal.Header>
      <Modal.Body>We understand that your privacy is important to you and we respect that. We ensure you that Titan maintains complete confidentiality of the details that you have shared with us and will not share it with any third party.</Modal.Body>
        <Modal.Body>We may ask for certain details such as name; date of birth; e-mail address; residential address; contact number etc for registration purposes or for giving feedback , contests , newsletters and placing an order. At any point in time you can unsubscribe to our newsletters or any other information which you may receive from Titan.</Modal.Body>
        <Modal.Body>Also, for enhanced security, Titan does not accept any financial information on its servers. All information entered by the customer is directly received through our payment gateway and are transmitted to their respective banks servers. All this is done through industry standard encryption protocol known as SSL (Secure Socket Layer).</Modal.Body>
        <Modal.Body>The payments on our website are processed by a third party who has signed a non-disclosure agreement with us and therefore, are not allowed to share any personal information of the users.</Modal.Body>
        {/* <Modal.Footer>
          
          <Button className='btn-7' onClick={handleClose}>
          Close
          </Button>
        </Modal.Footer> */}
      </Modal>
      </div>
    </div>
    <div className='col-md-4  footerBoxes footerbox-4' style={{paddingLeft:'30px'}}>
    <form class="form-group" autoComplete='off' onSubmit={contactSubmit}>
  
  <input type="email" id="fname" required name="fname" placeholder="E-Mail" class="form-control" onChange={(e)=>setMail(e.target.value)} value={mail}  className='inp1'/><br/>
  
{/* {errors.mail &&  <p style={{color:'red'}}>{errors.mail}</p>} */}
  <input type="text" id="lname" name="lname" placeholder="Message" class="form-control" required onChange={(e)=>setMess(e.target.value)} value={mess} className='inp2'/><br></br>
    <button type="submit" className='btn6'>  Send</button>
</form>

</div>
    </div>
    </div>
    
    </div>
  )
}

export default Footer