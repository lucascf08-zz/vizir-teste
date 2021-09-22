import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";

export const StyledApp = withTheme(styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-content: flex-start;

  @media (min-width: 60rem) {
    grid-template-rows: 80vh 100vh 60vh 100vh 40vh;
  }
`);
