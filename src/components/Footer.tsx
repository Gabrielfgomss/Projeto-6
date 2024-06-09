import logo from "../../public/logo.svg";
import facebook from "../../public/facebook.svg";
import instagram from "../../public/instagram.svg";
import twitter from "../../public/twitter.svg";
import { Container } from "../styles/container";

export const Footer = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className="socials">
        <img src={twitter} alt="Twitter" />
        <img src={instagram} alt="Instagram" />
        <img src={facebook} alt="Facebook" />
      </div>
      <div>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.{" "}
        </p>
      </div>
    </Container>
  );
};
