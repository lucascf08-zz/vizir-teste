import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";
import bg from "../../assets/img-bg.png";

export const StyledHeader = withTheme(styled.div`
  display: grid;

  grid-template-columns: 15vw 35vw 50vw;
  justify-content: flex-start;

  background: url(${bg});
  background-size: cover;
  background-color: ${(props) => props.theme.palette.primary.main};
  background-repeat: no-repeat;

  #logo-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem;
  }

  #title-span {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    gap: 1rem;

    #title {
      grid-row: 2 / span 1;
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
      grid-row: 3 / span 1;
    }
  }
  #toolbar-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 2rem;
    #toolbar {
      display: flex;
      gap: 2rem;
    }
  }
`);
