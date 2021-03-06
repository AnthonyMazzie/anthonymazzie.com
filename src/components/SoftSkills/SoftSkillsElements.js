import styled from "styled-components";

export const SoftSkillsContainer = styled.div`
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    margin: auto;
    height: 1350px;
  }

  @media screen and (max-width: 480px) {
    /* height: 1300px; */
  }
`;

export const SoftSkillsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 15px;
  }
`;

export const SoftSkillsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 330px;
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
    max-width: 400px;
  }

  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
`;

export const SoftSkillsIcon = styled.img`
  height: 125px;
  width: 125px;
  margin-bottom: 5px;
`;

export const SoftSkillsH1 = styled.h1`
  text-align: center;
  font-size: 48px;
  color: #f7f8fa;
  margin-top: 25px;
  margin-bottom: 25px;
  font-weight: 600;
  margin-top: 5px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const SoftSkillsH2 = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const SoftSkillsP = styled.p`
  font-size: 14px;
  text-align: center;
`;
