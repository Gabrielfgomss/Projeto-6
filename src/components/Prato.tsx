import { useParams } from "react-router-dom";
import { CardContainer } from "../styles/cardContainer";
import { Card } from "./Card";
import { Banner, Overlay } from "../styles/hero";
import { useEffect, useState } from "react";
import { Restaurante } from "../utils/models";

export const Prato = () => {
  const { restauranteId } = useParams();
  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => {
        const restaurante = res.find(
          (restaurante: Restaurante) =>
            restaurante.id.toString() === restauranteId
        );
        setRestaurantes(restaurante);
      });
  }, [restauranteId]);

  const [restaurante, setRestaurantes] = useState<Restaurante | undefined>();
  if (restaurante !== undefined) {
    return (
      <CardContainer secondary>
        <Banner bgImage={restaurante.capa}>
          <Overlay>
            <div className="hero-text">
              <p>{restaurante.tipo}</p>
              <p>{restaurante.titulo}</p>
            </div>
          </Overlay>
        </Banner>
        <div className="container">
          {restaurante.cardapio.map((prato) => (
            <>
              <Card
                secondary
                btnText="Adicionar ao carrinho"
                capa={prato.foto}
                titulo={prato.nome}
                descricao={prato.descricao}
                id={prato.id}
                porcao={prato.porcao}
                preco={prato.preco}
              />
            </>
          ))}
        </div>
      </CardContainer>
    );
  }
};
