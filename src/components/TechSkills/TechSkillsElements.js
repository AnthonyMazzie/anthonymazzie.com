import styled from "styled-components";

export const TechSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  @media screen and (max-width: 768px) {
    /* height: 1100px; */
  }

  @media screen and (max-width: 480px) {
    /* height: 1300px; */
  }
`;

export const TechSkillsWrapper = styled.div`
  max-width: 1200px;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const TechSkillsCard = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  margin: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    margin: 10px;
    padding: 20px;
    width: 400px;
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
    width: 350px;
  }
`;

export const CredentialsCard = styled.div`
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  margin: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    margin: 10px;
    padding: 20px;
    width: 600px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    width: 350px;
  }
`;

export const TechSkillsIcon = styled.img`
  height: 125px;
  width: 125px;
  margin-bottom: 5px;
`;

export const TechSkillsH1 = styled.h1`
  text-align: center;
  margin-top: 50px;
  font-size: 48px;
  color: black;
  margin-bottom: 25px;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const TechSkillsH2 = styled.h2`
  font-size: 20px;
  color: white;
  margin-bottom: 5px;
`;

export const TechSkillsP = styled.p`
  font-size: 14px;
  color: white;
  text-align: center;
`;
