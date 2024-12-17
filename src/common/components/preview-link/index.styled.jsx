import styled from "styled-components";

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  appearance: none;
  border: none;
  outline: none;
  height: 44px;
  padding: 0 16px;
  border-radius: 8px;
  width: 100%;

  cursor: pointer;
  background: ${(props) => props.bkgColor};
  color: var(--button-color-1);
  font-size: var(--text-size-2);
  line-height: var(--text-line-2);
  font-weight: var(--text-weight-2);
  transition: 0.2s ease-in-out;

  .container__group {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 8px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export default Container;
