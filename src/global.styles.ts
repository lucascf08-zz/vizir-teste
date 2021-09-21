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

  .title-div{
    grid-row: 1 / span 3;
    display: flex;
    flex-direction: column;

 
    text-justify: left;
  
    h3 {
      font-size: xxx-large;
      text-justify: left;
      padding: 2rem;
    }  
}


`;

export default GlobalStyle;
