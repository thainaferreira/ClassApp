import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DivWaveLeft = styled.div`
  width: 100vh;
  transform: rotate(90deg);
  position: absolute;
  left: calc(-50vh);
  top: 41vh;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const DivWaveRight = styled.div`
  width: 100vh;
  position: absolute;
  transform: rotate(-90deg);
  right: calc(-50vh);
  top: 41vh;

  @media (max-width: 600px) {
    display: none;
  }
`;
