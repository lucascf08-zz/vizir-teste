import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";

export const StyledFooter = withTheme(styled.div`
  background-color: ${(props) => props.theme.palette.primary.main};

  #menus {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    align-items: center;
    justify-items: center;
    justify-content: center;
  }
  #logo-span {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    > * {
      padding-top: 1rem;
      span {
        line-height: 1rem;
      }
    }
  }
`);
