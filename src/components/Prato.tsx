import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootReducer } from "../store";
import { CardContainer } from "../styles/cardContainer";
import { Card } from "./Card";

export const Prato = () => {
  const { itens: listaDeRestaurantes } = useSelector(
    (state: RootReducer) => state.restaurante
  );

  const { restauranteId } = useParams();
  const [restaurante] = listaDeRestaurantes.filter(
    (restaurante) => restaurante.id.toString() === restauranteId
  );

  return (
    <CardContainer secondary>
      {restaurante.pratos.map((prato) => (
        <>
          <Card
            secondary
            btnText="Adicionar ao carrinho"
            capa={prato.capa}
            titulo={prato.nome}
            descricao={prato.descricao}
            id={prato.id}
            quantidade={prato.quantidade}
            valor={prato.valor}
          />
        </>
      ))}
    </CardContainer>
  );
};
