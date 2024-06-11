import styled from "styled-components";

export const Carrinho = styled.div`
  display: flex;
  flex-direction: row;
  height: 140px;
  background-color: #ffebd9;
  color: #e66767;

  > img {
    width: 30%;
    padding: 0.5em;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.2em;
    padding: 0.5em 1em;

    p {
      font-size: 16px;
      text-align: left;
    }

    .icon {
      text-align: end;
      img {
        width: 10%;
        margin-top: 35px;
      }
    }
  }
`;
