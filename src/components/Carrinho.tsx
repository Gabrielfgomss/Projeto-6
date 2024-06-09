import { Button } from "../styles/button";
import { Carrinho } from "../styles/carrinho";
import lixeira from "../../public/lixeira-de-reciclagem.png";
import { useDispatch, useSelector } from "react-redux";
import { remover } from "../store/reducers/carrinho";
import { RootReducer } from "../store";

interface CarrinhoContainerProps {
  total: number;
  nextStep: () => void;
}

function CarrinhoContainer({ total, nextStep }: CarrinhoContainerProps) {
  const { itens } = useSelector((state: RootReducer) => state.carrinho);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    console.log(id);
    dispatch(remover(id));
  };

  return (
    <>
      {itens.map((item) => {
        return (
          <Carrinho key={item.id}>
            <img src={item.capa} />
            <div>
              <p>{item.nome}</p>
              <p>
                {item.valor.toLocaleString("pt-BR", {
                  currency: "BRL",
                  style: "currency",
                })}
              </p>
              <p className="icon">
                <img src={lixeira} onClick={() => handleRemove(item.id)} />
              </p>
            </div>
          </Carrinho>
        );
      })}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Valor total</span>
        <span>
          {total.toLocaleString("pt-BR", {
            currency: "BRL",
            style: "currency",
          })}
        </span>
      </div>
      <Button onClick={nextStep} secondary>
        Continuar com a entrega
      </Button>
    </>
  );
}

export default CarrinhoContainer;
