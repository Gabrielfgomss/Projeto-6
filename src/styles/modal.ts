import styled from "styled-components";

export const ModalOverlay = styled.div<{ secondary?: boolean }>`
  ${(props) =>
    props.secondary
      ? `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 10;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: end; `
      : `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center; `}
`;

export const ModalContent = styled.div<{ secondary?: boolean }>`
  ${(props) =>
    props.secondary
      ? `
      width: 20%;
      background-color: #e66767;
      color: #ffebd9;
      padding: 1em;
      display: flex;
      flex-direction: column;
      gap: 1em;
      `
      : `
      background-color: #e66767;
      color: #ffebd9;
      width: 70%;
      padding: 3em;
      border-radius: 8px;
      section {
        display: flex;
        gap: 2em;
        img {
          width: 30%;
        }
        div {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;

          button {
            width: 30%;
          }
        }
      }
      `
  }
`;
