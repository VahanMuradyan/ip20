import React, { useRef, useState } from "react";
import play from "../img/play.svg";

const PromoVideo = () => {
  const myRef = useRef();
  const [playing, setPlaying] = useState(false);
  const playVideo = () => {
    myRef.current.play();
    setPlaying(true);
  };
  const pauseVideo = () => {
    myRef.current.pause();
    setPlaying(false);
  };
  return (
    <div className="promo-video-section">
      <video ref={myRef} onClick={pauseVideo}>
        <source
          src="https://test-csb-835946.online/wp-content/uploads/2020/09/SAUDI-TOURISM.mp4"
          type="video/mp4"
        />
      </video>
      {!playing && (
        <div className="text_on_video" onClick={playVideo}>
          <img src={play} />
        </div>
      )}
    </div>
  );
};

export default PromoVideo;
