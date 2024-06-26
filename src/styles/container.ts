import styled from "styled-components";
import imagemFundo from "../../public/imagemFundo.svg";

export const Container = styled.section<{ restaurante?: string }>`
  background-image: url(${imagemFundo});
  padding: 40px;
  header {
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: ${(props) => (props.restaurante ? "row" : "column")};
    gap: ${(props) => (props.restaurante ? "315px" : "120px")};
    text-align: center;
    color: #e66767;

    h1 {
      font-family: "Roboto", sans-serif;
      font-weight: 900;
      font-style: normal;
      font-size: 36px;
      width: 540px;
    }
    a {
      text-decoration: none;
      color: #e66767;
      font-weight: bold;
    }
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .socials {
      display: flex;
      gap: 0.5em;
    }

    .icons {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
      margin-bottom: 80px;
    }
    p {
      color: #E66767;
      font-size: 10px;
      width: 484px;
      text-align: center;
    }
  }
`;
