import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  border-radius: 8px;
  padding: 0 16px;
  border: 1px solid
    ${(props) => {
      if (props.isErrorVisible) {
        return "var(--error-color)";
      }
      return "var(--border-color)";
    }};
  background: var(--background-color-2);
  font-family: "Instrument Sans", sans-serif;
  transition: 0.2s ease-in-out all;

  div {
    display: flex;
    align-items: center;
    flex: 1 1;
    height: 100%;
    gap: 12px;

    input {
      width: 100%;
      height: 100%;
      appearance: none;
      outline: none;
      border: none;
      background: none;

      &,
      &::placeholder {
        color: var(--heading-color);
        font-size: var(--text-size-1);
        line-height: var(--text-line-1);
        font-weight: var(--text-weight-1);
      }
      &::placeholder {
        opacity: 0.5;
      }
    }
    svg path {
      fill: var(--heading-color);
    }
  }
  p {
    padding-left: 12px;
    color: var(--error-color);
    font-size: var(--text-size-2);
    line-height: var(--text-line-2);
    font-weight: var(--text-weight-2);
  }

  &:focus-within {
    box-shadow: var(--box-shadow);
    caret-color: var(--app-color-1);
    border: 1px solid
      ${(props) => {
        if (props.isErrorVisible) {
          return "var(--error-color)";
        }
        return "var(--app-color-1)";
      }};
  }
`;

export default Container;