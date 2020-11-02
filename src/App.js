import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, StyledButton } from "./components/Button";
import "./App.css";
import { Products } from "./components/Products";
import predio1 from "./assets/img/predio1.jpeg";
import predio2 from "./assets/img/predio2.jpeg";
import predio3 from "./assets/img/predio3.jpeg";
import predio4 from "./assets/img/predio4.jpeg";
import predio5 from "./assets/img/predio5.jpeg";
const Wrapper = styled.div``;

const images = [
  { imagem: predio1, tipo: "Edifício", nome: "Solar Tapajós" },
  { imagem: predio2, tipo: "Edifício", nome: "Solar Tapajós" },
  { imagem: predio3, tipo: "Edifício", nome: "Solar Tapajós" },
  { imagem: predio4, tipo: "Edifício", nome: "Solar Tapajós" },
  { imagem: predio5, tipo: "Edifício", nome: "Solar Tapajós" },
];
const App = () => {
  return (
    <div>
      <Products imagens={images} />
    </div>
  );
};
export default App;
