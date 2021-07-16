import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

export const ContainerHeader = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  height: 79px;
  top: 7px;
  border-radius: 20px;
  //background color cinza só para ter uma visualização por enquanto
  background-color: var(--background-secondary);

  @media (max-width: 700px) {
    justify-content: space-between;
  }

  @media only screen and (max-width: 360px) {
    .inputContainer {
      display: none;
    }
  }

  .inputContainer {
    position: relative;
    padding-left: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 68%;

    @media (max-width: 700px) {
      display: none;
    }

    .input {
      position: relative;
      display: flex;
      align-items: center;
      width: 302px;
      height: 40px;
      background: rgba(214, 214, 239, 0.25);
      border: 1px solid var(--hightlight-shadow);
      box-sizing: border-box;
      border-radius: 8px;

      @media (max-width: 700px) {
        display: none;
      }

      .search {
        width: 20px;
        height: 20px;
        margin: -3px 0 0 12px;
      }

      input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        margin-left: 12px;
      }
      input::placeholder {
        font-size: 18px;
      }
    }
  }

  .profileContainer {
    width: 32%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .imgContainer {
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }

  .name {
    h2 {
      font-weight: 600;
      font-size: 24px;
      color: #00171f;

      @media (max-width: 860px) {
        font-size: 20px;
      }

      @media (max-width: 700px) {
        display: none;
      }
    }
  }

  .icon {
    span {
    }
  }
`;

export const SearchIcon = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: block;
    align-self: center;
    padding: 20px;
  }
`;

export const Search = styled(BiSearch)`
  cursor: pointer;
`;
