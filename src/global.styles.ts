import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, #root{
    
    ::-webkit-scrollbar {
      display: none;
    }
    
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    min-height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto";
  }

  p {
    margin: 0;
  }

  h3, h5, h4{
    margin: 0;
  }

  .title-div{
   display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      font-size: clamp(2rem, 3vw, 5rem);
      padding: 0 2rem;
    }
  
}


`;

export default GlobalStyle;
