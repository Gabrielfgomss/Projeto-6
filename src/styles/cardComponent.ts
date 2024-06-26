import styled from "styled-components";

export const CardComponent = styled.div<{
  secondary?: boolean;
  destaque?: boolean;
  small?: boolean;
}>`
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.secondary
      ? `
          width: 320px;
          padding: 8px;
        `
      : `
          width: 472px;
        `}
  border: 1px solid #e66767;
  background-color: #ffffff;
  background-color: ${(props) => (props.secondary ? "#E66767" : "")};
  color: ${(props) => (props.secondary ? "#FFEBD9" : "#E66767;")};

  .cover {
    position: relative;
    ${(props) =>
      props.secondary &&
      `
    display: flex;
    justify-content: center;`}
    height: ${(props) => (props.secondary ? "" : "217px")};
    img {
      width: 100%;
      height: ${(props) => (props.secondary ? "167px" : "100%")};
      object-fit: cover;
    }

    .sticker {
      position: absolute;
      right: 16px;
      top: 16px;
      display: ${(props) => (props.secondary ? "none" : "flex")};
      gap: 0.5em;
      font-size: 12px;
      text-transform: capitalize;

      span {
        background-color: #e66767;
        color: white;
        padding: 0.5em;
        font-weight: 700;
      }
    }
  }

  .info {
    ${(props) =>
      props.secondary
        ? `
    display: flex;
    flex-direction: column;
    margin-top: 8px;
    `
        : `
    padding: 8px;
    gap: 16px;
    display: flex;
    flex-direction: column;
    `}
    p {
      ${(props) =>
        props.secondary
          ? `            
        overflow: hidden;             
        display: -webkit-box;         
        -webkit-line-clamp: 6;   
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;      
        line-height: 22px;
        font-weight: 400;
        margin: 8px 0px; 
      `
          : `
        font-size: 14px;
        line-height: 20px;
      `}
    }
    h2 {
      font-size: 18px;
      font-weight: 700;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .rate {
        ${(props) =>
          props.secondary
            ? "display: none;"
            : `
            display: flex;
            align-items: center;
            gap: 4px;
            span {
              font-weight: 700;
            }`};
      }
    }
  }
`;
