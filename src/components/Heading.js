import styled from "styled-components";
import { Breakpoints } from "../styles/Breakpoints";

export const Heading = styled.h1`
  font-size: 4em;
  font-weight: 600;
  line-height: 1.3;
  font-family: "Khand", sans-serif;
  text-align: center;
  text-transform: uppercase;
  color: white;
  
  ${Breakpoints.lg} {
    font-size: 3em;
  }

  ${Breakpoints.md} {
    font-size: 2.5em;
  }
`;
