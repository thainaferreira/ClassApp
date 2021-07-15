import Configuration from "./pages/Configuration";
import GlobalStyle from "./styles/global";
import Courses from "./pages/Courses";
import ModalEditCourse from "./components/ModalEditCourse";
import ModalCreateCourse from "./components/ModalCreateCourse";
import Routes from "./routes";
import Course from "./pages/Course";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <Course />
    </>
  );
}

export default App;
