import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Columns = styled.div`
  flex: ${(props) => props.flex};
`;

const Image = styled.img`
  width: 100%;
`;
const Info = styled.div`
  text-align: center;
`;

const ImageContainer = styled.div`
  margin: auto;
  max-width: 500px;
  min-width: 381px;
  height: auto;
  padding-top: 10px;
`;
const Desc = styled.p`
  text-align: left;
`;

export const Detalhes = ({ data }) => {
  console.log(data);
  return (
    <Wrapper>
      <Columns flex={3}>
        <ImageContainer>
          <Image src={data.imagem} />
        </ImageContainer>
      </Columns>
      <Columns flex={1}>
        <Info>
          <h2>{data.nome}</h2>
          <Desc>{data.desc}</Desc>
        </Info>
      </Columns>
    </Wrapper>
  );
};
