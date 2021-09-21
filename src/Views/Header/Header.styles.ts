import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";
import bg from "../../assets/img-bg.png";

export const StyledHeader = withTheme(styled.div`
  display: flex;

  flex-direction: column;
  padding: 2rem;
  justify-content: flex-start;

  background: url(${bg});
  @media (max-width: 40rem) {
    background-position: 50%;
  }

  background-size: cover;
  background-color: ${(props) => props.theme.palette.primary.main};
  background-repeat: no-repeat;
  #top-div {
    display: flex;
    align-items: center;

    @media (min-width: 60rem) {
      justify-content: space-between;
    }
    #toolbar {
      display: flex;
      gap: 2rem;
    }
  }

  #title-span {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    justify-content: center;
    gap: 1rem;

    #title {
      grid-column: 3 / span 4;
      font-size: clamp(4rem, 5vw, 7rem);
      font-weight: 400;
      span {
        font-weight: 900;
      }
    }

    #txt {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      font-size: x-large;
      grid-column: 3 / span 4;
    }
  }
  #toolbar-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 2rem;
  }
`);
