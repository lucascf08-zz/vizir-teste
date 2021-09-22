import { StyledMonthlyPrice } from "./MonthlyPrice.styles";

interface monthlyPriceProps {
  reais: string;
  cents: string;
  color?: "black" | "purple";
}

const MonthlyPrice = ({ ...props }: monthlyPriceProps) => {
  return (
    <StyledMonthlyPrice color={props.color}>
      <div id="div-reais">{props.reais},</div>
      <div id="div-cents">{props.cents}</div>
      <div id="div-mes">/mês</div>
    </StyledMonthlyPrice>
  );
};

export default MonthlyPrice;
