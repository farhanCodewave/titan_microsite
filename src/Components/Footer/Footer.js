import React ,{ useState,useEffect }from 'react'
import facebook from '../../Images/facebook.png'
import instagram from '../../Images/instagram.png'
import twitter from '../../Images/twitter.png'
import Logo from '../../Images/Logo.png'
import linkedIn from '../../Images/linkedin.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import Validation1 from './validation1'
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";

import './Footer.css'


function Footer() {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const handleShow1 = () => setShow1(false);
  const handleClose1 = () => setShow1(false);
  const [data2,setData2]=useState(false)
  const[errors1,setErrors1]=useState({})
  const [values, setValues] =useState({
   email:'',
   mess:''
       });

  // const [email,setMail]=useState('')
  // const [mess,setMess]=useState('')
  
  useEffect(()=>{
    console.log(Object.keys(errors1));
    if (
      Object.keys(errors1).length === 0 &&
     
      values.email !== "" &&
      values.mess !== ""
      
    ) {
      console.log("dfghjkl");
      completed1();
      setShow1(true);
    }
      },[errors1])


      const handleChange1 = (props) => (event) => {
        setValues({ ...values, [props]: event.target.value });
      };


      const completed1=()=>{
        const data={
          Email:values.email,
           Message:values.mess,
           Date: new Date().toLocaleString(),
    
    
    }
    fetch("https://sheet.best/api/sheets/b338a170-a37c-4aac-a049-3e0fc65a3c1a", {
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
        setValues ({
        
          email:'',
             
             mess:''

         });
    
      })
      .catch((errorr) => {
        // Errors are reported there
        console.log(errorr);
      });
      }

const contactSubmit=(e)=>{
e.preventDefault()
setErrors1(Validation1(values));



}


  return (
    <div className=" footer1" id="foot">
      <div className="container">
        <div className="row ">
          <div className="col-md-4  footerBoxes footerBoxess footer-box1">
            <div>
              <img
                src={Logo}
                style={{ width: "200px", height: "180px", paddingLeft: "20px" }}
              ></img>
            </div>
            <div className="social">
              <div>
                <a href=" https://twitter.com/TitanCompanyLtd" target="blank">
                  <img
                    src={twitter}
                    style={{ width: "30px", height: "30px" }}
                  ></img>
                </a>
              </div>
              <div>
                <a
                  href="  https://www.instagram.com/titancompanyltd/ "
                  target="blank"
                >
                  <img
                    src={instagram}
                    style={{ width: "30px", height: "30px" }}
                  ></img>
                </a>
              </div>
              <div>
                <a
                  href=" https://www.facebook.com/TitanCompanyLimited/"
                  target="blank"
                >
                  <img
                    src={facebook}
                    style={{ width: "30px", height: "30px" }}
                  ></img>
                </a>
              </div>
              <div>
                <a
                  href=" https://www.linkedin.com/company/titan-industries/"
                  target="blank"
                >
                  <img
                    src={linkedIn}
                    style={{ width: "30px", height: "30px" }}
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4  footerBoxes footerBoxess">
            <ul className="footer-ul">
              {/* <li><a href='#About'>About</a></li> */}
              <li>
                <Link to="/#1">About</Link>
              </li>
              <li>
                {/* <a href="#sponsorATree">Sponsor A Tree </a> */}
                <Link to="/#2">Sponsor a tree</Link>
              </li>

              <li>
                {/* <a href="#joinTheRun">Join the Run</a> */}
                <Link to="/#3">Join the run</Link>
              </li>
              <li>
                {/* <a href="#takeThePledge">Take the Pledge</a> */}
                <Link to="/#4">Take the pledge</Link>
              </li>

              <li className="privaccy">
                <a href="https://www.titancompany.in/privacy" target="_blank"></a>
              </li>
            </ul>
            {/* <div className="col-md-12">
              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Privacy Policy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  We understand that your privacy is important to you and we
                  respect that. We ensure you that Titan maintains complete
                  confidentiality of the details that you have shared with us
                  and will not share it with any third party.
                </Modal.Body>
                <Modal.Body>
                  We may ask for certain details such as name; date of birth;
                  e-mail address; residential address; contact number etc for
                  registration purposes or for giving feedback , contests ,
                  newsletters and placing an order. At any point in time you can
                  unsubscribe to our newsletters or any other information which
                  you may receive from Titan.
                </Modal.Body>
                <Modal.Body>
                  Also, for enhanced security, Titan does not accept any
                  financial information on its servers. All information entered
                  by the customer is directly received through our payment
                  gateway and are transmitted to their respective banks servers.
                  All this is done through industry standard encryption protocol
                  known as SSL (Secure Socket Layer).
                </Modal.Body>
                <Modal.Body>
                  The payments on our website are processed by a third party who
                  has signed a non-disclosure agreement with us and therefore,
                  are not allowed to share any personal information of the
                  users.
                </Modal.Body>
                <Modal.Footer>
                  <Button className="btn-7" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div> */}
          </div>
          <div
            className="col-md-4  footerBoxes footerbox-4"
            style={{ paddingLeft: "30px" }}
          >
            <form
              class="form-group"
              autoComplete="off"
              onSubmit={contactSubmit}
            >
              <input
                id="fname"
                name="fname"
                placeholder="E-Mail"
                class="form-control"
                onChange={handleChange1("email")}
                value={values.email}
                className="inp1"
              />
              <br />

              {errors1.email && <p style={{ color: "red" }}>{errors1.email}</p>}
              {/* <input type="text" id="lname" name="lname" placeholder="Message" class="form-control"  onChange={handleChange1('mess')} value={values.mess}  className='inp2'/><br></br> */}
              <textarea
                placeholder="Message"
                class="form-control"
                onChange={handleChange1("mess")}
                value={values.mess}
                className="inp2"
              />
              {errors1.mess && <p style={{ color: "red" }}>{errors1.mess}</p>}
              <button type="submit" className="btn6">
                {" "}
                Send
              </button>
              <Modal show={show1} onHide={handleClose1} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Thank you for your Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  We will look into this and get back to you soon.
                </Modal.Body>
              </Modal>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer