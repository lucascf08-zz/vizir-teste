//react
import React, { useRef } from "react";
//mui

//styles
import {
  StyledApp,
  StyledFaleMaisSpan,
  StyledFooter,
  StyledPlanosSpan,
} from "./App.styles";

//views
import Header from "./Views/Header/Header";
import Main from "./Views/Main/Main";
import Calculo from "./Views/Calculo/Calculo";
import Planos from "./Views/Planos/Planos";

function App() {
  const mainRef = useRef<HTMLDivElement>();
  const calculoRef = useRef<HTMLDivElement>();
  return (
    <StyledApp>
      <Header mainRef={mainRef} calculoRef={calculoRef} />
      <Main anchor={mainRef} />
      <Calculo anchor={calculoRef} />
      <Planos />

      <StyledFooter></StyledFooter>
    </StyledApp>
  );
}

export default App;
