import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";
import bg from "./assets/img-bg.png";

export const StyledApp = withTheme(styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: 80vh 100vh 40vh 80vh 20vh;
  justify-content: flex-start;
`);

export const StyledMain = withTheme(styled.div`
  display: grid;
  gap: 1rem;
  justify-content: flex-start;
`);

export const StyledFaleMaisSpan = withTheme(styled.div`
  background-color: ${(props) => props.theme.palette.primary.main};

  display: grid;
  gap: 1rem;
  justify-content: flex-start;
`);

export const StyledPlanosSpan = withTheme(styled.div`
  display: grid;
  gap: 1rem;
  justify-content: flex-start;
`);

export const StyledFooter = withTheme(styled.div`
  background-color: ${(props) => props.theme.palette.primary.main};
  display: grid;
  gap: 1rem;
  justify-content: flex-start;
`);
