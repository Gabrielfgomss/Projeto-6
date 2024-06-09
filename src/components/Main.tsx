import { useSelector } from "react-redux";
import { CardContainer } from "../styles/cardContainer";
import { Card } from "./Card";
import { RootReducer } from "../store";

export const Main = () => {
  const { itens: listaDeRestaurantes } = useSelector(
    (state: RootReducer) => state.restaurante
  );
  return (
    <CardContainer>
      {listaDeRestaurantes.map(
        ({
          capa,
          descricaoRestaurante,
          destaque,
          nomeRestaurante,
          nota,
          tipoComida,
          id,
        }) => {
          return (
            <>
              <Card
                btnText="Saiba mais"
                key={id}
                capa={capa}
                descricao={descricaoRestaurante}
                destaque={destaque}
                titulo={nomeRestaurante}
                nota={nota}
                tipoComida={tipoComida}
                id={id}
              />
            </>
          );
        }
      )}
    </CardContainer>
  );
};
