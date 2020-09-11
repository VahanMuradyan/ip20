import React, { useState, useEffect } from "react";
import EventInformation from "./EventInformation";
import Countdown from "./Countdown";
import About from "./About";
import Programme from "./Programme";
import Agenda from "./Agenda";
import PromoVideo from "./PromoVideo";
import SideMenu from "./SideMenu";

const Home = () => {
  const [blocks, setBlock] = useState([
    {
      label: "Intro",
      element: "section1",
      active: false,
      background: "dark",
    },
    {
      label: "About",
      element: "section2",
      active: false,
      background: "light",
    },
    {
      label: "Rationale",
      element: "section3",
      active: false,
      background: "dark",
    },
    {
      label: "Agenda",
      element: "section4",
      active: false,
      background: "dark",
    },
  ]);

  const [mode, setMode] = useState();

  useEffect(() => {
    setActive();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", setActive);

    return () => window.removeEventListener("scroll", setActive);
  }, [blocks]);

  const setActive = () => {
    let blocksClone = [...blocks],
      navMode;

    blocksClone.forEach((e, i, arr) => {
      let currentElem = document.getElementById(e.element),
        nextElement =
          i + 1 < arr.length
            ? document.getElementById(arr[i + 1].element)
            : { offsetTop: 10000000 };

      if (
        window.scrollY >= currentElem.offsetTop &&
        window.scrollY < nextElement.offsetTop
      ) {
        e.active = true;
      } else {
        e.active = false;
      }

      if (
        window.scrollY >=
          currentElem.offsetTop - (window.innerHeight * 50) / 100 &&
        window.scrollY < nextElement.offsetTop - (window.innerHeight * 50) / 100
      ) {
        navMode = e.background;
      }
    });

    setBlock(blocksClone);
    setMode(navMode);
  };

  return (
    <div className="homepage-container">
      <nav id="cd-vertical-nav">
        <ul>
          {blocks.map((block, index) => {
            return (
              <SideMenu
                key={index}
                label={block.label}
                element={block.element}
                active={block.active}
                mode={mode}
              />
            );
          })}
        </ul>
      </nav>
      <EventInformation />
      <Countdown />
      <About />
      <Programme />
      <PromoVideo />
      <Agenda />
    </div>
  );
};

export default Home;
