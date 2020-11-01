import React from "react";
import { Products } from "../components/Products";
import interior1 from "../assets/img/interior1.jpeg";
import interior2 from "../assets/img/interior2.jpeg";
import interior3 from "../assets/img/interior3.jpeg";
export const Interior = () => {
  const image = [interior1, interior2, interior3];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Products imagens={image} />
    </div>
  );
};
