import withTheme from "@material-ui/styles/withTheme";
import styled from "styled-components";

export const StyledCadastro = withTheme(styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  text-align: center;

  header {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    justify-items: center;
    gap: 1rem;
    padding: 2rem;

    border-bottom: 1px solid #e5e5e5;
  }
  main {
    display: flex;
    flex-direction: column;

    gap: 1rem;
    form {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .form-field {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    @media (min-width: 60rem) {
      display: grid;
      grid-template-columns: 20vw 60vw 20vw;
      > * {
        grid-column: 2;
      }

      #field-dados-pessoais {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 3rem;
      }
      #field-dados-endereco {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-template-areas:
          "cep cep cep link link end end end end"
          "num num com com cid cid cid cid uf";
        gap: 1rem;
      }
      #detalhes {
        background-color: ${(props) => props.theme.palette.primary.main};
        display: flex;
        flex-direction: column;

        gap: 1rem;
        padding: 2rem;
        #inner-div {
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 60rem) {
          #inner-div {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
      #field-dados-pagamento {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        #pagamento-2 {
          display: grid;
          grid-template-columns: repeat (2, 1fr);
          grid-template-areas:
            "i2 i2"
            "i3 i4";
        }
      }
    }
  }
`);
