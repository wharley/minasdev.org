import React from "react";
import Helmet from "react-helmet";
import { ProximosEventos } from "@containers/Home";
import { MinasDevLogo, Newsletter, Footer } from "@components/Common";
import { Header, About } from "@components/Home";
import { Wrapper, ParallaxTop, ParallaxBottom } from "./UI";

const Home = () => (
  <Wrapper>
    <Helmet title={"Minas Dev"} />

    <ParallaxTop>
      <Header />
      <About />
    </ParallaxTop>

    <ParallaxBottom>
      <Newsletter />
      <ProximosEventos />
      <Footer />
    </ParallaxBottom>
  </Wrapper>
);

export default Home;
