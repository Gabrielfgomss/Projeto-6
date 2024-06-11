import styled from "styled-components";

export const CardComponent = styled.div<{
  secondary?: boolean;
  destaque?: boolean;
  small?: boolean;
}>`
  display: flex;
  flex-direction: column;
  max-height: 600px;
  border: 1px solid #e66767;
  width: 70%;
  margin: auto;
  background-color: ${(props) => (props.secondary ? "#E66767" : "")};
  color: ${(props) => (props.secondary ? "#FFEBD9" : "#E66767;")};

  .cover {
    position: relative;
    ${(props) =>
      props.secondary
        ? `
    display: flex;
    justify-content: center;
    padding: 1em 0em;`
        : ""}
    img {
      width: ${(props) => (props.secondary ? "90%" : "100%")};
      height: ${(props) => (props.secondary ? "90%" : "350px")};
    }

    .sticker {
      position: absolute;
      left: ${(props) =>
        props.destaque
          ? "calc(524px - 210px - 10px)"
          : "calc(524px - 100px - 10px)"};
      width: ${(props) => (props.destaque ? "210px" : "100px")};
      top: 30px;
      display: ${(props) => (props.secondary ? "none" : "flex")};
      justify-content: end;
      gap: 0.5em;
      font-size: 14px;
      font-weight: bold;

      span {
        background-color: #e66767;
        color: white;
        padding: 0.3em;
        border-radius: 0.2em;
      }
    }
  }

  .info {
    padding: 0.7em;
    display: flex;
    flex-direction: column;

    p {
      padding: 1em 0;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        display: flex;
        gap: 4px;
        align-items: center;
      }
    }
  }
`;
