import React from 'react';
import linesImg from "../img/lines.png";
import handshake from "../img/handshake.svg";
import share from "../img/share.svg";
import lightbulb from "../img/lightbulb.svg";
import grouplines from "../img/grouplines.svg";

const Programme = () => {
  return (
    <div id="section3" className="programme-section">
      <img className="grouplines" src={grouplines} />
      <div className="container programme-container">
        <div className="programme-title-section">
          <div style={{ position: 'relative' }}>
            <div
              className="title-img"
              style={{ backgroundImage: `url(${linesImg})` }}
              >
            </div>
            <div className="title-cube"></div>
          </div>
          <div className="programme-title">
            <p>Rationale</p>
          </div>
        </div>
        <div className="forum-desc">
          <p>The Global IP Challenges Forum (IP20+) aims to bring together the IP offices operating at the G20 countries to call for the following proposed priorities in response to Global Pandemics & Emergencies:</p>
        </div>
        <div className="forum-aims">
          <div className="operation-measures">
            <div><img src={handshake} /></div>
            <div>Harmonizing IP Operation Measures</div>
          </div>
          <div className="policy">
            <div><img src={share} /></div>
            <div>Share IP Policy</div>
          </div>
          <div className="knowledge">
            <div><img src={lightbulb} /></div>
            <div>Dissemination of IP Knowledge</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Programme;