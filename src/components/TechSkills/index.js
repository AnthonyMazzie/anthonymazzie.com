import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import Icon4 from "../../images/coding.svg";
import Icon5 from "../../images/thought_process.svg";
import Icon6 from "../../images/teaching.svg";
import Icon7 from "../../images/process.svg";
import AWSCloudPractitioner from "../AWS/cloud_prac";
import AWSSolutionsArchitectAss from "../AWS/solutions_arch_ass";

import {
  TechSkillsContainer,
  TechSkillsWrapper,
  TechSkillsH1,
  TechSkillsCard,
  TechSkillsIcon,
  TechSkillsH2,
  TechSkillsP,
  CredentialsCard,
} from "./TechSkillsElements";

import Aos from "aos";
import "aos/dist/aos.css";

const TechSkills = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <TechSkillsContainer id="tech_skills">
      <div data-aos="fade-left">
        <TechSkillsH1>Tech Skills</TechSkillsH1>
        <TechSkillsWrapper>
          <TechSkillsCard>
            <TechSkillsH2>Front End Languages</TechSkillsH2>
            <TechSkillsIcon src={Icon4} />
            <Marquee
              direction="right"
              pauseOnHover="true"
              pauseOnClick="true"
              speed="125"
              gradientColor="255 255 255"
              style={{ backgroundColor: "black", color: "ghostwhite" }}
            >
              <TechSkillsP>HTML - CSS - JavaScript</TechSkillsP>
            </Marquee>
          </TechSkillsCard>
          <TechSkillsCard>
            <TechSkillsH2>Back End Languages</TechSkillsH2>
            <TechSkillsIcon src={Icon5} />
            <Marquee
              direction="left"
              pauseOnHover="true"
              pauseOnClick="true"
              speed="125"
              gradientColor="255 255 255"
              style={{ backgroundColor: "black", color: "ghostwhite" }}
            >
              <TechSkillsP>
                Python - JavaScript/TypeScript - Java - C - C++
              </TechSkillsP>
            </Marquee>
          </TechSkillsCard>
          <TechSkillsCard>
            <TechSkillsH2>Tools / Frameworks / Libraries</TechSkillsH2>
            <TechSkillsIcon src={Icon6} />
            <TechSkillsP>
              Git/GitLab, NodeJS, ReactJS, Gradle/Maven, Postman, MySQL/SQL,
              Neo4J, JUnit, Mockito, MaterialUI, Bootstrap.
            </TechSkillsP>
          </TechSkillsCard>
          <TechSkillsCard>
            <TechSkillsH2>Infrastructure</TechSkillsH2>
            <TechSkillsIcon src={Icon7} />
            <Marquee
              direction="left"
              pauseOnHover="true"
              pauseOnClick="true"
              speed="125"
              gradientColor="255 255 255"
              style={{ backgroundColor: "black", color: "ghostwhite" }}
            >
              <TechSkillsP>AWS - Terraform</TechSkillsP>
            </Marquee>
          </TechSkillsCard>
        </TechSkillsWrapper>
        <TechSkillsH1>Certifications</TechSkillsH1>
        <CredentialsCard>
          <AWSCloudPractitioner />
          <AWSSolutionsArchitectAss />
        </CredentialsCard>
      </div>
    </TechSkillsContainer>
  );
};

export default TechSkills;
