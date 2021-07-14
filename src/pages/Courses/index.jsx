import HeaderAndAside from "../../components/HeaderAndAside";
import BaseContainer from "../../components/BaseContainer";
import { useCourses } from "../../providers/Courses";
import {
  SubContainer1,
  SubContainer2,
  SubContainer21,
  SubContainer211,
  Title,
} from "./style";
import { useUsers } from "../../providers/Users";
const Courses = () => {
  const { courses } = useCourses();
  const { user } = useUsers();
  console.log(courses);
  return (
    <HeaderAndAside page="course">
      <SubContainer1>
        <Title>{courses.name}</Title>
      </SubContainer1>
      <SubContainer2>
        <SubContainer21>
          <BaseContainer width="600px;" height="350px">
            Informações
            {courses.description}
          </BaseContainer>
          <SubContainer211>
            <BaseContainer width="280px" height="220px">
              Responsável
              {courses.teacherId}
            </BaseContainer>
            <BaseContainer width="280px" height="220px">
              Duração
              {courses.hours}
            </BaseContainer>
          </SubContainer211>
        </SubContainer21>
        <BaseContainer width="330px" height="440px;">
          Inscritos
        </BaseContainer>
      </SubContainer2>
    </HeaderAndAside>
  );
};

export default Courses;
