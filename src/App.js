import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Routes />
    </>
  );
};

export default App;
