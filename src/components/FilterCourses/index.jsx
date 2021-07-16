import {ContainerFilter, ModalContainer} from "./style"
import Button from "../Button"
import {FaFilter} from "react-icons/fa"
import {IconContext} from "react-icons"
import {CoursesContainer, ContainerButton} from "./style"
import ModalCreateCourse from "../ModalCreateCourse"
import Modal from "../Modal"
import { useState , useEffect} from "react"
import { useUsers} from "../../providers/Users"




const FilterCourses = () => {

  const [modal, setModal] = useState(false)
  
  const { user, handleUser } = useUsers();
 
  useEffect(() => {
    handleUser();
    console.log(user)
  }, []);

  const handleModal = ()=> {
    setModal(!modal)
  }

  return(
    <ContainerFilter>
      <CoursesContainer>
      <h1>Cursos</h1>
      </CoursesContainer>
      <ContainerButton>
      {!user.isStudent && <button onClick={handleModal}>Criar curso</button>}
      </ContainerButton>
      {modal && <ModalContainer>
        <ModalCreateCourse handleModal={handleModal}></ModalCreateCourse>
      </ModalContainer>}
    </ContainerFilter>
  )
}           

export default FilterCourses