import React from "react";
import linesImg from "../img/lines.png";
import clock from "../img/clock.svg";

const Agenda = () => {
  return (
    <div id="section4" className="agenda-section">
      <div className="container agenda-container">
        <div className="agenda-title-section">
          <div
            className="title-img"
            style={{ backgroundImage: `url(${linesImg})` }}
          >
            <div className="title-cube"></div>
          </div>
          <div className="agenda-title">
            <p>
              Preliminary Agenda
            </p>
          </div>
        </div>
        <div className="dateTime">
          <h3>Monday 26 October 2020</h3>
          <p>Riyadh Time [GMT+3]</p>
        </div>
        <div className="timelist">
          <img width="15" src={clock} />
          <p>15:00 - 15:20</p>
        </div>
        <p className="bold-text" style={{ marginBottom: '24px' }}>Opening & Welcome</p>
        <p className="bold-text" style={{ marginBottom: '8px' }}>Congratulatory Speech</p>
        <p className="medium-text" style={{ marginBottom: '8px' }}>H.E. Dr. Majid Bin Abdullah AlQasabi</p>
        <p className="light-text" style={{ marginBottom: '24px' }}>Minister of Commerce, Chairman of SAIP Boards of Directors</p>
        <p className="bold-text" style={{ marginBottom: '8px' }}>Opening Remarks</p>
        <p className="medium-text" style={{ marginBottom: '8px' }}>Dr. Abdulaziz AlSwailem</p>
        <p className="light-text" style={{ marginBottom: '24px' }}>CEO of the Saudi Authority for Intellectual Property (SAIP)</p>
        <p className="bold-text" style={{ marginBottom: '48px' }}>WIPO & WHO Keynote Statements</p>
        <div className="timelist">
          <img width="15" src={clock} />
          <p>15:20 - 18:20</p>
        </div>
        <p className="bold-text" style={{ marginBottom: '48px' }}>Participants & Guests Statements</p>
        <div className="timelist">
          <img width="15" src={clock} />
          <p>18:20 - 18:30</p>
        </div>
        <p className="bold-text">Announcement of the Joint Statement</p>
      </div>
    </div>
  )
}

export default Agenda;