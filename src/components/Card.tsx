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
  destaque?: boolean;
  tipoComida?: string;
  titulo: string;
  descricao?: string;
  nota?: number;
  id: number;
  quantidade?: string;
  valor?: number;
}

interface CardStyles {
  secondary?: boolean;
  btnText?: string;
}

export const Card = ({
  capa,
  destaque,
  tipoComida,
  titulo,
  descricao,
  nota,
  id,
  secondary,
  btnText,
  quantidade,
  valor,
}: CardProps & CardStyles) => {
  const dispatch = useDispatch();

  const { restauranteId } = useParams();

  const [modalContent, setModalContent] = useState<CardProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setModalContent({
      capa,
      destaque,
      tipoComida,
      titulo,
      descricao,
      nota,
      id,
      quantidade,
      valor,
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
      <CardComponent destaque={destaque} secondary={secondary}>
        <div className="cover">
          <img src={capa} alt="Prato principal" />
          <span className="sticker">
            {destaque ? (
              <>
                <span>Destaque da semana</span>
                <span>{tipoComida}</span>
              </>
            ) : (
              <span>{tipoComida}</span>
            )}
          </span>
        </div>
        <div className="info">
          <div>
            <h2>{titulo}</h2>
            <span className="rate">
              <span>{nota}</span>
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
              <p>Serve quantas pessoas? {modalContent.quantidade}</p>
              <Button secondary={secondary} onClick={handleAddToCart}>
                Adicionar ao carrinho -{" "}
                {valor?.toLocaleString("pt-BR", {
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
