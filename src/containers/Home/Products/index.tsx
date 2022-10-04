import MilkSection from "./MilkSection";
import SaleSection from "./SaleSection";
import { ProductsContainer } from "./styles";
import ToySection from "./ToySection";

const Products: React.FC = () => {
  return (
    <ProductsContainer>
      <SaleSection />
      <MilkSection />
      <ToySection />
    </ProductsContainer>
  );
};

export default Products;
