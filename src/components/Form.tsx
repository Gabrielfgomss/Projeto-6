import { Button } from "../styles/button";
import { FormContainer, Title } from "../styles/form";

interface FormComponent {
  title: string;
  children: React.ReactNode;
  onSubmit: () => void;
  onPrevStep: () => void;
  submitButtonText: string;
  prevButtonText: string;
}

const Form = ({
  title,
  children,
  onSubmit,
  onPrevStep,
  submitButtonText,
  prevButtonText,
}: FormComponent) => {
  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Title>{title}</Title>
      {children}
      <Button secondary type="submit">{submitButtonText}</Button>
      <Button secondary type="button" onClick={onPrevStep}>
        {prevButtonText}
      </Button>
    </FormContainer>
  );
};

export default Form;
