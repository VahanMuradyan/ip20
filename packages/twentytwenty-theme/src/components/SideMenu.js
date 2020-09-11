import React from "react";

const SideMenu = (props) => {

  const toElement = element => {
    console.log(document.getElementById(element))
    window.scrollTo({
      behavior: "smooth",
      top: document.getElementById(element).offsetTop,
    });
  }

  return (
      <li>
        <a onClick={() => toElement(props.element)} className={props.active ? 'is-selected' : ''}>
          <span className={`cd-dot ${props.mode === 'dark' ? '' : 'cd-dot-on-white'}`}></span>
          <span className={`cd-label ${props.mode === 'dark' ? '' : 'cd-label-on-white'}`}>{props.label}</span>
        </a>
      </li>
  )
}

export default SideMenu;