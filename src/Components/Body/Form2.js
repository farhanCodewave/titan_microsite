import React, { useState, useEffect,  } from "react";
import Validation from "./Validation";
import './Body.css'

function Form2() {
    const [show, setShow] = useState(false);
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
  const [errors, setErrors] = useState({});
const handleChange1 = (props) => (event) => {
    setValues({ ...values, [props]: event.target.value });}

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    // setData1(true);
  };

  const handleChange2 = (e) => {
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
   if (show === false) {
     setSliderValue(9);
   }
 }, [show]);



useEffect(() => {
  console.log("abcde");
  console.log(Object.keys(errors));
  if (
    Object.keys(errors).length === 0 &&
    values.name !== "" &&
    values.email !== "" &&
    values.number !== "" &&
    values.pan !== ""
  ) {
    console.log("dfghjkl");

    setShow(true);
  }
}, [errors]);

useEffect(() => {
  const viewsList = [];
  for (var value = 1; value <= 250; value++) {
    viewsList.push(value);
  }
  setViews(viewsList[sliderValue]);
}, [sliderValue]);


   
  
  



  
  return (
    <div>
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
            <p style={{ color: "red", fontWeight: "bold" }}>{errors.name}</p>
          )}
          <input
            placeholder="Enter Your Email"
            value={values.email}
            onChange={handleChange1("email")}
            className="input-size"
          ></input>
          <br />
          {errors.email && (
            <p style={{ color: "red", fontWeight: "bold" }}>{errors.email}</p>
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
            <p style={{ color: "red", fontWeight: "bold" }}>{errors.number}</p>
          )}
          <input
            placeholder="Enter Pan Number"
            value={values.pan}
            onChange={handleChange1("pan")}
            className="input-size"
          ></input>
          <br />
          {errors.pan && (
            <p style={{ color: "red", fontWeight: "bold" }}>{errors.pan}</p>
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
            onChange={handleChange2}
            min="0"
            max="249"
            step="1"
            type="range"
            style={{ "--value": 0, "--min": 0, "--max": 250 }}
          />
        </div>

        <div className="top-p-div">
          <button disabled>Rs {money}</button>
        </div>
      </form>
    </div>
  );
}

export default Form2