import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import useWindowDimensions from "../hooks/useWindowDimension";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  padding: 20px;
  column-gap: 2rem;
  row-gap: 1.2rem;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 300px;

  }
`;
const Imagem = styled.div`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  filter: grayscale(1);
  &:hover {
    filter: none;
    opacity: 0.8;
    div {
      display: block;
    }
  }
`;
const TextoContainer = styled.div`
  color: white;
  display: ${(props) => (props.mobile < 500 ? "block" : "none")};
  text-align: center;
  margin-bottom: 3%;
  text-transform: uppercase;
  background-color: transparent;
`;

const Texto = styled.span`
  vertical-align: middle;
  text-transform: uppercase;
  color: white;
  font-size: 30px;
  font-family: sans-serif;
  line-height: 1;
  background-color: transparent;
  z-index: -2;
`;
const Title = styled.h2`
  z-index: -2;
  vertical-align: middle;
  text-transform: uppercase;
  background-color: transparent;
  font-weight: 400 !important;
  font-size: 20px;
  line-height: 1;

  font-family: sans-serif;
`;

/**            <Title>{image.tipo}</Title>
            <Texto>{image.nome}</Texto>
            <Imagem src={image.imagem} alt="foto" /> */
export const Products = ({ imagens }) => {
  const { width } = useWindowDimensions();
  console.log(width);
  return (
    <Grid>
      {imagens.map((image, i) => {
        return (
          <Link to={{ pathname: "/detalhes", state: { data: image } }}>
            <Container key={i}>
              <Imagem img={image.imagem}>
                <TextoContainer mobile={width}>
                  <Title>{image.tipo}</Title>
                  <Texto>{image.nome}</Texto>
                  <Title>&nbsp;</Title>
                </TextoContainer>
              </Imagem>
            </Container>
          </Link>
        );
      })}
    </Grid>
  );
};
