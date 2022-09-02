import React, { useState, useEffect } from "react";

import "./Body.css";
import formimg from "../../Images/formimg.png";
import hug from "../../Images/hug-plant.png";
import India from "../../Images/India.png";
import rhomb1 from "../../Images/rhomb1.png";
import rhomb2 from "../../Images/rhomb2.png";
import rhomb3 from "../../Images/rhomb3.png";
import rhomb4 from "../../Images/rhomb4.png";
import Mobile from "../../Images/Mobile.png";
import jog from "../../Images/joggroup.png";
import playstore from "../../Images/playstore.jpg";
import appstore from "../../Images/appstore.jpg";
import ReactPlayer from "react-player";
import Validation from "./Validation";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Parallax } from "react-parallax";
import { Container, ModalBody } from "react-bootstrap";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import scan from "../../Images/scan.png";
import jogvideo from "../../Images/Runners Clip.mp4";
import treevideo from "../../Images/trees_gif.mp4";

function Body() {
  const [counterOn, setCounterOn] = useState(false);
  const [money, setMoney] = useState();
  const [sliderValue, setSliderValue] = useState(9);
  const [views, setViews] = useState();
  const [values, setValues] = useState({
    name: "",
    email: "",
    number: "",
    pan: "",
    views: "",
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [errors, setErrors] = useState({});
  // const [data1, setData1] = useState(false);
  const handleChange1 = (props) => (event) => {
    setValues({ ...values, [props]: event.target.value });
  };

  //     useEffect(()=>{
  // if(Object.keys(errors).length===0&&data1){
  //   setShow(true)
  // }
  //   },[errors])

useEffect(()=>{
  if(show===false){
    setSliderValue(9)
  }
},[show])

  useEffect(() => {
    console.log("dfghj");
    console.log(Object.keys(errors));
    if (
      Object.keys(errors).length === 0 &&
      values.name !== "" &&
      values.email !== "" &&
      values.number !== "" &&
      values.pan !== ""
    ) {
      console.log("dfghjkl");
      completed();
      setShow(true);
    }
  }, [errors]);

  //Set amount of money
  const handleChange = (e) => {
    const el = e.target;
    el.style.setProperty("--value", el.value);

    let value = el.valueAsNumber;
    setSliderValue(value);
    calculateMoney(value);
  };
  var start = 400;
  var end = 100000;
  var priceList = [];

  for (var i = 1; i <= end / start; i++) {
    priceList.push(i * start);
  }
  const calculateMoney = (value) => {
    let ppm = priceList[value];
    setMoney(ppm);
  };

  useEffect(() => {
    calculateMoney(sliderValue);
  });

  useEffect(() => {
    const viewsList = [];
    for (var value = 1; value <= 250; value++) {
      viewsList.push(value);
    }
    setViews(viewsList[sliderValue]);
  }, [sliderValue]);

  const completed = () => {
    const data = {
      Name: values.name,
      Email: values.email,
      Number: values.number,
      Pan: values.pan,
      Trees: views,
      Date: new Date().toLocaleString(),
    };
    console.log(data);
    fetch(
      "https://sheet.best/api/sheets/392c829e-95e0-41fc-a187-d5f860c59a8c",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log(data);
        // setViews("");
        // setSliderValue("9");
         setValues ({
          name:'',
          email:'',
             number: '',
             pan:'',
             views:''

         });
      })
      .catch((errorr) => {
        console.log(errorr);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    // setData1(true);
  };

  // const onButtonClick = () => {
  //   // using Java Script method to get PDF file
  //   fetch('TitanPledge_A1.pdf').then(response =>{
  //       response.blob().then(blob => {
  //           // Creating new object of PDF file
  //           const fileURL = window.URL.createObjectURL(blob);
  //           // Setting various property values
  //           let alink = document.createElement('a');
  //           alink.href = fileURL;
  //           alink.download = 'TitanPledge_A1.pdf';
  //           alink.click();
  //       })})}
    



    // const data = {
    //   Name: values.name,
    //   Email: values.email,
    //   Number: values.number,
    //   Pan: values.pan,
    //   Trees: views,
    //   Date: new Date().toLocaleString(),
    // };
    // console.log(data);
    // fetch(
    //   "https://sheet.best/api/sheets/0cbfa513-8146-4daf-bf96-072bb6f69f42",
    //   {
    //     method: "POST",
    //     mode: "cors",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   }
    // )
    //   .then((r) => r.json())
    //   .then((data) => {
    //     // The response comes here
    //     console.log(data);
    //     setViews("");
    //     setSliderValue("9");
    //     //  setValues ({
    //     //   name:'',
    //     //   email:'',
    //     //      number: '',
    //     //      pan:'',
    //     //      views:''

    //     //  });
    //   })
    //   .catch((errorr) => {
    //     console.log(errorr);
    //   });
  

  return (
    <>
      <div className="body1  " id="About">
        <div className="youtube1  d-flex justify-content-center ">
          <ReactPlayer
            controls
            url="https://youtu.be/zAVX2_fp7zk"
            width="80%"
            height="450px"
          />
        </div>

        <div className="body1-para">
          <p className="text-center para">
            Mr.CK Venkataraman - Managing Director - Titan Company Ltd, on
            nurturing sustainability
          </p>
          <br></br>
          <div className="body1-text ">
            <p>
              At Titan we have always considered sustainability as an integral
              imperative in everything we do. Over the years we have been
              actively involved in several initiatives focused on forwarding the
              agenda of adopting eco-friendly practices. This time we are taking
              our sustainability initiatives up another notch and we'd like all
              of you to participate.<br></br>
              <strong>Let's make a colossal impact together.</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="body2 ">
        <div className=" row-dash">
          <div className=" dash">
            <div className="dash-cont">
              <h2>Trees Planted</h2>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <p>
                  {counterOn && <CountUp end={3211} duration={1} delay={0} />}
                </p>
              </ScrollTrigger>
            </div>
            <div className="dash-cont">
              <h2>Kms Run</h2>
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <p>
                  {counterOn && <CountUp end={273} duration={1} delay={0} />}
                </p>
              </ScrollTrigger>
            </div>
          </div>
        </div>
        <div className="container body22">
          <div className="body2-heading">
            <h1 style={{visibility:"hidden"}}>ccc</h1>
            <h1 style={{ paddingTop: "20px" }}>
              The WWF estimates We're losing<br></br>
              27 Football fields of forest every minute
            </h1>
            <h3>
              Be a part of our initiative to take a small step in right
              direction!
            </h3>
          </div>
          <div className="row  ">
            <div className="col-md-7    ">
              <div className="wrapper-body2">
                <div className="rhomboid-1">
                  <img src={rhomb1}></img>
                </div>
                <div className="p1">
                  <p>
                    The Titan Go Green initiative is your opportunity to join
                    this collective effort to a greener future. It only takes a
                    few rupees to plant a tree with us. We will do the rest !
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="gif-box ">
                <video autoPlay loop muted>
                  <source src={treevideo} type="video/mp4" />
                </video>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>

        <div id="sponsorATree" >
          <div className="formimg">
            <Parallax strength={250} bgImage={formimg}>
              <div className=" col-md-12 form-box ">
                <div className="contribute-form">
                  <img src={rhomb2} className="rhomb-2"></img>

                  <form class="form-group" onSubmit={handleFormSubmit}>
                    <div className="form1">
                      <input
                        placeholder="Enter Your Name"
                        minlength="1"
                        maxlength="30"
                        value={values.name}
                        onChange={handleChange1("name")}
                        className="input-size"
                      ></input>
                      <br />
                      {errors.name && (
                        <p style={{ color: "red",fontWeight:"bold" }}>{errors.name}</p>
                      )}
                      <input
                        placeholder="Enter Your Email"
                        value={values.email}
                        onChange={handleChange1("email")}
                        className="input-size"
                      ></input>
                      <br />
                      {errors.email && (
                        <p style={{ color: "red",fontWeight:"bold" }}>{errors.email}</p>
                      )}
                      <input
                        placeholder="Enter your Mobile Number"
                        type="number"
                        value={values.number}
                        onChange={handleChange1("number")}
                        className="input-size"
                      ></input>
                      <br />
                      {errors.number && (
                        <p style={{ color: "red",fontWeight:"bold" }}>{errors.number}</p>
                      )}
                      <input
                        placeholder="Enter Pan Number"
                        value={values.pan}
                        onChange={handleChange1("pan")}
                        className="input-size"
                      ></input>
                      <br />
                      {errors.pan && (
                        <p style={{ color: "red" ,fontWeight:"bold"}}>{errors.pan}</p>
                      )}
                    </div>

                    <p className="treep ">
                      How many trees would
                      <br />
                      you like to plant?
                    </p>
                    <span className="tree-p text-center">{views}</span>

                    <div className="primary">
                      <input
                        class="form-control-range"
                        id="formControlRange"
                        defaultValue={10}
                        className="slider"
                        min="0"
                        max="249"
                        step="1"
                        type="range"
                        style={{ "--value": 0, "--min": 0, "--max": 250 }}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="top-p-div">
                      <button disabled>Rs {money}</button>
                    </div>

                    {/* <p className="top-p text-center ">Rs {money}</p> */}

                    <button type="submit" className="btn5">
                      Contribute
                    </button>
                    <Modal
                    class=".modal-fullscreen-sm-down"
                      show={show}
                      onHide={handleClose}
                      animation={false}
                      centered
                    >
                      <Modal.Header closeButton>
                        <Modal.Title style={{ color: "#2b8396" }}>
                          Complete your Payment : Rs {money}
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        Please scan the below QR Code or enter the UPI ID and complete the transaction from your mobile Apps. 
                      </Modal.Body>
                      <Modal.Body>
                        <div className="upi-cont"><div className="upi"><p>UPI ID: biotasoilfoundation@IOB</p></div>
                        <img
                          src={scan}
                          className='upi-img'
                        ></img>
                        </div>
                      </Modal.Body>
                      {/* <Modal.Footer>
          
          <Button className='btn-7' onClick={handleClose}>
          Confirm
          </Button>
        </Modal.Footer> */}
                    </Modal>
                  </form>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
      <div className="bg-video-wrap" id="joinTheRun">

        <div className="video-container">
          <video autoPlay loop muted>
            <source src={jogvideo} type="video/mp4" />
          </video>
          <div className="video-content">
            <div className="row">
              <div className="col-md-6 india-cont">
                <img src={rhomb3} className="rhomb3"></img>
                <p>
                  <strong>Sustainability is a marathon not a sprint!</strong>
                  You can be part of the Titan Go Green movement by supporting
                  the runners who will embark on a greener path to spread
                  awareness. Commencing at-  
                  <strong>
                       Pantnagar in Uttarakhand and culminating in Bangalore
                  </strong>
                  ,touching upon various cities, this run will nurture
                  sustainability every step of the way.
                </p>
              </div>
              <div className="col-md-6">
                <div className="">
                  <img src={India} className="indmap"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="body3-2ndhalf">
        <div className="row">
          <div className="col-md-4">
            <div className="mobile">
              <img src={Mobile}></img>
            </div>
          </div>
          <div className="col-md-8">
            <div className="jog-box2">
              <div style={{ color: "white" }}>
                <p>
                  Extend your valuable support for the Titan Go Green movement
                  by downloading the app and registering for the virtual run
                  today. Join the run and cover 40KM in your vicinity to show
                  support for 1 Lakh trees being planted across India. For every
                  40 Kms you clock on the app we will plant a tree on your
                  behalf.
                </p>
                <h4>
                  Together let’s take a step to live <br></br>
                  sustainably and create harmony!
                </h4>
              </div>
              <div className="app-store">
                {/* <img
                  src={appstore}
                  style={{
                    width: "200px",
                    height: "70px",
                    padding: "5px",
                    borderRadius: "15px",
                  }}
                ></img> */}
                <a href='https://hdor.com/app/#/titan-user-login' target='_blank'>
                <img
                  src={playstore}
                  style={{
                    width: "200px",
                    height: "70px",
                    padding: "5px",
                    borderRadius: "15px",
                  }}
                ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="body4 container ">
        <div
          id="takeThePledge"
          className=" row d-flex justify-content-center youtube2"
        >
          <ReactPlayer
            controls
            url="https://youtu.be/VBebiiFQmzg"
            width="80%"
            height="500px"
          />
        </div>
        <div>
          <div className="row ">
            <div className="wrapper-body4">
              <div className="col-md-6 wrapper-body41 ">
                <div className="wrapper-body41-1">
                  <img src={hug}></img>
                </div>
              </div>
              <div className="col-md-6 wrapper-body41">
                <img src={rhomb4} className="rhomb-4"></img>
                <p className="p12">
                  You can also be part of this movement to impact change by
                  taking up smaller initiatives under the Titan Go Green
                  umbrella. Right from conserving water to reducing the use of
                  single use plastic... possibilities are endless! To get you
                  started we have compiled a list for you. Please read it and
                  take it upon yourself to do your part.
                </p>
                <button className="btn4"  ><a download='TitanPledge' target='_blank' href="https://res.cloudinary.com/dvli2yrzi/image/upload/v1662112662/Titan_Pledge__A4.pdf">Download</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
