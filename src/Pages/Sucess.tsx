import { StyledSucesso } from "./Success.styles";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Emoji } from "../assets/Emoji.svg";

import { Link } from "react-router-dom";

//assets

import { ReactComponent as Seta } from "../assets/Seta.svg";

const Success = () => {
  return (
    <StyledSucesso>
      <header>
        <Link to="/" style={{ display: "flex", gap: "1rem" }}>
          <Seta /> Voltar para a página inicial
        </Link>
        <Logo className="logo" />
      </header>
      <main>
        <h1>
          Contratação feita com sucesso! <Emoji />
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </main>
    </StyledSucesso>
  );
};

export default Success;
