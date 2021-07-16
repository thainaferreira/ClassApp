import Button from "../../components/Button";
import {
  AnimationContainer,
  Container,
  Container2,
  HomeContainer,
  LinkStyle,
} from "./style";
import LottieAnimation from "../../lottie";
import distanceEducation from "../../animations/HomeAnimation/distanceEducation.json";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <motion.div
      initial={{ x: -2000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 2000, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HomeContainer>
        <Container>
          <h1>CLASSAPP</h1>
          <p>
            Descubra de forma rápida e prática novas formas de aprender o que
            você mais deseja com o CLASSAPP, o seu mais novo aplicativo de
            ensino. Clique abaixo para se registrar e conhecer seus professores.
          </p>
          <LinkStyle to="/register">
            <Button
              color={"#FDFDFF"}
              colorBG={"#F35D56"}
              height="100%"
              width="100%"
              fontSize={"18px"}
            >
              REGISTRAR
            </Button>
          </LinkStyle>
          <LinkStyle to="/login">
            <Button
              color={"#F35D56"}
              height="100%"
              width="100%"
              fontSize={"18px"}
            >
              ENTRAR
            </Button>
          </LinkStyle>
        </Container>
        <Container2>
          <AnimationContainer>
            <LottieAnimation
              lotti={distanceEducation}
              width="100%"
              height="100%"
            />
          </AnimationContainer>
        </Container2>
      </HomeContainer>
    </motion.div>
  );
};

export default LandingPage;
