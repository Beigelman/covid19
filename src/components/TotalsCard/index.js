import React from "react";

import { Container } from "./styles";

export default function TotalsCard({ title, numbers }) {
  return (
    <Container>
      <p>{title}</p>
      <p>{numbers}</p>
    </Container>
  );
}
