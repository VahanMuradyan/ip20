import React from 'react';
import linesImg from "../img/lines.png";

const RegistrationTitle = () => {
  return (
    <div className="registration-title-section">
      <div
        className="title-img"
        style={{ backgroundImage: `url(${linesImg})` }}
      >
        <div className="title-cube"></div>
      </div>
      <div className="registration-title">
        <p>Registration Form</p>
      </div>
    </div>
  )
}

export default RegistrationTitle;