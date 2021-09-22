import { StyledFooter } from "./Footer.styles";
//components
import FootMenu from "../../Components/FootMenu";
import { Divider } from "@material-ui/core";
//assets
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <div id="menus">
        <FootMenu
          title={"Combo"}
          menus={["Planos", "Atendimentos", "Serviços Adicionais"]}
        />
        <FootMenu
          title="Celular"
          menus={["Planos", "Atendimentos", "Serviços Adicionais"]}
        />
        <FootMenu
          title="Fixo"
          menus={["Planos", "Atendimentos", "Serviços Adicionais"]}
        />
        <FootMenu
          title="Sobre"
          menus={["A Empresa", "Franquia", "Sobre nós"]}
        />
        <FootMenu
          title="Comunidade"
          menus={[
            "Acessibilidade",
            "Diversidade e pertencimento",
            "telzir.org",
          ]}
        />
      </div>

      <Divider light />
      <div id="logo-span">
        <Logo />
        <span>2021</span>
      </div>
    </StyledFooter>
  );
};

export default Footer;
