import styled from "styled-components";

export const ContainerConfiguration = styled.div`
  width: 90%;
  height: 70vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
`;
export const Title = styled.h1`
  font-size: 2.3rem;
  margin: 29px 0 28px 70px;
`;

export const ChangeAvatar = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 220px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  h2 {
    font-size: 18px;
    padding-top: 10px;
    text-align: center;
  }

  img {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    display: block;
    margin: 30px auto;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerInfo = styled.div`
  display: flex;
  width: 600px;
  height: 80%;
  @media (max-width: 1440px) {
    width: 400px;
  }

  @media (max-width: 700px) {
    height: 600px;
  }

  @media (max-width: 425px) {
    width: 300px;
  }
`;

export const Image = styled.img`
  width: 250px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerImages = styled.div`
  display: flex;
  height: 80%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
