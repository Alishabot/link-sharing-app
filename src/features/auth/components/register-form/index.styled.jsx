import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1 1;

  .container__group {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .container__cta {
    display: flex;
    justify-content: center;
    gap: 3px;
  }
`;

export default Container;
