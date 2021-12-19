import React, { Suspense } from "react";
import { Banner } from "../../components/banner/Banner.component";
import { Footer } from "../../components/footer/Footer.component";
import { Header } from "../../components/header/Header.component";
import { Service } from "../../components/services/Service.component";
import { LANGUAGES } from "../../constants/languages";
import Contact from "../contact/Contact.page";

document.title = "Home  |   BM²";

export const Home = () => {
  return (
    <div className="site">
      <Header name="BM " />
      <Suspense fallback="chargement..">
        <Banner />
      </Suspense>
      <Service />
      <Contact />
      <Footer title="BM ²" />
    </div>
  );
};
