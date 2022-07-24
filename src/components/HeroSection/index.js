import React, { useState } from "react";

import Background from "../../images/nasapic.jpg";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  HeroIntro,
  HeroBtnWrapper,
  AstronautHelmet,
  UserAstronaut,
} from "./HeroElements";
import { ButtonScroll } from "../ButtonScroll";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Background} type="image/jpg" />
      </HeroBg>
      <HeroContent>
        <HeroIntro>Hi, my name is</HeroIntro>
        <HeroH1>Anthony Mazzie.</HeroH1>
        <HeroH2>I design and develop software in the cloud.</HeroH2>
        <HeroP>
          I am a software engineering student focused on building creative and
          innovative technology that will improve the world of tomorrow. I built
          this website to help me learn more about web development.
        </HeroP>
        <HeroBtnWrapper>
          <ButtonScroll
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            About Me {hover ? <UserAstronaut /> : <AstronautHelmet />}
          </ButtonScroll>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
