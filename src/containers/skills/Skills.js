import React, {useState, useEffect, useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const [currentIndex, setCurrentIndex] = useState(0);
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
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Faster change every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {/* {illustration.animated ?
             (
              <DisplayLottie animationData={codingPerson} />
            ) : ( */}
              {/* <img
                alt="Man Working"
                src={require("../../assets/images/indiaafrica.jpeg")}
              ></img> */}
                    <div className="carousel">
              <img
                alt="carousel"
                src={images[currentIndex]}
                className="carousel-image"
              />
            </div>
            
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
