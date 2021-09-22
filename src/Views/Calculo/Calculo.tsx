import { StyledCalculo } from "./Calculo.styles";
import Calculator from "../../Components/Calculator";

interface calculoProps {
  anchor: React.MutableRefObject<HTMLDivElement | undefined>;
}

const Calculo = ({ ...props }: calculoProps) => {
  return (
    <StyledCalculo ref={props.anchor}>
      <div className="title-div" id="title-div">
        <h3>Faça o cálculo do FaleMais</h3>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div id="calculator-div">
        <Calculator />
      </div>
    </StyledCalculo>
  );
};

export default Calculo;
