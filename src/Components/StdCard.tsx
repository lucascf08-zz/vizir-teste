import { StyledStdCard } from "./StdCard.styles";
//assets
import Blob30 from "../assets/blob1.svg";
import Blob60 from "../assets/blob2.svg";
import Blob120 from "../assets/blob3.svg";
import Blobx from "../assets/blob4.svg";

import { ReactComponent as Check } from "../assets/check.svg";
import MonthlyPrice from "./MonthlyPrice";
import { Button, SvgIcon } from "@material-ui/core";
import { useHistory } from "react-router";

interface cardProps {
  type: "30" | "60" | "120" | "x";
  label: string;
}
const StdCard = ({ ...props }: cardProps) => {
  const history = useHistory();

  return (
    <StyledStdCard>
      {props.type === "30" && <img src={Blob30} />}
      {props.type === "60" && <img src={Blob60} />}
      {props.type === "120" && <img src={Blob120} />}
      {props.type === "x" && <img src={Blobx} />}

      <h4>{props.label}</h4>
      {props.type !== "x" && (
        <MonthlyPrice reais="00" cents="00" color="black" />
      )}
      {props.type === "x" && <h3>Customize o plano do seu jeito!</h3>}
      <h5>For organizing every corner of your life</h5>
      <h4>everything in personal plus:</h4>
      <h5>
        <Check /> Unlimited File Uploads
      </h5>
      <h5>
        <Check /> Unlimited File Uploads
      </h5>
      <h5>
        <Check /> Unlimited File Uploads
      </h5>

      <Button
        variant="outlined"
        color="secondary"
        onClick={() => history.push("/cadastro")}
      >
        CONTRATAR
      </Button>
    </StyledStdCard>
  );
};

export default StdCard;
