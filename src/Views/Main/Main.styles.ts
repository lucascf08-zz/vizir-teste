import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";

export const StyledMain = withTheme(styled.div`
  display: grid;
  flex-wrap: wrap;
  @media (min-width: 40rem) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
  gap: 2rem;
  #title-div {
    display: flex;
    width: 40%;
  }
  #vantagens-div {
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
