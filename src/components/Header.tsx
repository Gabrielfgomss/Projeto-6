import { Link, useParams } from "react-router-dom";
import logo from "../../public/logo.svg";
import { Container } from "../styles/container";
import { useSelector } from "react-redux";
import { RootReducer } from "../store";
import Modal from "./Modal";
import { useState } from "react";
import Stepper from "./Stepper";

export const Header = () => {
  const { restauranteId } = useParams();
  const { itens } = useSelector((state: RootReducer) => state.carrinho);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
      {restauranteId ? (
        <Container restaurante={restauranteId ? true : false}>
          <Link to="/">Restaurantes</Link>
          <img src={logo} alt="Logo" />
          <p onClick={handleClick} style={{ cursor: "pointer" }}>
            {itens.length} produto(s) no carrinho
          </p>
          {isModalOpen && (
            <Modal onClose={handleCloseModal} secondary>
              <Stepper />
            </Modal>
          )}
        </Container>
      ) : (
        <Container>
          <img src={logo} alt="Logo" />
          <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
        </Container>
      )}
    </>
  );
};
