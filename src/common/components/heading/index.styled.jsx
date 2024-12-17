import styled from "styled-components";

const Container = styled.h1`
  font-size: ${(props) => {
    switch (props.size) {
      case "sm":
        return "var(--heading-size-2)";
      case "md":
        return "var(--heading-size-1)";
      default:
        return "var(--heading-size-1)";
    }
  }};
  color: var(--heading-color);
  font-weight: ${(props) => {
    switch (props.size) {
      case "sm":
        return "var(--heading-weight-2)";
      case "md":
        return "var(--heading-weight-1)";
      default:
        return "var(--heading-weight-1)";
    }
  }};
  line-height: ${(props) => {
    switch (props.size) {
      case "sm":
        return "var(--heading-line-2)";
      case "md":
        return "var(--heading-line-1)";
      default:
        return "var(--heading-line-1)";
    }
  }};
`;

export default Container;