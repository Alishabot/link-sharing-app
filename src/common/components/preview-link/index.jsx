import PropTypes from "prop-types";
import Container from "./index.styled";
import ArrowRightIcon from "../../../assets/arrow_right.svg?react";
import { Link } from "react-router";

const PreviewLink = (props) => {
  return (
    <Link to={props.url} target="_blank" rel="noopener noreferrer">
      <Container
        type="button"
        bkgColor={props.bkgColor}
        onClick={props.onClick}
      >
        <span className="container__group">
          {props.iconChildren}
          {props.children}
        </span>
        <ArrowRightIcon />
      </Container>
    </Link>
  );
};

PreviewLink.propTypes = {
  children: PropTypes.element,
  iconChildren: PropTypes.element,
  onClick: PropTypes.func,
  bkgColor: PropTypes.string,
  url: PropTypes.string,
};

export default PreviewLink;
