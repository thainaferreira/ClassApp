import GlobalStyle from "./styles/global";
import Courses from "./pages/Courses";
import ModalEditCourse from "./components/ModalEditCourse";
import ModalCreateCourse from "./components/ModalCreateCourse";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Courses />
      <ModalEditCourse />
      <ModalCreateCourse />
      <Routes />
    </>
  );
}

export default App;
