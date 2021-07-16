import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

export const ClassesContext = createContext();

export const ClassProvider = ({ children }) => {
  const [classes, setClasses] = useState([]);
  const [classUser, setClassUser] = useState([]);

  const token = JSON.parse(localStorage.getItem("@ClassApp:token")) || null;

  const getStudent = (courseSelected, setLoaded) => {
    setClassUser(
      classes.filter(
        (element) => courseSelected === element.coursesId && element.studentList
      )
    );

    let students = [];
    console.log(classUser);
    for (let i = 0; i < classUser.length; i++) {
      classUser[i].studentList.forEach((student) => {
        if (!students.includes(student)) {
          api
            .get(`/users/${student}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((response) => students.push(response.data));
        }
      });
    }
    setTimeout(() => setLoaded(true), 400);
    return students;
  };

  useEffect(() => {
    api
      .get("/class", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setClasses(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ClassesContext.Provider value={{ classes, setClasses, getStudent }}>
      {children}
    </ClassesContext.Provider>
  );
};

export const useClasses = () => useContext(ClassesContext);
