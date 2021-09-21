import { createTheme } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";
import "@fontsource/roboto";

const MainTheme = createTheme(
  {
    typography: {
      fontFamily: "'Roboto', sans-serif",
      fontWeightRegular: 400,
    },
    palette: {
      mode: "light",
      primary: {
        light: "#FFFFFF",
        main: "#FFE8D3",
        dark: "#EA4646",
      },
      secondary: {
        light: "#666666",
        main: "#AB49CE",
        dark: "#DF5AD2",
      },
    },
  },
  ptBR
);

export default MainTheme;
