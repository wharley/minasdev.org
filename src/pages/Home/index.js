import React from "react";
import Helmet from "react-helmet";
import { ProximosEventos } from "@containers/Home";
import { MinasDevLogo, Newsletter, Footer } from "@components/Common";
import { Header, About } from "@components/Home";
import { Wrapper } from "./UI";

const Home = () => (
  <Wrapper>
    <Helmet title={"Minas Dev"} />

    <div>
      <Header />
      <About />
    </div>

    <div>
      <Newsletter />
      <ProximosEventos />
    </div>

    <Footer />
  </Wrapper>
);

export default Home;
