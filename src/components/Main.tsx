import { CardContainer } from "../styles/cardContainer";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import { Restaurante } from "../utils/models";

export const Main = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[] | undefined>();
  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((res) => setRestaurantes(res));
  }, []);

  console.log(restaurantes);
  if (restaurantes !== undefined) {
    return (
      <CardContainer>
        <div className="container">
          {restaurantes.map(
            ({
              capa,
              descricao,
              destacado,
              titulo,
              avaliacao,
              tipo,
              id,
            }) => {
              return (
                <>
                  <Card
                    btnText="Saiba mais"
                    key={id}
                    capa={capa}
                    descricao={descricao}
                    destaque={destacado}
                    titulo={titulo}
                    nota={avaliacao}
                    tipoComida={tipo}
                    id={id}
                  />
                </>
              );
            }
          )}
        </div>
      </CardContainer>
    );
  }
};
