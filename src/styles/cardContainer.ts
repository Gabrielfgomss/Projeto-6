import styled from "styled-components";

export const CardContainer = styled.section<{
  secondary?: boolean;
}>`
  ${(props) =>
    props.secondary == undefined
      ? `padding: 80px 0px 120px 0px;`
      : `padding-bottom: 120px;`}
  background-color: #FFF8F2;

  .container {
    width: 1080px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    ${(props) =>
      props.secondary
        ? `
      gap: 32px;
    `
        : `
    row-gap: 48px;
    column-gap: 80px;
    `}
  }
`;
