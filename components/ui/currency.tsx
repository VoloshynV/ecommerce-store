export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "PLN",
});

interface CurrencyProps {
  value: string | number;
}

export const Currency: React.FC<CurrencyProps> = ({ value }) => {
  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};
