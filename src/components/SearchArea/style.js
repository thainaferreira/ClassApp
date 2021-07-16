import styled from "styled-components";

export const DivHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr 0.5fr;
  grid-gap: 20px;
  background-color: var(--color-theme);
  color: var(--background-primary);
  width: 95%;
  max-width: 1300px;
  margin: 20px auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0 0;
  padding: 16px;
  @media (max-width: 360px) {
    width: 100%;
    .duration {
      display: none;
    }
  }
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr 0.5fr 0.5fr;
  grid-gap: 20px;
  margin: 8px auto;
  background-color: var(--hightlight-shadow);
  height: 55px;
  border-radius: 20px;
  font-size: 14px;
  color: #000000;
  max-width: 1300px;
  width: 95%;
  padding: 8px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  cursor: pointer;
  div {
    max-width: 100px;
  }

  @media (max-width: 360px) {
    display: flex;
    justify-content: space-around;
    font-size: 10px;
    .total,
    .star {
      display: none;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 70%;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--hightlight-shadow);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-theme);

    border-radius: 5px;
  }
  @media (max-width: 360px) {
    overflow-y: unset;
  }
`;
