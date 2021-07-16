import styled from "styled-components";

export const Title = styled.h2``;

export const Title2 = styled.h2`
  color: var(--color-theme);
  font-weight: 500;
`;

export const Info = styled.div`
  display: flex;
  overflow: hidden;
  overflow-y: scroll;
  width: 100%;
  height: 80%;
  margin-top: 20px;
`;

export const Rate = styled.div``;

export const SubContainer1 = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 90px 0 50px;
`;

export const SubContainer2 = styled.div`
  width: 95%;
  height: 75%;
  display: flex;
  justify-content: space-evenly;
`;

export const SubContainer21 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 100%;
`;

export const SubContainerInscritos = styled.ul`
  margin: 0 auto;
  li {
    margin-top: 20px;
    width: 80%;
    display: flex;
    justify-content: flex-start;

    span:nth-child(1) {
      margin-left: 10px;
    }

    span {
      display: flex;
      align-items: center;
      margin-left: 7px;
    }

    img {
      width: 30px;
      height: 30px;
      border-radius: 20px;
    }
  }
`;

export const SubContainer211 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 15px;
  width: 100%;
  height: 90%;
`;

export const SubContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
`;

export const SubContainerRating = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  div {
    margin-top: 20px;
  }
`;

export const SubContainerRating2 = styled.div`
  display: flex;
`;
