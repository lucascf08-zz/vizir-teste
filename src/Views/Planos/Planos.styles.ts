import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";

export const StyledPlanos = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  #cards-div {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
  @media (min-width: 40rem) {
    #cards-div {
      flex-direction: row;
    }
  }
`);
