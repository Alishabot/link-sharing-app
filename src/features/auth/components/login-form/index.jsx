import { Button, Text, TextField } from "../../../../common";
import Container from "./index.styled";
import EmailIcon from "../../../../assets/ph_envelope-simple-fill.svg?react";
import LockIcon from "../../../../assets/ph_lock-key-fill.svg?react";
import { Link } from "react-router";

const LoginForm = () => {
  return (
    <Container>
      <span className="container__group">
        <Text
          as="label"
          for="email"
          size="sm"
          style={{ color: "var(--label-color)" }}
        >
          Email address
        </Text>
        <TextField
          id="email"
          isIconVisible={true}
          iconChildren={<EmailIcon />}
          placeholder="e.g. alex@email.com"
        />
      </span>
      <span className="container__group">
        <Text
          as="label"
          for="password"
          size="sm"
          style={{ color: "var(--label-color)" }}
        >
          Password
        </Text>
        <TextField
          id="password"
          type="password"
          isIconVisible={true}
          iconChildren={<LockIcon />}
          placeholder="Enter your password"
        />
      </span>
      <Button variant="fill">Login</Button>
      <span className="container__cta">
        <Text>Don’t have an account?</Text>
        <Link to="/auth/register">
          <Text as="span" style={{ color: "var(--app-color-1)" }}>
            Create account
          </Text>
        </Link>
      </span>
    </Container>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
