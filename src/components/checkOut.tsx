import styled from "styled-components";

const CheckOutContainer = styled.div`
  background-color: #e57373;
  padding: 20px;
  border-radius: 8px;
  color: white;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Text = styled.p`
  margin-bottom: 10px;
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
`;

interface CheckOutProps {
  orderId: string;
  onFinish: () => void;
}

function CheckOut({ orderId, onFinish }: CheckOutProps) {
  return (
    <CheckOutContainer>
      <Title>Pedido realizado - {orderId}</Title>
      <Text>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </Text>
      <Text>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </Text>
      <Text>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </Text>
      <Text>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </Text>
      <Button onClick={onFinish}>Concluir</Button>
    </CheckOutContainer>
  );
}

export default CheckOut;
