import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, StyledButton } from "./components/Button";
import "./App.css";
import { Carousel } from "./components/Carousel";

const Wrapper = styled.div``;
const App = () => {
  return (
    <div>
      <Carousel>
        <div>
          <p>Numero 1</p>
        </div>

        <div>
          <p>Numero 2</p>
        </div>
      </Carousel>
    </div>
  );
};
export default App;
