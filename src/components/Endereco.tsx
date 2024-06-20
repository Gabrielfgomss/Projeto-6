import { RootReducer } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { EnderecoFormState, updateField } from "../store/reducers/enderecoForm";
import Form from "./Form";
import { Label, Input, Flex } from "../styles/form";

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
    nextStep();
  };
  return (
    <Form
      title="Entrega"
      onSubmit={handleSubmit}
      onPrevStep={onPrevStep}
      submitButtonText="Continuar com o pagamento"
      prevButtonText="Voltar para o carrinho"
    >
      <div>
        <Label htmlFor="nome">Quem irá receber</Label>
        <Input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={(e) => handleChange("nome", e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="endereco">Endereco</Label>
        <Input
          type="text"
          id="endereco"
          name="endereco"
          value={formData.endereco}
          onChange={(e) => handleChange("endereco", e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="cidade">Cidade</Label>
        <Input
          type="text"
          id="cidade"
          name="cidade"
          value={formData.cidade}
          onChange={(e) => handleChange("cidade", e.target.value)}
        />
      </div>
      <Flex>
        <div>
          <Label htmlFor="cep">CEP</Label>
          <Input
            type="text"
            id="cep"
            name="cep"
            value={formData.cep}
            onChange={(e) => handleChange("cep", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="numero">Número</Label>
          <Input
            type="text"
            id="numero"
            name="numero"
            value={formData.numero}
            onChange={(e) => handleChange("numero", e.target.value)}
          />
        </div>
      </Flex>
      <div>
        <Label htmlFor="complemento">Complemento (opcional)</Label>
        <Input
          type="text"
          id="complemento"
          name="complemento"
          value={formData.complemento}
          onChange={(e) => handleChange("complemento", e.target.value)}
        />
      </div>
    </Form>
  );
}

export default Endereco;
