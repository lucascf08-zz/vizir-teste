import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";

export const StyledMain = withTheme(styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: 60rem) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    align-items: baseline;

    #title-div {
      grid-column: 1 / span 1;
    }
    #vantagens-div {
      grid-column: 2 / span 2;
    }
  }

  #title-div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    h3 {
      font-size: clamp(2rem, 3vw, 5rem);
    }
  }

  #vantagens-div {
    display: flex;
    flex-direction: column;

    #vantagem-2-div-1 {
      display: flex;
      gap: 0.5rem;
    }
    #table {
      .table-cell {
        text-align: center;
      }
      .table-head {
        text-align: center;
        color: ${(props) => props.theme.palette.secondary.main};
        font-weight: 900;
      }
    }
  }
`);

export const StyledVantagemSpan = withTheme(styled.div``);
