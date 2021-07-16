import { CardInfoContainer } from "./style";
import imgUser from "../../assets/icone usuario.png";
import { BiSend } from "react-icons/bi";
import { IconContext } from "react-icons";

const CardInfo = ({ name, email, course, d }) => {
  return (
    <CardInfoContainer>
      <div className="student">
        <div>
          <img src={imgUser} alt="" />
        </div>
        <div className="info">
          <h3>{name}</h3>
          <p>
            <strong>Email: </strong>
            {email}
          </p>
          <p>
            <strong>Curso(s): </strong>
            {course}
          </p>
        </div>
      </div>
      <div className="buttonContainer">
        {/* <button>
          Enviar mensagem
          <IconContext.Provider value={{ size: "20px" }}>
            <BiSend />
          </IconContext.Provider>
        </button> */}
      </div>
    </CardInfoContainer>
  );
};

export default CardInfo;
