import styled from "styled-components";
import vectorWave from "../../assets/vectorWave.svg";
import { Link } from "react-router-dom";

export const LinkStyle = styled(Link)`
  height: 40px;
  width: 215px;
  margin-bottom: 20px;

  @media (max-width: 320px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  h1 {
    margin: 168px 0 0 72px;

    @media (max-width: 320px) {
      margin: 0;
    }
  }
  p {
    margin-top: 32px;
    margin-left: 72px;
    margin-bottom: 24px;
    width: 50%;

    @media (max-width: 320px) {
      margin: 0;
      width: 80%;
    }
  }
  button {
    margin-top: 14px;
    margin-left: 72px;
  }
  a:visited,
  a:link,
  a:hover,
  a:active,
  a {
    text-decoration: none;
    color: inherit;
    width: 215px;
  }

  @media (max-width: 1024px) {
    background-color: var(--color-theme);
    color: var(--background-secondary);
  }

  @media (max-width: 320px) {
    align-items: center;
    justify-content: center;
  }
`;

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;

  @media (min-width: 768px) {
    background-image: url(${vectorWave});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 100%;
    height: 100vh;
    overflow: hidden;
  }
`;

export const Container2 = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: flex-end;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const AnimationContainer = styled.div`
  height: 70%;
  width: 1000px;
  overflow: hidden;

  @media (max-width: 1420px) {
    height: 50%;
    width: 800px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
