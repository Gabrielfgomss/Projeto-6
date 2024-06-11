import { useParams } from "react-router-dom";
import { CardContainer } from "../styles/cardContainer";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import { Restaurante } from "../utils/models";

export const Prato = () => {
  /*const { itens: listaDeRestaurantes } = useSelector(
    (state: RootReducer) => state.restaurante
  );*/

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setRestaurantes(res));
  }, []);

  const [restaurantes, setRestaurantes] = useState<Restaurante[] | undefined>();

  const { restauranteId } = useParams();

  if (restaurantes) {
    const [restaurante] = restaurantes.filter(
      (restaurante) => restaurante.id.toString() === restauranteId
    );

    return (
      <CardContainer secondary>
        {restaurante.cardapio.map((prato) => (
          <>
            <Card
              secondary
              btnText="Adicionar ao carrinho"
              capa={prato.foto}
              titulo={prato.nome}
              descricao={prato.descricao}
              id={prato.id}
              quantidade={prato.porcao}
              valor={prato.preco}
            />
          </>
        ))}
      </CardContainer>
    );
  }
};
