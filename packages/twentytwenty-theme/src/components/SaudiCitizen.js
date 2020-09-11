import React from "react";

const SaudiCitizen = (props) => {
  return (
    <div className="saudi-citizen-section">
      <div className="input-fields">
        <label>
          * Title <span> &nbsp;(Public View)</span>
        </label>
        <br />
        <input
          type="text"
          name="delegateTitle"
          value={props.value}
          onChange={(event) => props.onChange(event.target.value)}
          autoComplete="off"
        />
        <div className="example">Mr, Ms, Dr, Prof, etc.</div>
      </div>

      <div className="input-fields">
        <label>
          * First Name <span> &nbsp;(Public View)</span>
        </label>
        <br />
        <input
          type="text"
          name="delegateTitle"
          value={props.value}
          onChange={(event) => props.onChange(event.target.value)}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default SaudiCitizen;
