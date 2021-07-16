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
import InputSelect from "../InputSelect";
import SelectOption from "../SelectOption";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import Input from "../Input";
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import api from "../../services/api";

const EditInformation = ({ user }) => {
  const history = useHistory();

  const formSchemaCourse = yup.object().shape({
    name: yup
      .string()
      .required("Campo Obrigatório")
      .max(20, "Máximo de 20 caracteres"),
    email: yup
      .string()
      .email("Insira um email válido")
      .required("Campo Obrigatório"),
    category: yup.string().required("Campo Obrigatório"),
    specialization: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchemaCourse) });

  const onSubmitData = (data) => {
    const token = JSON.parse(localStorage.getItem("@ClassApp:token"));

    const decoded = jwt_decode(token);
    const userId = decoded.sub;
    api
      .patch(`/users/${userId}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        //mensagem de exito
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container onSubmit={handleSubmit(onSubmitData)}>
      <SubContainer1>
        <Title>Informações gerais</Title>
      </SubContainer1>
      <SubContainer2>
        <SubContainer21>Nome</SubContainer21>
        <SubContainer22>
          <Input
            colorBG={"black"}
            inputSize={"14px"}
            reference={register("name")}
            placeholder={user.name + "  " + user.surname}
            name="name"
          />
        </SubContainer22>
      </SubContainer2>
      <SubContainer2>
        <SubContainer21>Email</SubContainer21>
        <SubContainer22>
          <Input
            colorBG={"black"}
            inputSize={"14px"}
            reference={register("email")}
            placeholder={user.email}
            name="email"
          />
        </SubContainer22>
      </SubContainer2>
      <SubContainer2>
        <SubContainer21>Especialização</SubContainer21>
        <SubContainer22>
          <Input
            colorBG={"black"}
            inputSize={"14px"}
            reference={register("specialization")}
            placeholder={user.specialization}
            name="specialization"
          />
        </SubContainer22>
      </SubContainer2>
      <SubContainer2>
        <SubContainer21>Categoria</SubContainer21>
        <SubContainer22>
          <InputSelect
            name="category"
            colorBG={"dimgrey"}
            reference={register("category")}
            inputSize={"14px"}
          >
            <SelectOption value={user.subjects}>{user.subjects}*</SelectOption>
            <SelectOption value="Biológicas">Biológicas</SelectOption>
            <SelectOption value="Exatas">Exatas</SelectOption>
            <SelectOption value="Humanas">Humanas</SelectOption>
            <SelectOption value="Linguagens">Linguagens</SelectOption>
            <SelectOption value="Outras">Outras</SelectOption>
          </InputSelect>
        </SubContainer22>
      </SubContainer2>

      <SubContainer2>
        <SubContainer21>Descrição</SubContainer21>
        <SubContainer22>
          <Input
            colorBG={"black"}
            inputSize={"14px"}
            reference={register("description")}
            name="description"
            placeholder={user.description}
          />
        </SubContainer22>
      </SubContainer2>
      <SubContainer3>
        <SubContainer31>
          <Button
            type="submit"
            colorBG={"var(--color-theme)"}
            fontSize={"20px"}
            width={"200px"}
          >
            Enviar alterações
          </Button>
        </SubContainer31>
      </SubContainer3>
    </Container>
  );
};

export default EditInformation;
