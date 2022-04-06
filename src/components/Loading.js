import React from "react";
import styled from "styled-components";


export default function Loading() {
  return (
    <Styled.Loading>
      <Styled.SVG viewBox="25 25 50 50">
        <Styled.Circle cx="50" cy="50" r="20" />
      </Styled.SVG>
    </Styled.Loading>
  );
}

const Styled = {
  Loading: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  `,

  SVG: styled.svg`
    width: 8rem;
    transform-origin: center;
    animation: spin 1.5s ease-in-out infinite;
  `,

  Circle: styled.circle`
    fill: none;
    stroke: var(--red);
    stroke-width: 2;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  `,
};
