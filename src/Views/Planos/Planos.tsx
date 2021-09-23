import { StyledPlanos } from "./Planos.styles";
import StdCard from "../../Components/StdCard";
interface planosProps {
  anchor: React.MutableRefObject<HTMLDivElement | undefined>;
}
const Planos = ({ ...props }: planosProps) => {
  return (
    <StyledPlanos ref={props.anchor}>
      <h1>Planos</h1>
      <p>
        Excepteur sint occaecat cupidatatnon proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </p>

      <div id="cards-div">
        <StdCard type="30" label="FaleMais 30" />
        <StdCard type="60" label="FaleMais 60" />
        <StdCard type="120" label="FaleMais 120" />
        <StdCard type="x" label="Personalizado" />
      </div>
    </StyledPlanos>
  );
};

export default Planos;
