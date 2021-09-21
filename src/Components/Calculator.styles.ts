import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";

export const StyledCalculator = withTheme(styled.div`
  display: grid;

  grid-template-columns: repeat(1fr, 3);
  grid-template-rows: repeat(1fr, 3);
  #cell-1 {
    grid-column: 1 / span 1;
  }
  #cell-2 {
    grid-column: 2 / span 1;
  }
  #cell-3 {
    grid-column: 3 / span 1;
  }

  #cell-4 {
    grid-column: 1 / span 3;
    grid-row-start: 2;
  }
  #cell-5 {
    grid-column: 1 / span 3;
    grid-row-start: 3;
  }
`);

export const CalcCell = withTheme(
  styled.div`
    background-color: #fff;
    min-width: 10rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border: 1px solid #e5e5e5;
    border-radius: 2%;
  `
);
