import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";

export const StyledSucesso = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  text-align: center;

  header {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    justify-items: center;
    gap: 1rem;
    padding: 2rem;

    border-bottom: 1px solid #e5e5e5;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    > * {
      flex-grow: 1;
    }
    @media (min-width: 60rem) {
      display: grid;
      grid-template-columns: 20vw 60vw 20vw;

      > * {
        grid-column: 2;
      }
    }
  }
`);
