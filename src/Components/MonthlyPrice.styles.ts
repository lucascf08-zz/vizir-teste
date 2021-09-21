import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";

export const StyledMonthlyPrice = withTheme(
  styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "reais cents"
      "reais mes";
    align-items: center;
    justify-content: center;
    gap: 0.1rem;
    color: ${(props) => props.theme.palette.secondary.main};
    #div-reais {
      grid-area: reais;
      font-size: xxx-large;
    }
    #div-cents {
      grid-area: cents;
      align-self: flex-end;
      font-size: x-large;
    }
    #div-mes {
      grid-area: mes;
      align-self: flex-start;
      font-size: x-large;
    }
  `
);
