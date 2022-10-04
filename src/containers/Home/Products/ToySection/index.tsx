import ProductsLayout from "../components/Layout";
import { IProduct } from "../MilkSection";

const TOY_LIST: IProduct[] = [
  {
    image: "/ingredient/images/toy-0.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/ingredient/images/toy-1.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/ingredient/images/toy-2.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/ingredient/images/toy-3.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/ingredient/images/toy-4.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/ingredient/images/toy-5.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/ingredient/images/toy-6.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
  {
    image: "/ingredient/images/toy-7.png",
    title: "Sữa Vinamilk ColosGold số 3 800g",
    price: 200000,
  },
];

const ToySection: React.FC = () => {
  return (
    <ProductsLayout
      productList={TOY_LIST}
      title="Đồ chơi trẻ em"
      description="135 khuyến mãi"
    />
  );
};

export default ToySection;
