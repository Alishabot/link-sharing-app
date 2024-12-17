import styled from "styled-components";

const Container = styled.p`
  font-size: ${(props) => {
    switch (props.size) {
      case "sm":
        return "var(--text-size-2)";
      case "md":
        return "var(--text-size-1)";
      default:
        return "var(--text-size-1)";
    }
  }};
  color: var(--text-color);
  font-weight: ${(props) => {
    switch (props.size) {
      case "sm":
        return "var(--text-weight-2)";
      case "md":
        return "var(--text-weight-1)";
      default:
        return "var(--text-weight-1)";
    }
  }};
  line-height: ${(props) => {
    switch (props.size) {
      case "sm":
        return "var(--text-line-2)";
      case "md":
        return "var(--text-line-1)";
      default:
        return "var(--text-line-1)";
    }
  }};
`;

export default Container;
