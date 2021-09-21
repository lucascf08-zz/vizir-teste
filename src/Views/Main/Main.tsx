import { StyledMain } from "./Main.styles";
//components
import Vantagem from "../../Components/Vantagem";
import StdIcon from "../../Components/StdIcon";
import MonthlyPrice from "../../Components/MonthlyPrice";
//assets
import phones from "../../assets/devices.png";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
//mocks
import { mockArray } from "../../mocks";

interface mainProps {
  anchor: React.MutableRefObject<HTMLDivElement | undefined>;
}

const Main = ({ ...props }: mainProps) => {
  return (
    <StyledMain ref={props.anchor}>
      <div className="title-div" id="title-div">
        <h3>Vantagens do FaleMais</h3>
      </div>
      <div id="vantagens-div">
        <Vantagem
          titleText="Lorem ipsum dolor sit amet"
          bodyText="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        >
          <img src={phones} />
        </Vantagem>

        <Vantagem
          titleText="Duis aute irure dolor in reprehenderit"
          bodyText="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  ea commodo consequat."
        >
          <div id="vantagem-2-div-1">
            <StdIcon txt="Lorem" icon="lorem" />
            <PlusIcon />
            <StdIcon txt="Ipsum" icon="ipsum" />
          </div>
          <div id="vantagem-2-div-2">
            <MonthlyPrice reais="00" cents="00" />
          </div>
        </Vantagem>

        <Vantagem
          titleText="Excepteur sint occa ecat cupidatat"
          bodyText="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        >
          <Table padding="none" id="table" size="medium">
            <TableHead>
              <TableCell className="table-head">Origem</TableCell>
              <TableCell className="table-head">Destino</TableCell>
              <TableCell className="table-head">$/min</TableCell>
            </TableHead>
            <TableBody>
              {mockArray.map((mock) => (
                <TableRow>
                  <TableCell>{mock.origem}</TableCell>
                  <TableCell>{mock.destino}</TableCell>
                  <TableCell>{mock.money}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Vantagem>
      </div>
    </StyledMain>
  );
};

export default Main;
