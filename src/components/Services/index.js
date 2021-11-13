import React, { useEffect } from "react";
import Icon1 from "../../images/comm.svg";
import Icon2 from "../../images/timenew.svg";
import Icon3 from "../../images/coding.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <ServicesContainer id="soft_skills">
      <div data-aos="fade-right">
        <ServicesH1>Soft Skills</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Communication</ServicesH2>
            <ServicesP>
              I believe that strong collaborative and teamwork skills can
              greatly reduce the degree of software development convolution.
              Teamwork makes the dream work.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Organization</ServicesH2>
            <ServicesP>
              Punctuality and time management have always been two of my
              strongest traits. I get it done on time, every time.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Problem Solving</ServicesH2>
            <ServicesP>
              Critical thinking and developing creative clever solutions to
              complex problems is why I became an engineer, it is my passion.{" "}
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </div>
    </ServicesContainer>
  );
};

export default Services;
