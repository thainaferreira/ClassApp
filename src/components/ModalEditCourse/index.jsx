import {
  Container,
  Title,
  SubContainer1,
  SubContainer11,
  SubContainer2,
  SubContainer21,
  SubContainer22,
  SubContainer3,
  SubContainer31,
} from "./style";
import { IoIosCloseCircle, IoIosInformationCircle } from "react-icons/io";
import InputSelect from "../InputSelect";
import SelectOption from "../SelectOption";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import Input from "../Input";
import { useHistory } from "react-router-dom";

const ModalEditCourse = () => {
  const history = useHistory();

  const formSchemaCourse = yup.object().shape({
    name: yup
      .string()
      .required("Campo Obrigatório")
      .max(20, "Máximo de 20 caracteres"),
    price: yup
      .string()
      .required("Campo Obrigatório")
      .max(5, "Máximo de 7 caracteres"),
    hours: yup.string().required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
    link: yup.string().required("Campo obrigatório"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchemaCourse) });

  const onSubmitData = (data) => {
    console.log(data);
  };
  return (
    <Container onSubmit={handleSubmit(onSubmitData)}>
      <SubContainer1>
        <Title>Editar informações do curso</Title>
        <SubContainer11>
          <IoIosCloseCircle className="figure" />
        </SubContainer11>
      </SubContainer1>
      <SubContainer2>
        <SubContainer21>Nome</SubContainer21>
        <SubContainer22>
          <Input
            colorBG={"black"}
            inputSize={"14px"}
            name="name"
            reference={register("name")}
          />
        </SubContainer22>
      </SubContainer2>
      <SubContainer2>
        <SubContainer21>Valor</SubContainer21>
        <SubContainer22>
          <Input
            colorBG={"black"}
            inputSize={"14px"}
            name="price"
            reference={register("price")}
          />
        </SubContainer22>
      </SubContainer2>
      <SubContainer2>
        <SubContainer21>Duração</SubContainer21>
        <SubContainer22>
          <Input
            colorBG={"black"}
            inputSize={"14px"}
            name="hours"
            reference={register("hours")}
          />
        </SubContainer22>
      </SubContainer2>
      <SubContainer2>
        <SubContainer21>Categoria</SubContainer21>
        <SubContainer22>
          <InputSelect
            colorBG={"black"}
            name="category"
            reference={register("category")}
            inputSize={"14px"}
          >
            <SelectOption value=""></SelectOption>
            <SelectOption value="Idiomas">Idiomas</SelectOption>
            <SelectOption value="Tecnologia">Tecnologia</SelectOption>
            <SelectOption value="Ciências Biológicas">
              Ciências Biológicas
            </SelectOption>
            <SelectOption value="Educação">Educação</SelectOption>
            <SelectOption value="Negócios">Negócios</SelectOption>
            <SelectOption value="Marketing e publicidade">
              Marketing e publicidade
            </SelectOption>
            <SelectOption value="Moda e beleza">Moda e beleza</SelectOption>
            <SelectOption value="Saude">Saude</SelectOption>
            <SelectOption value="Turismo">Turismo</SelectOption>
            <SelectOption value="Gastronomia">Gastronomia</SelectOption>
            <SelectOption value="Música">Música</SelectOption>
            <SelectOption value="Arte e entretenimento">
              Arte e entretenimento
            </SelectOption>
            <SelectOption value="Ciências Exatas">Ciências Exatas</SelectOption>
            <SelectOption value="Ciências Humanas">
              Ciências Humanas
            </SelectOption>
            <SelectOption value="Auto-ajuda">Auto-ajuda</SelectOption>
          </InputSelect>
        </SubContainer22>
      </SubContainer2>
      <SubContainer2>
        <SubContainer21>
          Link Reunião
          <IoIosInformationCircle className="figure" />
        </SubContainer21>
        <SubContainer22>
          <Input
            colorBG={"black"}
            inputSize={"16px"}
            name="link"
            reference={register("link")}
          />
        </SubContainer22>
      </SubContainer2>
      <SubContainer3>
        <SubContainer31>
          <Button
            type="submit"
            colorBG={"var(--color-theme)"}
            inputSize={"14px"}
            onclick={() => {}}
          
          >
            Enviar alterações
          </Button>
        </SubContainer31>
      </SubContainer3>
    </Container>
  );
};

export default ModalEditCourse;
