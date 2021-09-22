import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./Pages/App";
import Cadastro from "./Pages/Cadastro";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/cadastro" exact component={Cadastro} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
