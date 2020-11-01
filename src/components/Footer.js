import React from "react";
import { HeaderNav } from "./Header";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const Columns = styled.div``;
export const Footer = () => {
  return (
    <Wrapper>
      <HeaderNav>
        <Columns>
          <h4>Site: Guilherme Danzer</h4>
        </Columns>
        <Columns>
          <h4>Renders: Arthur Trilha</h4>
        </Columns>
      </HeaderNav>
    </Wrapper>
  );
};
