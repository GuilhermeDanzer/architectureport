import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  border: none;
  outline: none;
  width: ${(props) => (props.width ? props.width : "")}px;
  cursor: pointer;
`;

export const StyledButton = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  border: none;
  outline: none;
`;
