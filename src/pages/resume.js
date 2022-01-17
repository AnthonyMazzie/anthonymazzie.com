import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ButtonLink } from "./../components/ButtonLink";

const ResumePage = () => {
  return (
    <Container maxWidth="sm">
      <Box>
        <iframe
          src="https://drive.google.com/file/d/1t7RLzF7P0wJ9p6O1hhFSDTzM2rxwvC9R/preview"
          width="100%"
          height="800pt"
          allow="autoplay"
          title="AnthonyMazzieResume_2021"
        ></iframe>
      </Box>
      <Box sx={{ marginTop: "50px", marginBottom: "50px" }}>
        <ButtonLink to="/">Return</ButtonLink>
      </Box>
    </Container>
  );
};

export default ResumePage;
