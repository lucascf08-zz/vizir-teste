//react
import React, { useRef } from "react";
//mui

//styles
import { StyledApp } from "./App.styles";

//views
import Header from "../Views/Header/Header";
import Main from "../Views/Main/Main";
import Calculo from "../Views/Calculo/Calculo";
import Planos from "../Views/Planos/Planos";
import Footer from "../Views/Footer/Footer";

function App() {
  const mainRef = useRef<HTMLDivElement>();
  const calculoRef = useRef<HTMLDivElement>();
  const planosRef = useRef<HTMLDivElement>();
  return (
    <StyledApp>
      <Header mainRef={mainRef} calculoRef={calculoRef} planosRef={planosRef} />
      <Main anchor={mainRef} />
      <Calculo anchor={calculoRef} />
      <Planos anchor={planosRef} />
      <Footer />
    </StyledApp>
  );
}

export default App;
