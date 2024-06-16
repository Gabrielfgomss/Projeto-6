import styled from "styled-components";

export const FormContainer = styled.form`
  text-align: left;
  border-radius: 8px;
  color: white;
  max-width: 400px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 700px;
`;

export const Label = styled.label`
  display: block;
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 700px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: none;
  background-color: #ffebd9;
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
