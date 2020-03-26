import React from "react";

import { Container, Content, Opacity } from "./styles";
import { Link } from "react-router-dom";
import Covid19 from "../../assets/covid19.png";

export default function Header() {
  return (
    <Container>
      <Opacity />
      <Content>
        <nav>
          <img src={Covid19} alt="covid19" />
          <p>COVID-19</p>
        </nav>

        <aside>
          <Link to="/">Painel</Link>
          <Link to="/projections">Projeções</Link>
        </aside>
      </Content>
    </Container>
  );
}
