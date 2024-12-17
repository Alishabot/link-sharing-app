import PropTypes from "prop-types";
import Container from "./index.styled";

const Text = (props) => {
  return (
    <Container size={props.size} {...props}>
      {props.children}
    </Container>
  );
};

Text.propTypes = {
  children: PropTypes.element,
  size: PropTypes.oneOf(["sm", "md"]),
};

export default Text;