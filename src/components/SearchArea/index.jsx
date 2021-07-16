import { DivHeader, ListContainer, Container } from "./style";
import { useCourses } from "../../providers/Courses";
import star from "../../assets/star.svg";
import { useCourse } from "../../providers/Course";
import { useHistory } from "react-router-dom";
import { useUsers } from "../../providers/Users";
import { useState } from "react";
import { ModalContainer } from "../FilterCourses/style";

import ModalPurchaseClass from "../ModalPurchaseClass";

const SearchArea = () => {
  const { courses, filteredCourses } = useCourses();
  

  const { setCourse } = useCourse();
  const history = useHistory();

  const{user} = useUsers()
  const [modal, setModal] = useState({status: false, item: {}})
  
 

  const HandleCourse = (course) => {
    setCourse(course);
    history.push("/course");
  };

  const handleModal = (item) => {
    setModal({status: true, item: {item}})
    
  }
  const closeModal = ()=> {
    setModal({status: false, item: {}})
  }


  return (
    <>
      <DivHeader>
        <div>NOME</div>
        <div>CATEGORIA</div>
        <div className="duration">DURAÇÃO</div>
        <div>VALOR</div>
        <div className="avaliation">AVALIAÇÃO</div>
      </DivHeader>
      <Container>
        {filteredCourses.length
          ? filteredCourses?.map((item, index) => {
              return (
                <ListContainer key={index} onClick={() => HandleCourse(item)}>
                  <div>
                    {item.name.length > 22
                      ? item.name.substring(0, 22) + "..."
                      : item.name}
                  </div>
                  <div>{item.category}</div>
                  <div className="total">{item.totalHours}</div>
                  <div>R$ {item.price}</div>
                  <div>
                    <img className="star" src={star} alt="" />
                    {item.rating}
                  </div>
                </ListContainer>
              );
            })
          : courses?.map((item, index) => {
              return (
                <ListContainer key={index} onClick={!user.isStudent? () => HandleCourse(item): () =>handleModal(item)}>
                  <div>
                    {item.name.length > 22
                      ? item.name.substring(0, 22) + "..."
                      : item.name}
                  </div>
                  <div>{item.category}</div>
                  <div className="total">{item.totalHours}</div>
                  <div>R$ {item.price}</div>
                  <div>
                    <img className="star" src={star} alt="" />
                    {item.rating}
                  </div>
                </ListContainer>
              );
            })}
            {modal.status && <ModalContainer>
              <ModalPurchaseClass title = {modal.item.item.name}
                    value = {modal.item.item.price}
                    qtdHours = {modal.item.item.totalHours}
                    rating = {modal.item.item.rating}
                    user = {user.name}
                    onclick={closeModal}
                    description={modal.item.item.description}
                    item={modal.item.item}
                    handleCourse={HandleCourse}
  />
              </ModalContainer>}
              
      </Container>
    </>
  );
};

export default SearchArea;
