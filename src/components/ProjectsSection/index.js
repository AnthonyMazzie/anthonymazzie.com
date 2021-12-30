import React, { useEffect } from "react";
import ExternLink from "./gitLink";
import MazzieCafe from "./mazzieCafeLink";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ImgWrap,
  Img,
  LinkWrap,
} from "./ProjectElements";

import Aos from "aos";
import "aos/dist/aos.css";

const ProjectsSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  img,
  alt,
}) => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <div data-aos="fade-left">
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headLine}</Heading>
                  <SubTitle darkText={darkText}>{description}</SubTitle>

                  <LinkWrap>
                    <ExternLink />
                    <p style={{ color: "black", marginTop: "20px" }}>
                      My newest personal project is linked below (December
                      2021). It's a React app called Mazzie's Cafe. I used this
                      project to help me learn about the useState, useEffect,
                      useContext and useReducer React hooks.
                    </p>
                    <MazzieCafe />
                  </LinkWrap>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </div>
      </InfoContainer>
    </>
  );
};

export default ProjectsSection;
