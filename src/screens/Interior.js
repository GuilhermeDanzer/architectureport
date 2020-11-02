import React from "react";
import { Products } from "../components/Products";
import interior1 from "../assets/img/interior1.jpeg";
import interior2 from "../assets/img/interior2.jpeg";
import interior3 from "../assets/img/interior3.jpeg";
export const Interior = () => {
  const image = [
    { imagem: interior1, tipo: "Casa", nome: "Equilibrium" },
    { imagem: interior2, tipo: "Casa", nome: "Equilibrium" },
    { imagem: interior3, tipo: "Casa", nome: "Equilibrium" },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Products imagens={image} />
    </div>
  );
};
