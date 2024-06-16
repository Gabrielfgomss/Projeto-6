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
        `
      : `
          width: 472px;
          height: 410px;
        `}
  border: 1px solid #e66767;
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
    padding: 0.5em 0em;`
        : ""}
    height: ${(props) => (props.secondary ? "" : "217px")};;

    img {
      width: ${(props) => (props.secondary ? "304px" : "100%")};
      height: ${(props) => (props.secondary ? "167px" : "100%")};
    }

    .sticker {
      position: absolute;
      right: calc(10px);
      width: ${(props) => (props.destaque ? "210px" : "100px")};
      top: 30px;
      display: ${(props) => (props.secondary ? "none" : "flex")};
      justify-content: end;
      gap: 0.5em;
      font-size: 12px;
      text-transform: capitalize;

      span {
        background-color: #e66767;
        color: white;
        padding: 0.3em;
        border-radius: 0.2em;
        font-weight: 700;
      }
    }
  }

  .info {
    ${(props) => props.secondary ? 
    `
    padding: 0.7em;
    display: flex;
    flex-direction: column;
    gap: 16px;
    `
    :
    `
    padding: 0.7em;
    display: flex;
    flex-direction: column;
    `}
    

    p {
      ${(props ) => props.secondary ? 
      `
        width: 300px;                 
        height: 120px;                
        overflow: hidden;             
        display: -webkit-box;         
        -webkit-line-clamp: 6;   
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;      
        line-height: 20px; 
      `
      : 
      `
        padding: 10px 0;
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

      span {
        display: flex;
        gap: 4px;
        align-items: center;
        font-weight: 700;
      }
    }
  }
`;
