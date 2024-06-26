import styled from "styled-components";

export const Carrinho = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  background-color: #ffebd9;
  color: #e66767;
  padding: 8px;
  gap: 10px;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;

    & p:nth-child(1) {
      font-size: 18px;
      font-weight: 900;
      text-align: left;
      margin-bottom: 8px;
    }

    & p:nth-child(2) {
      font-size: 14px;
      font-weight: 400;
      text-align: left;
    }

    .icon {
      text-align: end;
      height: 16px;
    }
  }
`;
