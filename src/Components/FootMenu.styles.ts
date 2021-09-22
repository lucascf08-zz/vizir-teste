import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";

export const StyledFootMenu = withTheme(styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  ul {
    list-style-type: none;
    li {
      padding: 0.5rem;
      word-break: break-word;
    }
    #list-head {
      padding: 1rem 0.5rem;
      font-size: larger;
    }
  }
`);
