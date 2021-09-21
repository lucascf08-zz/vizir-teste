import { StyledMonthlyPrice } from "./MonthlyPrice.styles";

interface monthlyPriceProps {
  reais: string;
  cents: string;
}

const MonthlyPrice = ({ ...props }: monthlyPriceProps) => {
  return (
    <StyledMonthlyPrice>
      <div id="div-reais">{props.reais},</div>
      <div id="div-cents">{props.cents}</div>
      <div id="div-mes">/mês</div>
    </StyledMonthlyPrice>
  );
};

export default MonthlyPrice;
