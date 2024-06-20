import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../store";
import {
  updateField,
  PagamentoFormState,
} from "../store/reducers/pagamentoForm";
import Form from "./Form";
import { Label, Input, Flex } from "../styles/form";

interface PagamentoProps {
  onPrevStep: () => void;
  total: number;
  onSubmit: () => void;
}

function Pagamento({ onPrevStep, onSubmit, total }: PagamentoProps) {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootReducer) => state.pagamentoForm);

  const handleChange = (name: keyof PagamentoFormState, value: string) => {
    dispatch(updateField({ name, value }));
  };

  return (
    <Form
      title={`Pagamento - Valor a pagar ${total.toLocaleString("pt-Br", {
        style: "currency",
        currency: "BRL",
      })}`}
      onSubmit={onSubmit}
      onPrevStep={onPrevStep}
      submitButtonText="Finalizar pagamento"
      prevButtonText="Voltar para a edição de endereço"
    >
      <div>
        <Label htmlFor="nomeCartao">Nome no Cartão</Label>
        <Input
          type="text"
          id="nomeCartao"
          name="nomeCartao"
          value={formData.nomeCartao}
          onChange={(e) => handleChange("nomeCartao", e.target.value)}
        />
      </div>
      <Flex>
        <div>
          <Label htmlFor="cartaoNum">Número do Cartão</Label>
          <Input
            type="text"
            id="cartaoNum"
            name="cartaoNum"
            value={formData.cartaoNum}
            onChange={(e) => handleChange("cartaoNum", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="cvv">CVV</Label>
          <Input
            type="text"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={(e) => handleChange("cvv", e.target.value)}
          />
        </div>
      </Flex>
      <Flex secondary>
        <div>
          <Label htmlFor="mesVencimento">Mês de vencimento</Label>
          <Input
            type="text"
            id="mesVencimento"
            name="mesVencimento"
            value={formData.mesVencimento}
            onChange={(e) => handleChange("mesVencimento", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="anoVencimento">Ano de vencimento</Label>
          <Input
            type="text"
            id="anoVencimento"
            name="anoVencimento"
            value={formData.anoVencimento}
            onChange={(e) => handleChange("anoVencimento", e.target.value)}
          />
        </div>
      </Flex>
    </Form>
  );
}

export default Pagamento;
