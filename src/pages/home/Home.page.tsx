import React from "react";
import { Banner } from "../../components/banner/Banner.component";
import { Footer } from "../../components/footer/Footer.component";
import { Header } from "../../components/header/Header.component";
import { Service } from "../../components/services/Service.component";
import { LANGUAGES } from "../../constants/languages";

document.title = "Home  |   BM²";

export const Home = () => {
  return (
    <div className="site">
      <Header name="BM " />
      <Banner />
      <Service />
      <Footer title={LANGUAGES.home.name} />
    </div>
  );
};
