import { Container, DivWaveLeft, DivWaveRight } from "./style";
import Wave from "react-wavify";

import FormTeacher from "../../components/FormTeacher";

import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Authentication";

import { motion } from "framer-motion";

const RegisterTeacher = () => {
  const history = useHistory();

  const { isLoged } = useAuth();

  if (isLoged() === true) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <motion.div
      initial={{ x: -2000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 2000, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <DivWaveLeft>
          <Wave
            fill="var(--color-theme)"
            paused={false}
            options={{
              height: 0,
              amplitude: 25,
              speed: 0.2,
              points: 3,
            }}
          />
        </DivWaveLeft>
        <FormTeacher style={{ zIndex: 2 }} />
        <DivWaveRight>
          <Wave
            fill="var(--color-theme)"
            paused={false}
            options={{
              height: 0,
              amplitude: 30,
              speed: 0.2,
              points: 3,
            }}
          />
        </DivWaveRight>
      </Container>
    </motion.div>
  );
};

export default RegisterTeacher;
