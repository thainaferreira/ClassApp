import HeaderAndAside from "../../components/HeaderAndAside";
import BaseContainer from "../../components/BaseContainer";
import { useCourses } from "../../providers/Courses";
import {
  SubContainer1,
  SubContainer2,
  SubContainer21,
  SubContainer211,
  Title,
  Title2,
} from "./style";
import { useUsers } from "../../providers/Users";
import Button from "../../components/Button";
const Courses = () => {
  const { courses } = useCourses();
  // const { user } = useUsers();

  return (
    <HeaderAndAside page="course">
      <SubContainer1>
        <Title>{courses.name}</Title>
        {/* {user.isStudent === true ? (
          <>
            <Button onClick={() => {}}>Sala</Button>
            <Button onClick={() => {}}>Editar</Button>
          </>
        ) : (
          <Button onClick={() => {}}>Sala</Button>
        )} */}
      </SubContainer1>
      <SubContainer2>
        <SubContainer21>
          <BaseContainer width="600px;" height="350px">
            <Title2>Informações</Title2>
            {courses.description}
          </BaseContainer>
          <SubContainer211>
            <BaseContainer width="280px" height="220px">
              <Title2>Responsável</Title2>
              {courses.teacherId}
            </BaseContainer>
            <BaseContainer width="280px" height="220px">
              Duração
              {courses.hours}
            </BaseContainer>
          </SubContainer211>
        </SubContainer21>
        <BaseContainer width="330px" height="440px;">
          <Title2>Inscritos</Title2>
        </BaseContainer>
      </SubContainer2>
    </HeaderAndAside>
  );
};

export default Courses;
