import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";

export const StyledMain = withTheme(styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  #vantagens-div {
    grid-row: 1 / span 3;
    grid-column: 2 / span 3;
    display: flex;
    flex-direction: column;
    #vantagem-2-div-1 {
      display: flex;
      gap: 0.5rem;
    }
    #table {
      .table-head {
        color: ${(props) => props.theme.palette.secondary.main};
        font-weight: 900;
      }
    }
  }
`);

export const StyledVantagemSpan = withTheme(styled.div``);
