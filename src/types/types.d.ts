export type ItemProps = {
  name: string;
  price: string;
  description: string;
  addItems: (number) => void;
  addPrice: (number) => void;
};
