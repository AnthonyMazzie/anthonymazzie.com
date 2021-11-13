import React, { useEffect } from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  ImgWrap,
  Img,
} from "./ContactElements";

import Aos from "aos";
import "aos/dist/aos.css";
import Form from "../Form/Form";

const Contact = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
}) => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <div data-aos="flip-up">
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Form />
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
  );
};

export default Contact;
