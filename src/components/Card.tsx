import { Link, useParams } from "react-router-dom";
import estrela from "../../public/estrela.svg";
import close from "../../public/close.png";
import { Button } from "../styles/button";
import { CardComponent } from "../styles/cardComponent";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { useState } from "react";
import { adicionar } from "../store/reducers/carrinho";

export interface CardProps {
  capa: string;
  destacado?: boolean;
  tipo?: string;
  titulo?: string;
  descricao?: string;
  avaliacao?: number;
  id: number;
  porcao?: string;
  preco?: number;
}

interface CardStyles {
  secondary?: boolean;
  btnText?: string;
}

export const Card = ({
  capa,
  destacado,
  tipo,
  titulo,
  descricao,
  avaliacao,
  id,
  secondary,
  btnText,
  porcao,
  preco,
}: CardProps & CardStyles) => {
  const dispatch = useDispatch();

  const { restauranteId } = useParams();

  const [modalContent, setModalContent] = useState<CardProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(titulo)
  const handleClick = () => {
    setModalContent({
      capa,
      destacado,
      tipo,
      titulo,
      descricao,
      avaliacao,
      id,
      porcao,
      preco,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = () => {
    if (modalContent) {
      dispatch(adicionar(modalContent));
      setIsModalOpen(false);
    }
  };
  return (
    <>
      <CardComponent destaque={destacado} secondary={secondary}>
        <div className="cover">
          <img src={capa} alt="Prato principal" />
          <span className="sticker">
            {destacado ? (
              <>
                <span>Destaque da semana</span>
                <span>{tipo}</span>
              </>
            ) : (
              <span>{tipo}</span>
            )}
          </span>
        </div>
        <div className="info">
          <div>
            <h2>{titulo}</h2>
            <span className="rate">
              <span>{avaliacao}</span>
              <img src={estrela} alt="" className="estrela" />
            </span>
          </div>
          <p>{descricao}</p>
          {restauranteId ? (
            <Button secondary={secondary} onClick={handleClick}>
              Adicionar ao carrinho
            </Button>
          ) : (
            <Link to={`/restaurante/${id}`}>
              <Button secondary={secondary}>{btnText}</Button>
            </Link>
          )}
        </div>
      </CardComponent>
      {isModalOpen && modalContent && (
        <Modal onClose={handleCloseModal}>
          <section>
            <img src={capa} alt="" />

            <div>
              <h1>{modalContent.titulo}</h1>
              <p>{modalContent.descricao}</p>
              <p>Serve quantas pessoas? {modalContent.porcao}</p>
              <Button secondary={secondary} onClick={handleAddToCart}>
                Adicionar ao carrinho -{" "}
                {preco?.toLocaleString("pt-BR", {
                  currency: "BRL",
                  style: "currency",
                })}
              </Button>
            </div>
            <img src={close} className="close" onClick={handleCloseModal}/>
          </section>
        </Modal>
      )}
    </>
  );
};
