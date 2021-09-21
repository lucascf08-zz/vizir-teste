import { useEffect, useState } from "react";
//styles
import { CalcCell, StyledCalculator } from "./Calculator.styles";
//components
import CalculatorInput, {
  MultiCalculatorInput,
} from "../Components/CalculatorInput";
//mocks
import { mockOrigemOptions, mockPlanoOptions } from "../mocks";

const Calculator = () => {
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

  const [plano, setPlano] = useState("");
  const [planoValue, setPlanoValue] = useState<
    {
      value: string | number;
      label: string;
    }[]
  >([{ value: "", label: "  " }]);

  const adicionarPlano = (val: { label: string; value: string | number }[]) => {
    setPlanoValue([...planoValue, val[0]]);
  };

  useEffect(() => {
    if (origemValue.value === "011") {
      console.log("teste");
      setTempo("60 mins");
      setDestino("024 - Rio de Janeiro");
      setDestinoValue({ value: "024", label: "024 - Rio de Janeiro" });
    } else if (origemValue.value === "") {
      setDestino("");
      setDestinoValue({ value: "", label: "" });
    }
  }, [origem]);

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
          onInputChange={setPlano}
          inputValue={plano}
          onChange={adicionarPlano}
          value={planoValue}
        />
      </CalcCell>
      <CalcCell id="cell-5">blob</CalcCell>
    </StyledCalculator>
  );
};

export default Calculator;
