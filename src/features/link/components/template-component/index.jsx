import PropTypes from "prop-types";
import Container from "./index.styled";

const TemplateComponent = (props) => {
  return <Container>Our nice template component {props.children}</Container>;
};

TemplateComponent.propTypes = {
  children: PropTypes.element,
};

export default TemplateComponent;
