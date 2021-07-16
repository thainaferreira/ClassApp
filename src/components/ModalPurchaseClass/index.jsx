import {
  Container,
  ContainerRow,
  RowCell,
  IconClose,
  IconMoney,
  IconClock,
  IconStar,
  IconUser,
  ContainerInput,
} from "./style";
import Button from "../Button";

const ModalPurchaseClass = ({
  title = "Titulo Teste",
  value = "20.00",
  qtdHours = 20,
  rating = "4.0",
  user = "Leonardo Junior",
  onclick,
  description,
  handleCourse,
  item
  
}) => {
  

  return (
    <>
      <Container>
        <ContainerRow>
          <h3>{title}</h3>
          <IconClose onClick={onclick}/>
        </ContainerRow>

        <ContainerRow className="RowIcons">
          <RowCell>
            <IconMoney />
            <p>{value}</p>
          </RowCell>
          <RowCell>
            <IconClock />
            {qtdHours > 1 ? <p>{qtdHours} horas</p> : <p>{qtdHours} hora</p>}
          </RowCell>
          <RowCell>
            <IconStar />
            <p>{rating}</p>
          </RowCell>
        </ContainerRow>

        <ContainerRow className="RowProfile">
          <RowCell>
            <IconUser />
          </RowCell>
          <RowCell className="UserProfile">
            <h3>{user}</h3>
            <p>ver perfil</p>
          </RowCell>
        </ContainerRow>

        <ContainerRow className="RowInputInfo">
          <p>Descrição do curso:</p>
          <ContainerInput>
           <div>
             <p>
             {description}
             </p>
           </div>
          </ContainerInput>
        </ContainerRow>

        <ContainerRow className="RowButton">
          <Button colorBG={"var(--color-theme)"} onclick={()=> handleCourse(item)}>Comprar</Button>
        </ContainerRow>
       
      </Container>
    </>
  );
};

export default ModalPurchaseClass;
