import { RootReducer } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { EnderecoFormState, updateField } from "../store/reducers/enderecoForm";
import Form from "./Form";

interface EnderecoProps {
  onPrevStep: () => void;
  nextStep: () => void;
}

function Endereco({ onPrevStep, nextStep }: EnderecoProps) {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootReducer) => state.enderecoForm);

  const handleChange = (name: keyof EnderecoFormState, value: string) => {
    dispatch(updateField({ name, value }));
  };

  const handleSubmit = () => {
    nextStep()
  };
  return (
    <Form<EnderecoFormState>
      title="Entrega"
      fields={[
        {
          label: "Quem irá receber",
          name: "nome",
          type: "text",
          value: formData.nome,
          onChange: handleChange,
        },
        {
          label: "Endereço",
          name: "endereco",
          type: "text",
          value: formData.endereco,
          onChange: handleChange,
        },
        {
          label: "Cidade",
          name: "cidade",
          type: "text",
          value: formData.cidade,
          onChange: handleChange,
        },
        {
          label: "CEP",
          name: "cep",
          type: "text",
          value: formData.cep,
          onChange: handleChange,
        },
        {
          label: "Número",
          name: "numero",
          type: "text",
          value: formData.numero,
          onChange: handleChange,
        },
        {
          label: "Complemento (opcional)",
          name: "complemento",
          type: "text",
          value: formData.complemento || "",
          onChange: handleChange,
        },
      ]}
      onSubmit={handleSubmit}
      onPrevStep={onPrevStep}
      submitButtonText="Continuar com o pagamento"
      prevButtonText="Voltar para o carrinho"
    ></Form>
  );
}

export default Endereco;
