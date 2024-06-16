import { useState } from "react";
import CarrinhoContainer from "./Carrinho";
import { useSelector } from "react-redux";
import { RootReducer } from "../store";
import Endereco from "./Endereco";
import Pagamento from "./Pagamento";
import CheckOut from "./checkOut";

function Stepper() {
  const { itens } = useSelector((state: RootReducer) => state.carrinho);
  const total = itens.reduce((accumulator, item) => {
    accumulator += item.preco;
    return accumulator;
  }, 0);

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const [orderId, setOrderId] = useState("");

  const handlePaymentSubmit = () => {
    const generatedOrderId = "123456";
    setOrderId(generatedOrderId);
    nextStep();
  };

  const handleFinish = () => {
    setCurrentStep(1);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 1:
        return (
          <CarrinhoContainer total={total} nextStep={nextStep} />
        );
      case 2:
        return <Endereco onPrevStep={prevStep} nextStep={nextStep} />;
      case 3:
        return (
          <Pagamento
            onPrevStep={prevStep}
            onSubmit={handlePaymentSubmit}
            total={total}
          />
        );
      case 4:
        return <CheckOut orderId={orderId} onFinish={handleFinish} />;
      default:
        return <p>Carrinho Vazio. Adicione novos itens</p>;
    }
  };

  return (
    <>
      {itens.length > 0 ? (
        renderStepContent(currentStep)
      ) : (
        <p>Carrinho Vazio. Adicione novos itens</p>
      )}
    </>
  );
}

export default Stepper;
