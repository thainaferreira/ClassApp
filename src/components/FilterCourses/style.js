import styled from "styled-components";

export const ContainerFilter = styled.div`
  display: flex;
  width: 80%;
  height: 100px;
  max-width: 1300px;
  margin: 0 auto;
  justify-content: space-between;
  @media (min-width: 360px) {
    width: 100%;
    height: 80px;
  }
`;

export const CoursesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 20%;
  h1 {
    font-size: 3rem;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  button {
    font-size: 24px;
    height: 40px;
    width: 215px;
    background-color: var(--call-to-action);
    padding: 4px;
    border-radius: 12px;
    margin-bottom: 5px;
    color: #fff;

    @media (min-width: 360px) {
      font-size: 20px;
      height: 36px;
      width: 140px;
    }
  }
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;
