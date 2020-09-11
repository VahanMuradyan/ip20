import React, { useState, useEffect } from "react";
import linesImg from "../img/lines.png";
import { styled } from "frontity";
import Link from "./link";

const Countdown = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("10/26/2020").getTime()
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => setNewTime(), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let daysLeft = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hoursLeft = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutesLeft = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let secondsLeft = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      if (numbersToAddZeroTo.includes(daysLeft)) {
        daysLeft = `0${daysLeft}`;
      }
      if (numbersToAddZeroTo.includes(hoursLeft)) {
        hoursLeft = `0${hoursLeft}`;
      }
      if (numbersToAddZeroTo.includes(minutesLeft)) {
        minutesLeft = `0${minutesLeft}`;
      }
      if (numbersToAddZeroTo.includes(secondsLeft)) {
        secondsLeft = `0${secondsLeft}`;
      }

      setState({
        days: daysLeft,
        hours: hoursLeft,
        minutes: minutesLeft,
        seconds: secondsLeft,
      });
    }
  };

  return (
    <div className="countdown-section">
      <div className="container countdown-container">
        <div className="countdown-title-section">
          <div
            className="title-img"
            style={{ backgroundImage: `url(${linesImg})` }}
          >
            <div className="title-cube"></div>
          </div>
          <div className="countdown-title">
            <p>
              The Global IP Challenges Forum will be launched on October 26th,
              2020 in:
            </p>
          </div>
        </div>
        <div className="countdown-cubes-section">
          <div className="countdown-cubes">
            <div className="countdown-cubes-n">{state.days || "00"}</div>
            <div className="countdown-cubes-l">Days</div>
          </div>
          <div className="countdown-cubes">
            <div className="countdown-cubes-n">{state.hours || "00"}</div>
            <div className="countdown-cubes-l">Hours</div>
          </div>
          <div className="countdown-cubes">
            <div className="countdown-cubes-n">{state.minutes || "00"}</div>
            <div className="countdown-cubes-l">Minutes</div>
          </div>
          <div className="countdown-cubes">
            <div className="countdown-cubes-n">{state.seconds || "00"}</div>
            <div className="countdown-cubes-l">Seconds</div>
          </div>
        </div>
        <div>
          <p className="register-to-event-text">
            Register Before <strong>October 5th, 2020</strong> to Attend the{" "}
            <strong>Virtual Meeting!</strong>
          </p>
          {/* <div className="register-to-event-link">
            <StyledLink link="/sign-up/">Register Now</StyledLink>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Countdown;

const StyledLink = styled(Link)`
  background-color: #00649c;
  font-family: "BukraBold";
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  text-decoration: none;
  padding: 16px 48px;

  &:hover {
    background-color: #00496d;
  }
`;
