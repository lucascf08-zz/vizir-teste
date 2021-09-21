import { ReactComponent as LoremIcon } from "../assets/map-pin.svg";
import { ReactComponent as IpsumIcon } from "../assets/phone-call.svg";
import { StyledStdIcon } from "./StdIcon.styles";

interface stdIconProps {
  icon: "lorem" | "ipsum";
  txt: string;
}
const StdIcon = ({ ...props }: stdIconProps) => {
  return (
    <StyledStdIcon>
      {props.icon === "lorem" && <LoremIcon />}
      {props.icon === "ipsum" && <IpsumIcon />}
      {props.txt}
    </StyledStdIcon>
  );
};

export default StdIcon;
