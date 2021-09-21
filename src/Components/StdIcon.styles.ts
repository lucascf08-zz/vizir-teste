import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";

export const StyledStdIcon = withTheme(
  styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  `
);
