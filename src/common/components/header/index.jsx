import PropTypes from "prop-types";
import Container from "./index.styled";
import Heading from "../heading";
import Text from "../text";

const Header = (props) => {
  return (
    <Container>
      <Heading size="md">{props.headingLabel}</Heading>
      <Text size="md">{props.textLabel}</Text>
    </Container>
  );
};

Header.propTypes = {
  headingLabel: PropTypes.string,
  textLabel: PropTypes.string,
};

export default Header;
