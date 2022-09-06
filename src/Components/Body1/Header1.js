import React from "react";
import Navbar2 from "./Navbar2";
import Container from "react-bootstrap/Container";

function Header1() {
  return (
    <div className="header-img">
      <Container>
        <div className="row">
          <div className="col-md-7 "></div>
          <div className=" col-md-5  headbox ">
            <div className="headbox-1">
              <h1>
                10% more trees in cities could reduce temperature of the area by
                2.2 °C
              </h1>
              <hr></hr>
              <p>
                The Titan Go Green movement aims to plant over 1,00,000 trees
                across India in a span of 40 days.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header1;
