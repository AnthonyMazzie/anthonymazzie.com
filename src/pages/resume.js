import React from "react";
import ResumePDF from "./2021_Resume_Mazzie.pdf";

const ResumePage = () => {
  return (
    <div>
      <iframe
        src={ResumePDF}
        width="100%"
        height="800pt"
        allow="autoplay"
        title="AnthonyMazzieResume_2021"
      ></iframe>
    </div>
  );
};

export default ResumePage;
