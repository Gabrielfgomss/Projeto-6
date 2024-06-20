import styled from "styled-components";

export const CardContainer = styled.section<{ secondary?: boolean }>`
  padding: 2em 0em;
  width: 1080px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff8f2;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  margin: auto;
`;
