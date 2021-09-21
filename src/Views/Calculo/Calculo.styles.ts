import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";

export const StyledCalculo = withTheme(
  styled.div`
    background-color: ${(props) => props.theme.palette.primary.main};

    display: flex;
    align-items: stretch;
    justify-content: space-between;
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
