import styled from "styled-components";

export const FormContainer = styled.form`
  text-align: left;
  padding: 20px;
  border-radius: 8px;
  color: white;
  max-width: 400px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: calc(100% - 20px);
  padding: 8px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  background-color: #FFEBD9;
`;


export const Flex = styled.div<{secondary?: boolean}>`
  display: flex;
  gap: 18px;
  justify-content: space-between;
  ${(props) => props.secondary ? 
  `
    width: 100%;
  `
  : 
  `
    & > :nth-child(1) {
      width: 228px;
    }
    & > :nth-child(2) {
      width: 87px;
    }
  `}
  
`;