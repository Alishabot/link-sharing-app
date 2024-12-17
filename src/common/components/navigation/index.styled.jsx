import styled from "styled-components";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 78px;
  padding: 16px;
  border-radius: 12px;
  background-color: var(--background-color-2);

  .container__logo {
    width: 182px;
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
  .container__links {
    display: flex;
    align-items: center;
    gap: 16px;

    .links__route {
      display: flex;
      align-items: center;
      gap: 8px;
      height: 46px;
      padding: 0 26px;
      border-radius: 8px;
      font-size: var(--heading-size-2);
      font-weight: var(--heading-weight-2);
      line-height: var(--heading-line-2);
      color: var(--text-color);

      svg path {
        fill: var(--text-color);
      }
    }
    .links__route--active {
      background: var(--app-color-3);
      color: var(--app-color-1);

      svg path {
        fill: var(--app-color-1);
      }
    }
  }
`;

export default Container;
