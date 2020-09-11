import React from "react";
import linesImg from "../img/lines.png";

const EventInformation = () => {
  return (
    <div id="section1" className="event_info_section">
      <div className="video-container">
        <video muted autoPlay loop>
          <source src="https://test-csb-835946.online/wp-content/uploads/2020/09/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="text_on_video">
          <div style={{ margin: "0 14px" }}>
            <p className="event_title">Welcome to the</p>
            <h1 className="event_desc">Global IP Challenges Forum (IP20+)</h1>
            <div className="start_date_section">
              <div>
                <img src={linesImg} />
              </div>
              <div className="start_date">
                <h1>26</h1>
                <p>October</p>
                <h5>2020</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInformation;
