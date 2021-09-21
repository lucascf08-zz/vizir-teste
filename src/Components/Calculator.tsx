import { useEffect, useRef, useState } from "react";
//styles
import { CalcCell, StyledCalculator } from "./Calculator.styles";
//components
import CalculatorInput, {
  MultiCalculatorInput,
} from "../Components/CalculatorInput";
//material-ui
import { Button, Collapse } from "@material-ui/core";
//mocks
import { mockOrigemOptions, mockPlanoOptions } from "../mocks";

const Calculator = () => {
  const inputRef = useRef<HTMLInputElement>();

  const [origem, setOrigem] = useState("");
  const [origemValue, setOrigemValue] = useState<{
    value: string | number;
    label: string;
  }>({ value: "", label: "  " });

  const [destino, setDestino] = useState("");
  const [destinoValue, setDestinoValue] = useState<{
    value: string | number;
    label: string;
  }>({ value: "", label: "  " });

  const [tempo, setTempo] = useState("");
  const [tempoValue, setTempoValue] = useState<{
    value: string | number;
    label: string;
  }>({ value: "", label: "  " });

  const [planoValue, setPlanoValue] = useState<
    {
      value: string | number;
      label: string;
    }[]
  >([]);

  const adicionarPlano = (val: { label: string; value: string | number }[]) => {
    setPlanoValue(val);
  };

  const [total, setTotal] = useState("0,00");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (origemValue.value === "011") {
      setTempo("60 mins");
      setTempoValue({ value: "60", label: "60 mins" });
      setDestino("024 - Rio de Janeiro");
      setDestinoValue({ value: "024", label: "024 - Rio de Janeiro" });

      inputRef.current?.click();
    } else if (origemValue.value === "") {
      setDestino("");
      setDestinoValue({ value: "", label: "" });
      setTempo("");
      setTempoValue({ value: "", label: "" });
    }
  }, [origem]);

  useEffect(() => {
    if (
      planoValue.length > 0 &&
      origemValue.value &&
      destinoValue.value &&
      tempoValue.value
    ) {
      setTotal("30,00");
      setOpen(true);
    } else {
      setTotal("0,00");
      setOpen(false);
    }
  }, [planoValue, origemValue, destinoValue, tempoValue]);

  return (
    <StyledCalculator>
      <CalcCell id="cell-1">
        ORIGEM
        <CalculatorInput
          options={mockOrigemOptions}
          label="Escolher origem"
          onInputChange={setOrigem}
          inputValue={origem}
          onChange={setOrigemValue}
          value={origemValue}
        />
      </CalcCell>
      <CalcCell id="cell-2">
        DESTINO
        <CalculatorInput
          options={[
            { value: "", label: "" },
            { value: "024", label: "024 - Rio de Janeiro" },
          ]}
          label="Escolher destino"
          onInputChange={setDestino}
          inputValue={destino}
          onChange={setDestinoValue}
          value={destinoValue}
        />
      </CalcCell>
      <CalcCell id="cell-3">
        TEMPO
        <CalculatorInput
          options={[{ value: "60", label: "60 mins" }]}
          label="Escolher tempo"
          onInputChange={setTempo}
          inputValue={tempo}
          onChange={setTempoValue}
          value={tempoValue}
        />
      </CalcCell>
      <CalcCell id="cell-4">
        PLANO
        <MultiCalculatorInput
          options={mockPlanoOptions}
          label="Escolher plano"
          onChange={adicionarPlano}
          value={planoValue}
          inputRef={inputRef}
        />
      </CalcCell>
      <CalcCell id="cell-5">
        <strong>Total: </strong>R${total}
      </CalcCell>
      <Collapse in={open} className="cell-6">
        <CalcCell className="cell-6">
          <Button variant="contained" color="secondary">
            CONTRATAR
          </Button>
        </CalcCell>
      </Collapse>
    </StyledCalculator>
  );
};

export default Calculator;
