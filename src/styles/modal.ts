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
      padding: 8px;
      display: flex;
      flex-direction: column;
      gap: 1em;
      `
      : `
      background-color: #e66767;
      color: #ffebd9;
      width: 1024px;
      padding: 32px;


      section {
        display: flex;
        gap: 2em;

        .close {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }
        img {
          width: 280px;
          height: 280px;
          object-fit: cover;
        }
        div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;

          h1 {
            font-weight: 900;
            font-size: 18px;
          }
          p {
            font-weight: 400;
            font-size: 14px;
          }

          button {
            width: 218px;
            font-weight: 700;
            font-size: 14px;
            margin-bottom: 27px;
          }
        }
      }
      `}
`;
