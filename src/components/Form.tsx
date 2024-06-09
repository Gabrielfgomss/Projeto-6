import styled from "styled-components";

const FormContainer = styled.form`
  text-align: left;
  padding: 20px;
  border-radius: 8px;
  color: white;
  max-width: 400px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 8px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
  background-color: #FFEBD9;
`;

const Button = styled.button`
  display: block;
  width: calc(100% - 20px);
  margin: 10px auto;
  padding: 10px;
  background-color: #ff8a80;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-weight: bold;

  &:first-of-type {
    background-color: #ff5252;
  }
`;

interface Field<T> {
  label: string;
  name: keyof T;
  type: string;
  value: string;
  onChange: (name: keyof T, value: string) => void;
}

interface FormComponent<T> {
  title: string;
  fields: Field<T>[];
  onSubmit: () => void;
  onPrevStep: () => void;
  submitButtonText: string;
  prevButtonText: string;
}

const Form = <T,>({
  title,
  fields,
  onSubmit,
  onPrevStep,
  submitButtonText,
  prevButtonText,
}: FormComponent<T>) => {
  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Title>{title}</Title>
      {fields.map((field) => (
        <div key={String(field.name)}>
          <Label>{field.label}</Label>
          <Input
            type={field.type}
            name={String(field.name)}
            value={field.value}
            onChange={(e) => field.onChange(field.name, e.target.value)}
          />
        </div>
      ))}
      <Button type="submit">{submitButtonText}</Button>
      <Button type="button" onClick={onPrevStep}>
        {prevButtonText}
      </Button>
    </FormContainer>
  );
};

export default Form;
