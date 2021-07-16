import { ContainerHeader, SearchIcon, Search } from "./style";
import imgUser from "../../assets/icone usuario.png";
import { BiWallet, BiSearch } from "react-icons/bi";
import { IconContext } from "react-icons";
import { useUsers } from "../../providers/Users";
import { useEffect, useState } from "react";
import { useCourses } from "../../providers/Courses";
import { Redirect, useHistory } from "react-router-dom";
import CardAddWallet from "../CardAddWallet";
import ModalWallet from "../ModalWallet";
import api from "../../services/api";
import Modal2 from "./Modal";
const Header = () => {
  const token = JSON.parse(localStorage.getItem("@ClassApp:token")) || null;
  const [value, setValue] = useState("");
  const { user, handleUser } = useUsers();
  const { filterCourses } = useCourses();
  const [open, setOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    handleUser();
  }, []);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    filterCourses(value);
    history.push("/courses");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <ContainerHeader>
      <div className="inputContainer">
        <div className="input">
          <span className="search">
            <IconContext.Provider value={{ size: "28px" }}>
              <Search onClick={() => handleSearch()} />
            </IconContext.Provider>
          </span>
          <input
            type="text"
            placeholder="Procurar Curso"
            onChange={(e) => handleInput(e)}
            onKeyPress={(e) => handleKeyPress(e)}
            value={value}
          />
        </div>
      </div>
      <SearchIcon>
        <IconContext.Provider value={{ size: "28px" }}>
          <BiSearch />
        </IconContext.Provider>
      </SearchIcon>
      <div className="profileContainer">
        <div className="icon">
          <span>
            <IconContext.Provider value={{ size: "30px" }}>
              <BiWallet
                onClick={() => {
                  handleOpen();
                }}
              />
              {open && <Modal2 handleOpen={handleOpen} money={user.money} />}
            </IconContext.Provider>
          </span>
        </div>
        <div className="name">
          {user.isStudent ? (
            <h2>{user.name}</h2>
          ) : user.name ? (
            <h2>Prof {user.surname}</h2>
          ) : (
            <h2>Username</h2>
          )}
        </div>
        <div className="imgContainer">
          <img src={user.profilePicture || imgUser} alt="profile" />
        </div>
      </div>
    </ContainerHeader>
  );
};

export default Header;
