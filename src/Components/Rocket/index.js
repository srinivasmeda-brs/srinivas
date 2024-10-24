import { useEffect, useState } from "react";
import React from "react";
import Header from "../Header";
import img1 from "../../assets/images/images.jpeg";

import "./index.css"

const Rocket = () => {
  const [position, setPosition] = useState(0);
  const [flying, setFlying] = useState(false);

  const launch = () => {
    setFlying(true);
  };

  useEffect(() => {
    let up;
    if (flying) {
      up = setInterval(() => {
        setPosition((prevPosition) => {
          if (prevPosition >= 400) {
            clearInterval(up);
            setFlying(false);
            return 0; // Reset position after reaching the top
          }
          return prevPosition + 5;
        });
      }, 10);
    }
    return () => clearInterval(up);
  }, [flying]);

  return (
    <>
      <Header />
      <div className="rocket-container">
        <div className="launch-area">
          <button className="launch-button" onClick={launch}>Start</button>
          <img
            src={img1}
            alt="Rocket"
            className={`rocket-image ${flying ? 'flying' : ''}`}
            style={{ bottom: position }}
          />
        </div>
      </div>
    </>
  );
};

export default Rocket;
