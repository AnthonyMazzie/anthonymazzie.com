import React, { useEffect } from "react";

import Icon4 from "../../images/coding.svg";
import Icon5 from "../../images/thought_process.svg";
import Icon6 from "../../images/teaching.svg";
import Icon7 from "../../images/process.svg";
import {
  TechSkillsContainer,
  TechSkillsWrapper,
  TechSkillsH1,
  TechSkillsCard,
  TechSkillsIcon,
  TechSkillsH2,
  TechSkillsP,
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
            <TechSkillsP>HTML, CSS, JavaScript</TechSkillsP>
          </TechSkillsCard>
          <TechSkillsCard>
            <TechSkillsH2>Back End Languages</TechSkillsH2>
            <TechSkillsIcon src={Icon5} />
            <TechSkillsP>JavaScript, Java, C</TechSkillsP>
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
            <TechSkillsP>AWS</TechSkillsP>
          </TechSkillsCard>
        </TechSkillsWrapper>
      </div>
    </TechSkillsContainer>
  );
};

export default TechSkills;
