import styled from "styled-components";

export const CardContainer = styled.section<{ secondary?: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.secondary ? "1fr 1fr 1fr" : "1fr 1fr"};
  padding: 0 5em;
  background-color: #fff8f2;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 4em 12em;
`;
