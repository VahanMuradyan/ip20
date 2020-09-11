import React from 'react';
import linesImg from "../img/lines.png";

const About = () => {
  return (
    <div id="section2" className="about-section">
      <div className="container about-container">
        <div className="about-title-section">
          <div style={{ position: 'relative' }}>
            <div
              className="title-img"
              style={{ backgroundImage: `url(${linesImg})` }}
              >
            </div>
              <div className="title-cube"></div>
            </div>
          <div className="about-title">
            <p>
              What is the Global Intellectual Property Challenges Forum?
            </p>
          </div>
        </div>
        <div className="about-description-section">
          <p>The Global Intellectual Property Challenges Forum (IP20+) is an initiative proposed by the Saudi Authority for Intellectual Property (SAIP) 
          to bring together Intellectual Property Offices operating at the G20 countries to tackle and discuss intellectual property (IP) related issues 
          and challenges on the margins of the G20 Summit.
          </p><br />
          <p>Considering the role of the G20 in the global economy, which represents around 80% of the world’s economic output, two-thirds of global 
          population and three-quarters of international trade and recognizing that intellectual property is a key element of innovation-based economy 
          and a promoter for the purpose of fair global trade, IP Offices operating at the G20 countries need to reinforce their role in fostering innovation 
          and technology transfer for economic revival, bridging  global IP divide, and enhancing balanced flexibilities to overcome IP related challenges.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;