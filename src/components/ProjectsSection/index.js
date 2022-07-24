import React, { useEffect, useState } from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  SubTitle,
  ImgWrap,
  Img,
} from "./ProjectElements";

import Aos from "aos";
import "aos/dist/aos.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import EducationData from "./educationData";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ProjectsSection = ({
  lightBg,
  id,
  imgStart,
  lightText,
  headLine,
  darkText,
  description1,
  description2,
  img,
  alt,
}) => {
  const [educationItems] = useState(EducationData);

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
                  <Heading lightText={lightText}>{headLine}</Heading>
                  <SubTitle darkText={darkText}>{description1}</SubTitle>
                  <SubTitle darkText={darkText}>{description2}</SubTitle>
                  <ul>
                    {educationItems.map((education) => (
                      <Accordion key={education.id}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id={education.id}
                        >
                          <Stack
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                            spacing={2}
                          >
                            <Typography variant="text">
                              {education.title}
                            </Typography>
                          </Stack>
                        </AccordionSummary>
                        <AccordionDetails sx={{ textAlign: "center" }}>
                          <Typography sx={{ marginBottom: "20px" }}>
                            My grade:{" "}
                            <span className="badge bg-primary rounded-pill">
                              {education.grade}
                            </span>
                          </Typography>
                          <Typography>{education.description}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    ))}
                  </ul>
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
