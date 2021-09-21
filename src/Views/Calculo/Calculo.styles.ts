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
    }
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;
    #title-div {
      width: 40%;
    }
    #calculator-div {
      width: 60%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
);
