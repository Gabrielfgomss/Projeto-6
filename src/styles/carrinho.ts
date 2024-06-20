import styled from "styled-components";

export const Carrinho = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  background-color: #ffebd9;
  color: #e66767;
  padding: 10px;
  gap: 10px;

  > img {
    width: 80px;
    height: 80px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;

    p {
      font-size: 14px;
      text-align: left;
    }

    .icon {
      text-align: end;
      img {
        width: 16px;
        height: 16px;
      }
    }
  }
`;
