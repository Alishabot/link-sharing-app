import styled from "styled-components";

const Container = styled.section`
  display: flex;
  position: relative;
  width: 307px;
  height: 637px;
  background-color: var(--background-color-1);
  border-top-right-radius: 53px;
  border-top-left-radius: 53px;

  .container__img {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 307px;
    height: auto;

    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }

  .container__links {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 38%;
    gap: 20px;
    z-index: 10;
    width: 100%;
    padding: 35px;
  }
`;

export default Container;
