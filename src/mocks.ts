export const mockArray: { origem: string; destino: string; money: string }[] = [
  { origem: "011", destino: "016", money: "1.90" },
  { origem: "016", destino: "011", money: "2.90" },
  { origem: "011", destino: "017", money: "1.70" },
  { origem: "017", destino: "011", money: "2.70" },
];

export const mockOrigemOptions: { value: string; label: string }[] = [
  { value: "", label: "" },
  { value: "011", label: "011 - São Paulo" },
  { value: "012", label: "011 - Lorem Ipsum" },
  { value: "013", label: "011 - Sit Amet" },
  { value: "014", label: "011 - Duis aute" },
  { value: "015", label: "011 - Consequat" },
];

export const mockPlanoOptions: { value: string; label: string }[] = [
  { value: "", label: "" },
  { value: "30", label: "faleMais30" },
  { value: "30", label: "faleMais60" },
  { value: "30", label: "faleMais120" },
];
