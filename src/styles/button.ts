import styled from "styled-components";

export const Button = styled.button<{
  secondary?: boolean;
  header?: boolean;
}>`
  ${(props) =>
    props.secondary
      ? `
    background-color: #FFEBD9;
    color: #E66767;
    width: 100%;
    text-align: center;`
      : `
    background-color: #e66767;
    color: #FFEBD9;
    width: 103px;`}
  ${(props) =>
    props.secondary ? "padding: 6px 0;" : "padding: 5px;"}
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  border: none;
  font-size: 14px;
`;
