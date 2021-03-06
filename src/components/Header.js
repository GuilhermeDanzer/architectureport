import React from "react";
import { Cards } from "./Cards";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/img/Logo.png";
export const HeaderNav = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: space-evenly;
  padding: 10px;
  flex: 1;
  flex-wrap: wrap;
  position: relative;
  &&:before {
    position: absolute;
    content: "";
    top: 0;
    height: 1.5px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 90%;
    background: #5a5a5a;
  }

  &&:after {
    position: absolute;
    content: "";
    bottom: 0;
    height: 1.5px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 90%;
    background: #5a5a5a;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Itens = styled.div`
  font-size: 1.2rem;
  box-sizing: border-box;
  transition: ease-out 0.9s;
  margin: 10px;
  a {
    position: relative;
    transition: all 0.45s ease;
  }
  a:hover {
    color: #343434;
  }

  a:before {
    position: absolute;
    content: "";
    height: 1.5px;
    bottom: 0;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 0;
    background: #5a5a5a;
    transition: all 0.35s ease;
  }
  a:hover:before {
    width: 100%;
  }
`;

const navItens = [
  { nome: "Prédios", route: "/", exact: true },
  { nome: "Interior", route: "/interiores", exact: false },
  { nome: "Estabelecimentos Comerciais", route: "/interiores", exact: false },
  { nome: "Interior", route: "/interiores", exact: false },
  { nome: "Interior", route: "/interiores", exact: false },
  { nome: "Interior", route: "/interiores", exact: false },
  { nome: "Interior", route: "/interiores", exact: false },
];

export const Header = () => {
  return (
    <Wrapper>
      <div style={{ width: 200, alignSelf: "center" }}>
        <img src={Logo} alt="Logo" style={{ width: "100%" }} />
      </div>

      <HeaderNav>
        {navItens.map((itens, i) => {
          return (
            <Itens keys={i}>
              <Link to={itens.route}>{itens.nome}</Link>
            </Itens>
          );
        })}
      </HeaderNav>
    </Wrapper>
  );
};
