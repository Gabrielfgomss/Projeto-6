import { useState } from "react";
import CarrinhoContainer from "./Carrinho";
import { useSelector } from "react-redux";
import { RootReducer } from "../store";
import Endereco from "./Endereco";
import Pagamento from "./Pagamento";
import CheckOut from "./checkOut";
import { Payment } from "../utils/models";

function Stepper() {
  const { itens } = useSelector((state: RootReducer) => state.carrinho);
  const total = itens.reduce((accumulator, item) => {
    accumulator += item.preco;
    return accumulator;
  }, 0);

  const [currentStep, setCurrentStep] = useState(1);
  const [payment, setPayment] = useState<Payment>({});

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const [orderId, setOrderId] = useState("");

  const handlePaymentSubmit = async (paymentLoad?: Payment) => {
    console.log(currentStep);
    if (currentStep === 2 && paymentLoad) {
      setPayment((prevState) => ({
        ...prevState,
        delivery: paymentLoad.delivery,
      }));
    }

    if (currentStep === 3 && paymentLoad) {
      setPayment((prevState) => ({ ...prevState, card: paymentLoad.card }));
    }

    if (currentStep == 4) {
      const paymentData = {
        products: itens.map((item) => {
          return { id: item.id, price: item.preco };
        }),
        delivery: payment.delivery,
        payment: { card: payment.card },
      };

      try {
        const response = await fetch(
          "https://fake-api-tau.vercel.app/api/efood/checkout",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(paymentData),
          }
        );
        if (!response.ok) setCurrentStep(6)
        const responseData = await response.json();
        setOrderId(responseData.orderId)
        setCurrentStep(5);
      } catch (error) {
        console.log(error);
        setCurrentStep(6);
      }
    }
  };

  const handleFinish = () => {
    setCurrentStep(1);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 1:
        return <CarrinhoContainer total={total} nextStep={nextStep} />;
      case 2:
        return (
          <Endereco
            onPrevStep={prevStep}
            nextStep={nextStep}
            onSubmit={handlePaymentSubmit}
          />
        );
      case 3:
        return (
          <Pagamento
            onPrevStep={prevStep}
            nextStep={nextStep}
            onSubmit={handlePaymentSubmit}
            total={total}
          />
        );
      case 4:
        handlePaymentSubmit();
        return <p>Processando pagamento...</p>;
      case 5:
        return <CheckOut orderId={orderId} onFinish={handleFinish} />;
      case 6:
        return <p>Erro ao processar pagamento...</p>;
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
