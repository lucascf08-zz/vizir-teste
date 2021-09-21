//react
import { MutableRefObject } from "react";
//mui
import { Button } from "@material-ui/core";
//styles
import { StyledHeader } from "./Header.styles";
//assets
import { ReactComponent as Logo } from "../../assets/logo.svg";

interface headerProps {
  mainRef: MutableRefObject<HTMLDivElement | undefined>;
  calculoRef: MutableRefObject<HTMLDivElement | undefined>;
}

const Header = ({ ...props }: headerProps) => {
  const scrollToRef = (ref: MutableRefObject<HTMLDivElement | undefined>) => {
    ref.current !== undefined &&
      ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledHeader>
      <div id="logo-div">
        <Logo />
      </div>
      <div id="title-span">
        <div id="title">
          Pague menos,
          <br />
          <strong>Fale mais</strong>
        </div>

        <div id="txt">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            variant="outlined"
            color="secondary"
            style={{ width: "50%" }}
            onClick={() => scrollToRef(props.mainRef)}
          >
            Saiba mais
          </Button>
        </div>
      </div>

      <div id="toolbar-container">
        <div id="toolbar">
          <Button
            variant="text"
            color="inherit"
            onClick={() => scrollToRef(props.mainRef)}
          >
            Vantagens
          </Button>
          <Button
            variant="text"
            color="inherit"
            onClick={() => scrollToRef(props.calculoRef)}
          >
            Cálculo
          </Button>
          <Button variant="contained" color="secondary">
            Contratar
          </Button>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
