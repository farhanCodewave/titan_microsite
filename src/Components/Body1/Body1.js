import React from 'react'
import './Body1.css'
import Header1 from './Header1'
import Plantation from '../../Images/Plantation.png'
import shape1 from '../../Images/shape1.png'
import shape2 from "../../Images/shape2.jpg";
import shape3 from "../../Images/shape3.jpg";
import shape4 from "../../Images/shape4.jpg";
import shape5 from "../../Images/shape5.jpg";
import shape6 from "../../Images/shape6.jpg";
import shape7 from "../../Images/shape7.jpg";
import nature1 from "../../Images/nature1.jpg";
import nature2 from "../../Images/nature2.jpg";
import nature3 from "../../Images/nature3.jpg";
import nature4 from "../../Images/nature4.jpg";
import nature5 from "../../Images/nature5.jpg";
import nature6 from "../../Images/nature6.jpg";

function Body1() {
  return (
    <>
      <Header1 />

      <div className="cont-1">
        <div className="container text-center">
          <img src={shape1}></img>
          <br></br>
          <img src={Plantation} style={{ height: "400px" }}></img>
          <div className="text-center">
            <p>
              The plantations or urban forests are rooted in the hybrid Miyawaki
              method and employ nature-based solutions. Each sapling is imbued
              with approximately 8 kgs of biomass, organic manure, microbes, and
              soil rejuvenation organisms. This is an integral part of the soil
              enrichment process that ensures zero carbon effect and healthy
              vertical growth of the plants like in a rainforest.
            </p>
            <p>
              No weedicide or chemical insecticide is used and manual deweeding
              is deployed alongside environment-friendly organic insect
              repellents. Micro sprinklers deliver the right amount of water to
              ensure efficient plant growth.
            </p>
            <p>
              Based on soil type and topography the forest is designed to have
              trees of all varieties such as deciduous, evergreen, flowers, and
              fruit-bearing trees selected from 100 species, and proportionately
              distributed to ensure biodiversity. All the forests are supported
              by rainwater harvesting mechanisms. The forests are maintained
              until they become self-sustainable.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={shape2}></img>
            <p>
              Tulca and Balcooa are the varieties that will be used to create a
              canopy effect in the walkway. It produces more oxygen and hence
              walking in the bamboo garden is healthy.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={nature1}
              style={{ width: "300px", height: "300px" }}
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              src={nature2}
              style={{ width: "300px", height: "300px" }}
            ></img>
          </div>
          <div className="col-md-6">
            <img src={shape3}></img>
            <p>
              Zen garden is a dense plantation is a variety of miyawaki method.
              Sit out area, moving around space will be featured. A green thick
              wall around this garden makes it different
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src={shape4}></img>
            <p>
              Silviculture is a conventional plantation method which is helpful
              in pollination. The distance 8 to 10 feet between trees based on
              variety moderates rate of growth.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={nature3}
              style={{ width: "300px", height: "300px" }}
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              src={nature4}
              style={{ width: "300px", height: "300px" }}
            ></img>
          </div>
          <div className="col-md-6">
            <img src={shape5}></img>
            <p>
              Aroma garden has highly aromatic flowers like Shenbagam,
              Manoranjitham. It creates pleasant atmosphere and also attracts
              bees thus helping biodiversity.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src={shape6}></img>
            <p>
              Miyawaki is a high density forests plantation method which doubles
              up as an oxygen factory. The Miyawaki plantation's air purifying
              and heat control features positively impact mitigation.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={nature5}
              style={{ width: "300px", height: "300px" }}
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              src={nature6}
              style={{ width: "300px", height: "300px" }}
            ></img>
          </div>
          <div className="col-md-6">
            <img src={shape7}></img>
            <p>
              Wetlands complete a full circle of biodiversity. Microorganism and
              small insects that thrive in the water body attracts birds and
              facilitate for pollination. They also act as a carbon sink.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body1