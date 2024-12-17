import { AuthLayout, Header } from "../../common";
import { RegisterForm } from "../../features/auth";
import Container from "./index.styled";

const AuthRegisterPage = () => {
  return (
    <AuthLayout>
      <Container>
        <Header
          headingLabel="Create account"
          textLabel="Let’s get you started sharing your links!"
        />
        <RegisterForm />
      </Container>
    </AuthLayout>
  );
};

export default AuthRegisterPage;