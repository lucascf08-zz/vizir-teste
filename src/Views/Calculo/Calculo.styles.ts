import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";

export const StyledCalculo = withTheme(
  styled.div`
    background-color: ${(props) => props.theme.palette.primary.main};

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 60rem) {
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }

    justify-content: space-between;
    flex-wrap: wrap;
    #title-div {
      width: 30%;
      display: flex;
      flex-direction: column;
      > * {
        padding: 1rem 2rem;
      }
    }
    #calculator-div {
      width: 70%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
);
