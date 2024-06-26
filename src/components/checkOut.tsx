import styled from "styled-components";

const CheckOutContainer = styled.div`
  color: white;
  margin-top: 32px;
  text-align: left;
`;

const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 700;
`;

const Text = styled.p`
  margin-bottom: 10px;
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  margin: 24px auto;
  padding: 3.5px;
  background-color: #FFEBD9;
  border: none;
  cursor: pointer;
  color: #E66767;
  font-weight: 700;
  font-size: 14px;
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
