import styled from "styled-components";

const Container = styled.section`
  display: flex;
  height: 357px;
  width: 100%;
  background-color: var(--app-color-1);
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  padding: 24px;

  .container__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--background-color-2);
    border-radius: 12px;
    padding: 0 16px;
    height: 78px;
    width: 100%;
  }
`;

export default Container;
