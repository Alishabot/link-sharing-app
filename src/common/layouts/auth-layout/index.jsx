import PropTypes from "prop-types";
import Container from "./index.styled";

const AuthLayout = (props) => {
  return (
    <Container>
      <div className="container__logo">
        <img alt="devlinks app logo" src="/assets/logo.png" />
      </div>
      <section className="container__content">{props.children}</section>
    </Container>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.element,
};

export default AuthLayout;
