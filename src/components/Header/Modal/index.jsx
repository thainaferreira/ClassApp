import bgImage from "../../../assets/cifrao.png";
import Modal from "../../Modal";
import Button from "../../Button";
import { IoMdCloseCircle } from "react-icons/io";
import { ModalWalletContainer } from "../../ModalWallet/style";
import { IconContext } from "react-icons";
import moneyImage from "../../../assets/dollar 1.png";
import api from "../../../services/api";
import { useState } from "react";
const Modal2 = (props) => {
  const [wallet, setWallet] = useState([]);

  return (
    <Modal backgroundImage={bgImage}>
      <ModalWalletContainer>
        <header>
          <h2>Saldo na conta</h2>
          <span>
            <IconContext.Provider value={{ size: "30px" }}>
              <IoMdCloseCircle
                onClick={() => {
                  console.log(props.handleOpen());
                }}
              />
            </IconContext.Provider>
          </span>
        </header>
        <div className="money">
          <figure>
            <img src={moneyImage} alt="money" />
          </figure>
          <span>{props.money}</span>
        </div>
        <div className="buttonContainer">
          <Button
            colorBG="#003F66"
            color="#ffffff"
            height="40px"
            width="188px"
            fontSize="18px"
          >
            Adicionar saldo
          </Button>
          <Button color="#003F66" height="40px" width="188px" fontSize="18px">
            Transferir
          </Button>
        </div>
      </ModalWalletContainer>
    </Modal>
  );
};

export default Modal2;
