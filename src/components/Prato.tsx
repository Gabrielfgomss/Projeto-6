import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootReducer } from "../store";
import { CardContainer } from "../styles/cardContainer";
import { Card } from "./Card";
import { Banner, Overlay } from "../styles/hero";

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
      <Banner bgImage={restaurante.capa}>
        <Overlay>
          <div className="hero-text">
            <p>{restaurante.tipoComida}</p>
            <p>{restaurante.nomeRestaurante}</p>
          </div>
        </Overlay>
      </Banner>
      <div className="container">
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
      </div>
    </CardContainer>
  );
};
