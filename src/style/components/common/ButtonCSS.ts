import styled from "styled-components";
import { ButtonProps } from "../../../components/common/Button";

export const ButtonCSS = styled.button<ButtonProps>`
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  height: 4rem;
  width: 10em;
  font-weight: 500;
  

  font-size: ${(props) => props.textsize || "1.3em"};
  background-color: ${(props) => props.bgcolor || "#f9c495"};
  color: ${(props) => props.color || "#fff"};  
  &:hover {
    background-color: ${(props) => props.color || "#fff"};
    box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.1);
    color: ${(props) => props.bgcolor || "#f9c495"};
`;
