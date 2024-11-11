import React, { useState, useEffect, useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const images = [
    require("../../assets/images/singaprimemini.jpg"),
    require("../../assets/images/indiaafrica.jpeg"),
    require("../../assets/images/dishantop.jpg"),
    require("../../assets/images/sih.jpg"),
    require("../../assets/images/sft.jpeg"),
    require("../../assets/images/HereHack.jpeg"),
    require("../../assets/images/rajasthan.jpg"),
    require("../../assets/images/japanindia.jpeg"),
    require("../../assets/images/csi.jpg"),
    require("../../assets/images/pentathon.jpeg"),
    require("../../assets/images/panel.jpeg"),
    require("../../assets/images/sfit.jpeg"),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Faster change every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text="My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <div className="carousel">
              <img
                alt="carousel"
                src={images[currentIndex]}
                className="carousel-image"
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
