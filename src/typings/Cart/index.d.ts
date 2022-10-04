import { LineItem } from "src/apiCaller";

export type ICartItem = LineItem & {
  checked?: boolean;
};
