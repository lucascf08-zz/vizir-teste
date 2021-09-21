import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";

export const StyledVantagem = withTheme(
  styled.div`
    #inner-div {
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      gap: 2rem;
      #text-div {
        width: 40%;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        h3 {
          font-size: xx-large;
          font-weight: 400;
          margin: 0;
          padding: 0.5rem;
        }
        p {
          padding: 0.5rem;
        }
      }
      #content-div {
        width: 60%;
        display: flex;

        align-items: center;
        justify-content: center;
        gap: 3rem;
      }
    }
  `
);
