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
  description1,
  description2,
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
                  <SubTitle darkText={darkText}>{description1}</SubTitle>
                  <SubTitle darkText={darkText}>{description2}</SubTitle>
                  <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Digital Logic
                      <span class="badge bg-primary rounded-pill">A-</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Problem Solving in Software Engineering
                      <span class="badge bg-primary rounded-pill">A</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Object-Oriented Programming
                      <span class="badge bg-primary rounded-pill">C+</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Data Structures and Algorithms
                      <span class="badge bg-primary rounded-pill">B</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Embedded Systems 1
                      <span class="badge bg-primary rounded-pill">A</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Principles of Programming Languages
                      <span class="badge bg-primary rounded-pill">B</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Software Development Practices
                      <span class="badge bg-primary rounded-pill">B+</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Construction of User Interfaces
                      <span class="badge bg-primary rounded-pill">A</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Introduction to Computer Architecture and Machine-Level
                      Programming
                      <span class="badge bg-primary rounded-pill">B-</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Database Management Systems
                      <span class="badge bg-primary rounded-pill">C</span>
                    </li>
                  </ul>
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
