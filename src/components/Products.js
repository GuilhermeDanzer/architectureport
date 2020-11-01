import React from "react";
import styled from "styled-components";

export const Products = ({ imagens }) => {
  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    padding: 20px;
    column-gap: 2rem;
    row-gap: 1.2rem;
  `;
  const Imagem = styled.img`
    width: 100%;
  `;
  return (
    <Grid>
      {imagens.map((image, i) => {
        return (
          <div key={i}>
            <Imagem src={image} alt="foto" />
          </div>
        );
      })}
    </Grid>
  );
};
