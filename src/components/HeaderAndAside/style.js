import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: space-between;
  }
`;

export const AlignContent = styled.div`
  width: 100%;
  height: calc(100vh - 86px);
  @media (max-width: 760px) {
    height: calc(100vh - 86px - 45px);
  }
`;

export const DivChildren = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 7px;
  box-sizing: border-box;
  overflow-y: scroll;
`;
