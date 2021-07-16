import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

export const AllUsersContext = createContext();

export const AllUsersProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);

  const handleAllUsers = () => {
    const token = JSON.parse(localStorage.getItem("@ClassApp:token")) || null;

    api
      .get(`/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <AllUsersContext.Provider value={{ allUsers, setAllUsers, handleAllUsers }}>
      {children}
    </AllUsersContext.Provider>
  );
};

export const useAllUsers = () => useContext(AllUsersContext);
