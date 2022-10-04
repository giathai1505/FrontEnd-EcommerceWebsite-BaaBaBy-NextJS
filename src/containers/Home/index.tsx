import Head from "next/head";
import Banner from "./Banner";
import Products from "./Products";
import {
  BannerContainer,
  HomeContainer,
  BannerSection,
  Main,
  ProductsSection,
} from "./styles";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerSection>
        <BannerContainer>
          <Banner />
        </BannerContainer>
      </BannerSection>
      <ProductsSection>
        <Main>
          <Products />
        </Main>
      </ProductsSection>
    </HomeContainer>
  );
};

export default Home;
