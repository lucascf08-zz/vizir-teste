import { StyledVantagem } from "./Vantagem.style";

import { Divider } from "@material-ui/core";
import { ReactNode } from "react";

interface vantagemInterface {
  titleText: string;
  bodyText: string;
  children: ReactNode;
}

const Vantagem = ({ ...props }: vantagemInterface) => {
  return (
    <StyledVantagem>
      <div id="inner-div">
        <div id="text-div">
          <h3>{props.titleText}</h3>
          <p>{props.bodyText}</p>
        </div>
        <div id="content-div">{props.children}</div>
      </div>
      <Divider light />
    </StyledVantagem>
  );
};

export default Vantagem;
