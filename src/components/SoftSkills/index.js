import React, { useEffect } from "react";
import Icon1 from "../../images/comm.svg";
import Icon2 from "../../images/timenew.svg";
import Icon3 from "../../images/mind_map.svg";
import {
  SoftSkillsContainer,
  SoftSkillsWrapper,
  SoftSkillsH1,
  SoftSkillsCard,
  SoftSkillsIcon,
  SoftSkillsH2,
  SoftSkillsP,
} from "./SoftSkillsElements";

import Aos from "aos";
import "aos/dist/aos.css";

const SoftSkills = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <SoftSkillsContainer id="soft_skills">
      <div data-aos="fade-right">
        <SoftSkillsH1>Soft Skills</SoftSkillsH1>
        <SoftSkillsWrapper>
          <SoftSkillsCard>
            <SoftSkillsIcon src={Icon1} />
            <SoftSkillsH2>Communication</SoftSkillsH2>
            <SoftSkillsP>
              I believe that strong collaborative and teamwork skills can
              greatly reduce the degree of software development convolution.
              Teamwork makes the dream work.
            </SoftSkillsP>
          </SoftSkillsCard>
          <SoftSkillsCard>
            <SoftSkillsIcon src={Icon2} />
            <SoftSkillsH2>Organization</SoftSkillsH2>
            <SoftSkillsP>
              Punctuality and time management have always been two of my
              strongest traits. I get it done on time, every time.
            </SoftSkillsP>
          </SoftSkillsCard>
          <SoftSkillsCard>
            <SoftSkillsIcon src={Icon3} />
            <SoftSkillsH2>Problem Solving</SoftSkillsH2>
            <SoftSkillsP>
              Critical thinking and developing creative clever solutions to
              complex problems is why I became an engineer, it is my passion.{" "}
            </SoftSkillsP>
          </SoftSkillsCard>
        </SoftSkillsWrapper>
      </div>
    </SoftSkillsContainer>
  );
};

export default SoftSkills;
