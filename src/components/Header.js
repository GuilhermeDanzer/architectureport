import React from "react";
import { Cards } from "./Cards";
import { Link } from "react-router-dom";
import { Arrow } from "./Arrow";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;
export const Header = () => {
  return (
    <div>
      <nav>
        <Wrapper>
          <Link>
            <Cards Texto="Casas" />
          </Link>

          <Link>
            <Cards Texto="Renders" />
          </Link>
          <Link>
            <Cards Texto="Prédios Comerciais" />
          </Link>
          <Link>
            <Cards Texto="Prédios Comerciais" />
          </Link>
          <Link>
            <Cards Texto="Prédios Comerciais" />
          </Link>
          <Link>
            <Cards Texto="Prédios Comerciais" />
          </Link>
          <Link>
            <Cards Texto="Prédios Comerciais" />
          </Link>
        </Wrapper>
      </nav>
    </div>
  );
};
