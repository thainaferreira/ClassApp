import { MainStyled } from "./style";

import HeadAndAside from "../../components/HeaderAndAside";
import CardInfo from "../../components/CardInfo";
import ScrollBar from "../../components/ScrollBar";
import StudentAnimation from "../../animations/StudentAnimation/StudentAnimation.json";
import LottieAnimation from "../../lottie";

import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Authentication";

import { useCourses } from "../../providers/Courses";
import { useUsers } from "../../providers/Users";
import { useClasses } from "../../providers/Class";

import { motion } from "framer-motion";
import api from "../../services/api";

import { useEffect, useState } from "react";

const Students = () => {
  const token = JSON.parse(localStorage.getItem("@ClassApp:token")) || null;

  const { courses } = useCourses();
  const { user } = useUsers();
  const { getStudent, classes } = useClasses();
  const history = useHistory();
  const [loaded, setLoaded] = useState(false);

  const [students, setStudents] = useState([]);

  const filterStudents = () => {
    const filtered = courses.filter((el) => {
      return el.teacherId === user.id || el.userId === user.id;
    });

    let filteredClasses = [];
    filtered.forEach(
      (course) =>
        (filteredClasses = [
          ...filteredClasses,
          ...classes.filter((el) => el.coursesId === course.id),
        ])
    );
    let studentList = [];
    console.log(filteredClasses);
    filteredClasses.forEach((el) => {
      el.studentList.forEach((student) => {
        if (!studentList.includes(student)) {
          studentList = [...studentList, student];
        }
      });
    });

    let studentsFetched = [];
    console.log(studentList);
    studentList.forEach((student) => {
      api
        .get(`/users/${student}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => studentsFetched.push(res.data));
      console.log("fetch");
    });
    setStudents(studentsFetched);
    setTimeout(() => setLoaded(true), 400);
  };

  useEffect(() => {
    if (!loaded) {
      filterStudents();
    }
  }, [loaded]);

  const { isLoged } = useAuth();

  if (isLoged() === false) {
    return <Redirect to="/login" />;
  }

  return (
    //Falta chamar os dados do context
    <motion.div
      initial={{ x: -2000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 2000, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeadAndAside page="students">
        <MainStyled>
          <div className="titulo">
            <h1>DISCENTES</h1>
          </div>
          <ScrollBar className="cards">
            {loaded &&
              students.map((student, index) => {
                return (
                  <CardInfo
                    name={student.name}
                    email={student.email}
                    course={student.course}
                    dateSubscribed={student.dateSubscribed}
                    key={index}
                  />
                );
              })}
          </ScrollBar>
          <div className="animacao">
            <LottieAnimation
              lotti={StudentAnimation}
              height={"100%"}
              width={"90%"}
            />
          </div>
        </MainStyled>
      </HeadAndAside>
    </motion.div>
  );
};

export default Students;
