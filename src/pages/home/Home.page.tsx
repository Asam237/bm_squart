import React from "react";
import { Banner } from "../../components/banner/Banner.component";
import { Header } from "../../components/header/Header.component";

document.title = "Home  |   BM²"

export const Home = () => {
    return (
        <div className="site">
            <Header name="BM " />
            <Banner />
        </div>
    )
}