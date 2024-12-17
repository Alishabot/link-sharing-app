import { Button, Text, TextField } from "../../../../common";
import Container from "./index.styled";
import EmailIcon from "../../../../assets/ph_envelope-simple-fill.svg?react";
import LockIcon from "../../../../assets/ph_lock-key-fill.svg?react";
import { Link } from "react-router";

const RegisterForm = () => {
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
          for="create__password"
          size="sm"
          style={{ color: "var(--label-color)" }}
        >
          Create password
        </Text>
        <TextField
          id="create__password"
          type="password"
          isIconVisible={true}
          iconChildren={<LockIcon />}
          placeholder="At least 8 characters"
        />
      </span>
      <span className="container__group">
        <Text
          as="label"
          for="confirm__password"
          size="sm"
          style={{ color: "var(--label-color)" }}
        >
          Confirm password
        </Text>
        <TextField
          id="confirm__password"
          type="password"
          isIconVisible={true}
          iconChildren={<LockIcon />}
          placeholder="At least 8 characters"
        />
      </span>
      <Text size="sm">Password must contain at least 8 characters</Text>
      <Button variant="fill">Create new account</Button>
      <span className="container__cta">
        <Text>Already have an account?</Text>
        <Link to="/auth/login">
          <Text as="span" style={{ color: "var(--app-color-1)" }}>
            Login
          </Text>
        </Link>
      </span>
    </Container>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
