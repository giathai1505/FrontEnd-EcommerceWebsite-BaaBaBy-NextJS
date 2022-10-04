import Footer from "@layouts/Footer";
import Header from "@layouts/Header";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { MainContainer, ContentContainer } from "./styles";

const Main: React.FC = ({ children }) => {
  const ismobile = useMediaQuery({ query: "(max-width: 640px)" });
  console.log(ismobile);
  return (
    <MainContainer>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </MainContainer>
  );
};

export default Main;
