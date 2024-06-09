import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../store";
import {
  updateField,
  PagamentoFormState,
} from "../store/reducers/pagamentoForm";
import Form from "./Form";

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
    <Form<PagamentoFormState>
      title={`Pagamento - Valor a pagar ${total.toLocaleString("pt-Br", {
        style: "currency",
        currency: "BRL",
      })}`}
      fields={[
        {
          label: "Nome no cartão",
          name: "nomeCartao",
          type: "text",
          value: formData.nomeCartao,
          onChange: handleChange,
        },
        {
          label: "Número do cartão",
          name: "cartaoNum",
          type: "text",
          value: formData.cartaoNum,
          onChange: handleChange,
        },
        {
          label: "CVV",
          name: "cvv",
          type: "text",
          value: formData.cvv,
          onChange: handleChange,
        },
        {
          label: "Mês de vencimento",
          name: "mesVencimento",
          type: "text",
          value: formData.mesVencimento,
          onChange: handleChange,
        },
        {
          label: "Ano de vencimento",
          name: "anoVencimento",
          type: "text",
          value: formData.anoVencimento,
          onChange: handleChange,
        },
      ]}
      onSubmit={onSubmit}
      onPrevStep={onPrevStep}
      submitButtonText="Finalizar pagamento"
      prevButtonText="Voltar para a edição de endereço"
    />
  );
}

export default Pagamento;
