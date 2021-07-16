import HeaderAndAside from "../../components/HeaderAndAside";
import BaseContainer from "../../components/BaseContainer";
import {
  Info,
  SubContainer1,
  SubContainer2,
  SubContainer21,
  SubContainer211,
  Title,
  Title2,
  SubContainerInscritos,
  SubContainerProfile,
  SubContainerRating,
  SubContainerRating2,
  Rate,
} from "./style";
import { useUsers } from "../../providers/Users";
import { useEffect, useState } from "react";
import { useCourse } from "../../providers/Course";
import Button from "../../components/Button";
import { useClasses } from "../../providers/Class";
import imgUser from "../../assets/icone usuario.png";
import { motion } from "framer-motion";
import ScrollBar from "../../components/ScrollBar";
import { AiFillStar } from "react-icons/ai";
const Course = () => {
  const { user, handleUser } = useUsers();
  const { course } = useCourse();
  const { classes, getStudent } = useClasses();
  const [students, setStudents] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    handleUser();
    setStudents(getStudent(course.id, setLoaded));
  }, []);

  return (
    <motion.div
      initial={{ x: -2000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 2000, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderAndAside page="course">
        <SubContainer1>
          <Title>{course.name}</Title>
          {user.isStudent ? (
            <Button
              colorBG={"var(--call-to-action)"}
              height={"35px"}
              width={"140px"}
            >
              Sala
            </Button>
          ) : (
            <>
              {" "}
              <Button
                colorBG={"var(--call-to-action)"}
                height={"35px"}
                width={"140px"}
              >
                Sala
              </Button>
              <Button height={"35px"} width={"140px"}>
                Editar{" "}
              </Button>{" "}
            </>
          )}
        </SubContainer1>
        <SubContainer2>
          <SubContainer21>
            <BaseContainer maxWidth="600px;" maxHeight="200px">
              <Title2>Informações</Title2>
              <Info>{course.description}</Info>
            </BaseContainer>
            <SubContainer211>
              <BaseContainer width="280px" height="220px">
                <Title2>Responsável</Title2>
                <SubContainerProfile>
                  <img
                    src={user.profilePicture ? user.profilePicture : imgUser}
                    alt="Profile"
                  />
                  {user.name}
                </SubContainerProfile>
              </BaseContainer>
              <BaseContainer width="280px" height="220px">
                <SubContainerRating>
                  <SubContainerRating2>
                    <AiFillStar
                      style={{ color: "yellow", width: "25px", height: "25px" }}
                    />
                    <AiFillStar
                      style={{ color: "yellow", width: "25px", height: "25px" }}
                    />
                    <AiFillStar
                      style={{ color: "yellow", width: "25px", height: "25px" }}
                    />
                    <AiFillStar
                      style={{ color: "yellow", width: "25px", height: "25px" }}
                    />
                    <AiFillStar
                      style={{ color: "yellow", width: "25px", height: "25px" }}
                    />
                  </SubContainerRating2>
                  <Rate>{course.rating}</Rate>

                  <div>
                    Duração : <span>{course.totalHours} horas</span>
                  </div>
                </SubContainerRating>
              </BaseContainer>
            </SubContainer211>
          </SubContainer21>
          <BaseContainer width="330px" height="440px;">
            <Title2 onClick={() => console.log(students)}>Inscritos</Title2>
            <SubContainerInscritos>
              {loaded &&
                students.map((key, index) => (
                  <li>
                    <img src={key.profilePicture} alt="" />
                    <span>{key.name}</span> <span>{key.surname}</span>
                  </li>
                ))}
            </SubContainerInscritos>
          </BaseContainer>
        </SubContainer2>
      </HeaderAndAside>
    </motion.div>
  );
};

export default Course;
