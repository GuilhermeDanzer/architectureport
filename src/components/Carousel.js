import React, { useState } from "react";

export const Carousel = ({ children }) => {
  children.map((numeros) => {
    console.log(numeros);
  });

  return (
    <div>
      {children}
      <p>a</p>
    </div>
  );
};
