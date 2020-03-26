import React from "react";

import { Container } from "./styles";

export default function ParcialNumbers({
  numbers,
  country,
  onClick,
  selected
}) {
  return (
    <Container onClick={onClick} selected={selected}>
      <span>{country}</span>
      <span>{numbers}</span>
    </Container>
  );
}
