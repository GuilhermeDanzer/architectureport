import React from "react";
import styled from "styled-components";

const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 80px;
  background-color: #cc1232;
  text-align: center;
  border-radius: 20px;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #aa2343;
    box-shadow: inset 0 0 10px #000000;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 10px;
`;

const Text = styled.h3`
  line-height: 1.1;
  overflow: hidden;
  white-space: no-wrap;
  text-overflow: ellipsis;
  color: #e8e8e8 !important;
`;

export const Cards = ({ Texto, ...props }) => {
  return (
    <Wrapper>
      <CardBody>
        <Text>{Texto}</Text>
      </CardBody>
    </Wrapper>
  );
};
