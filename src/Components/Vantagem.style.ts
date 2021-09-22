import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";

export const StyledVantagem = withTheme(
  styled.div`
    #inner-div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;

      @media (min-width: 60rem) {
        flex-direction: row;

        #text-div {
          width: 40%;
        }
        #content-div {
          width: 60%;
        }
      }

      #text-div {
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
        display: flex;

        align-items: center;
        justify-content: center;
        gap: 3rem;
      }
    }
  `
);
