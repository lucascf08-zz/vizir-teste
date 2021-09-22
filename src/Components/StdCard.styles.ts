import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";

export const StyledStdCard = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border: 1px solid #e5e5e5;
  border-radius: 2%;
  padding: 2rem;
`);
