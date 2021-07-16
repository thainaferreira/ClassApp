import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { useUsers } from "../Users";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [course, setCourse] = useState({});

  // const { user } = useUsers();

  return (
    <CourseContext.Provider value={{ course, setCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => useContext(CourseContext);
