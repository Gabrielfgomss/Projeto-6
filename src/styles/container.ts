import styled from "styled-components";

export const Container = styled.header<{restaurante?: boolean}>`
  display: flex;
  flex-direction: ${props => props.restaurante ? "row" : "column"};
  align-items: center;
  justify-content: center;
  padding: 4em;
  gap: 5em;
  background-image: url("../../public/imagemFundo.svg");
  text-align: center;
  color: #E66767;

  a {
    text-decoration: none;
    color: #E66767;
    font-weight: bold;
  }

  p {
    font-size: 16px;
    font-weight: bold;
  }

  .socials {
    display: flex;
    gap: 0.5em;
  }
`;
