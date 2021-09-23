import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./Pages/App";
import Cadastro from "./Pages/Cadastro";
import Sucesso from "./Pages/Sucess";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path="/sucesso" exact component={Sucesso} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
