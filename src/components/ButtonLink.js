import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ButtonLink = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#010606" : "#1e90ff")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: white;
    border: 2px solid white;
    background: black;
  }
`;
