import React from "react";
import styled from "styled-components";
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  padding: 20px;
  column-gap: 2rem;
  row-gap: 1.2rem;
`;
const Imagem = styled.img`
  width: 100%;
  filter: grayscale(1);
  &:hover {
    filter: none;
  }
`;
const Texto = styled.span`
  position: absolute;
  background-color: transparent;
  z-index: -2;
  vertical-align: middle;
  text-transform: uppercase;
  color: #ece9e3;
  font-size: 30px;
  font-weight: 600 !important;
  font-family: "Roboto", sans-serif;
  line-height: 1;
  bottom: 36px;
`;
const Title = styled.h2`
  position: absolute;
  vertical-align: middle;
  text-transform: uppercase;
  background-color: transparent;
  z-index: -2;
  font-weight: 400 !important;
  font-size: 20px;
  color: #ece9e3;
  line-height: 1;
  bottom: 68px;
  font-family: "Roboto", sans-serif;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  &:hover {
    h2 {
      z-index: 99;
    }
    span {
      z-index: 99;
    }
  }
`;

export const Products = ({ imagens }) => {
  return (
    <Grid>
      {imagens.map((image, i) => {
        return (
          <Container key={i}>
            <Title>{image.tipo}</Title>
            <Texto>{image.nome}</Texto>
            <Imagem src={image.imagem} alt="foto" />
          </Container>
        );
      })}
    </Grid>
  );
};
