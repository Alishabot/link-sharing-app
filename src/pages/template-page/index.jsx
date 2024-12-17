import PropTypes from "prop-types";
import Container from "./index.styled";

const TemplatePage = (props) => {
  return <Container>Our nice template component {props.children}</Container>;
};

TemplatePage.propTypes = {
  children: PropTypes.element,
};

export default TemplatePage;