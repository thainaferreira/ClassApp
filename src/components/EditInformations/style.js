import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  background-color: var(--background-secondary);
  padding-right: 10px;
  border-radius: 15px;
  border: 1px solid #78848d;
`;

export const SubContainer1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

export const SubContainer11 = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  .figure {
    width: 80%;
    height: 80%;
  }
`;

export const Title = styled.h4`
  font-size: 24px;

  @media (max-width: 1440px) {
    font-size: 18px;
  }
`;

export const SubContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 17px;
  border-bottom: 2px solid var(--hightlight-shadow);
  width: 90%;

  @media (max-width: 1440px) {
    font-size: 14px;
  }
`;

export const SubContainer21 = styled.div`
  display: flex;
  align-items: center;

  .figure {
    width: 20px;
    height: 20px;
    color: #78848d;
  }
`;

export const SubContainer22 = styled.div`
  width: 60%;
`;

export const SubContainer3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SubContainer31 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
