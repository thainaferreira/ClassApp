import styled from "styled-components";

import WaveLeft from "../../assets/wave-left.svg";
import WaveRight from "../../assets/wave-right.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerWaveLeft = styled.div`
  width: 200px;
  height: 100vh;
  position: absolute;
  z-index: -1;

  background: url(${WaveLeft}) no-repeat center;
  background-size: cover;
  background-position: center;
`;

export const ContainerWaveRight = styled.div`
  width: 200px;
  height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  background: url(${WaveRight}) no-repeat center;
  background-size: cover;
  background-position: center;

  @media (max-width: 767px) {
    display: none;
  }
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
