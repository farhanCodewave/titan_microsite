// import React, { useState, useEffect } from "react";
// import './Slider.css'
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
// import { styled } from '@mui/material/styles';

// const Pricing = () => {
//   const [money, setMoney] = useState((4000));
//   const [sliderValue, setSliderValue] = useState(10);
//   const [views, setViews] = useState("10");


//   //Set amount of money
//   const handleChange = (e) => {
//     const el = e.target;
//    el.style.setProperty("--value", el.value);

//     let value = el.valueAsNumber;
//     setSliderValue(value);
//     calculateMoney(value);
//   };
//   var start = 400; 
//   var end = 400000
//   var priceList = [];
  
//   for(var i = 10; i<= end/start; i++){
//     priceList.push( i * start )
//   }
// const calculateMoney = (value) => {
//     let ppm = priceList[value];
//     setMoney(ppm);
//   };

//   useEffect(() => {
//     calculateMoney(sliderValue);
//   }, );

//   useEffect(() => {
//     const viewsList = [];
//     for(var value = 10; value <= 1000; value++) {
//       viewsList.push(value);
//   }
// setViews(viewsList[sliderValue]);
//   }, [sliderValue]);

//  ;
//   return (
//     <>
//     <p className="treep">How many trees would<br/>
// you like to plant?</p>
//     <div className="pricing">
//       <div className="primary">
//          <input
//          class="form-control-range" id="formControlRange"
//          defaultValue={10}
//           className="slider"
//           min="0"
//           max="990"
//           step="10"
//           type="range"
//           style={{ "--value": 2, "--min": 0, "--max": 1000}}
//           onChange={handleChange}
//         />
//         <span className="tree-p">{views}</span>
//         </div>
//       <div className="top">
//          <p>Rs {money}</p>
//         </div>
        


//     </div>
//     </>
//   );
// };

// export default Pricing;