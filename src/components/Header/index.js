import React from "react";

import { Container, Content, Opacity } from "./styles";
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
      </Content>
    </Container>
  );
}
