import { AuthLayout, Header } from "../../common";
import Container from "./index.styled";
import { LoginForm } from "../../features/auth";

const AuthLoginPage = () => {
  return (
    <AuthLayout>
      <Container>
        <Header
          headingLabel="Login"
          textLabel="Add your details below to get back into the app"
        />
        <LoginForm />
      </Container>
    </AuthLayout>
  );
};

export default AuthLoginPage;