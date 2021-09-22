import { useEffect, useRef, useState } from "react";
//styles
import { CalcCell, StyledCalculator } from "./Calculator.styles";
//components
import { StdMultiSelect, StdSelect } from "./CalculatorInput";
//material-ui
import { Button, Collapse } from "@material-ui/core";
//mocks
import {
  mockDestinoOptions,
  mockOrigemOptions,
  mockPlanoOptions,
  mockTempoOptions,
} from "../mocks";

import { useHistory } from "react-router";

const Calculator = () => {
  const inputRef = useRef<HTMLInputElement>();

  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [tempo, setTempo] = useState("");
  const [planos, setPlanos] = useState<string[]>([]);

  const [total, setTotal] = useState("0,00");
  const [open, setOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (origem === "011") {
      setTempo("60");

      setDestino("024");

      inputRef.current?.click();
    } else if (origem === "") {
      setDestino("");

      setTempo("");
    }
  }, [origem]);

  useEffect(() => {
    if (planos.length > 0 && origem && destino && tempo) {
      setTotal("30,00");
      setOpen(true);
    } else {
      setTotal("0,00");
      setOpen(false);
    }
  }, [planos, origem, destino, setTempo]);

  return (
    <StyledCalculator>
      <CalcCell id="cell-1">
        ORIGEM
        <StdSelect
          label="Escolher origem"
          value={origem}
          onChange={setOrigem}
          options={mockOrigemOptions}
        />
      </CalcCell>

      <CalcCell id="cell-2">
        DESTINO
        <StdSelect
          label="Escolher destino"
          value={destino}
          onChange={setDestino}
          options={mockDestinoOptions}
        />
      </CalcCell>

      <CalcCell id="cell-3">
        TEMPO
        <StdSelect
          label="Escolher tempo"
          value={tempo}
          onChange={setTempo}
          options={mockTempoOptions}
        />
      </CalcCell>

      <CalcCell id="cell-4">
        PLANO
        <StdMultiSelect
          label="Selecione planos"
          value={planos}
          onChange={setPlanos}
          options={mockPlanoOptions}
        />
      </CalcCell>

      <CalcCell id="cell-5">
        <strong>Total: </strong>R${total}
      </CalcCell>

      <Collapse in={open} className="cell-6">
        <CalcCell className="cell-6">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => history.push("/cadastro")}
          >
            CONTRATAR
          </Button>
        </CalcCell>
      </Collapse>
    </StyledCalculator>
  );
};

export default Calculator;
