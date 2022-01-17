import styled from "styled-components";

export const InfoContainer = styled.div`
  margin-top: 25px;
  padding-top: 35px;
  color: white;
  background: black;

  @media screen and (max-width: 768px) {
    padding: 50 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  margin: auto;
  width: 100%;
  max-width: 1100px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 5px;
`;

export const TopLine = styled.p`
  color: ghostwhite;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ghostwhite;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ghostwhite;
  font-weight: 600;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  text-align: center;
  padding-bottom: 100px;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 10px;
  height: 100%;
  display: block;

  @media screen and (max-width: 720px) {
    position: absolute;
    height: 1px;
    width: 1px;
    right: -50px;
    top: 50px;
  }

  @media screen and (max-width: 480px) {
    position: absolute;
    height: 1px;
    width: 1px;
    right: -50px;
    top: 50px;
  }
`;
