import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, StyledButton } from "./components/Button";
import "./App.css";
import { Products } from "./components/Products";
import predio1 from "./assets/img/predio1.jpeg";
import predio2 from "./assets/img/predio2.jpeg";
import predio3 from "./assets/img/predio3.jpeg";
import predio4 from "./assets/img/predio4.jpeg";
import predio5 from "./assets/img/predio5.jpeg";
const Wrapper = styled.div``;

const images = [
  {
    imagem: predio1,
    tipo: "Edifício",
    nome: "Solar Tapajós",
    desc:
      "Donec consectetur vehicula pulvinar. Ut consectetur sagittis metus tristique blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer lectus est, imperdiet et dui eu, vulputate fringilla sapien. Cras vehicula risus id pretium tempus. Sed vitae erat laoreet, hendrerit metus sit amet, pharetra ligula. Etiam dapibus feugiat euismod. Morbi laoreet auctor velit vitae molestie. Quisque hendrerit rutrum lorem, non faucibus ligula sodales ut. Nullam semper leo sit amet sem suscipit cursus. Nullam ut dui in eros blandit efficitur in ac ipsum. Duis metus sapien, accumsan in eros eu, porta venenatis urna. Quisque leo lacus, hendrerit et magna et, tristique volutpat turpis.",
  },
  {
    imagem: predio2,
    tipo: "Edifício",
    nome: "Solar Tapajós",
    desc:
      "Donec consectetur vehicula pulvinar. Ut consectetur sagittis metus tristique blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer lectus est, imperdiet et dui eu, vulputate fringilla sapien. Cras vehicula risus id pretium tempus. Sed vitae erat laoreet, hendrerit metus sit amet, pharetra ligula. Etiam dapibus feugiat euismod. Morbi laoreet auctor velit vitae molestie. Quisque hendrerit rutrum lorem, non faucibus ligula sodales ut. Nullam semper leo sit amet sem suscipit cursus. Nullam ut dui in eros blandit efficitur in ac ipsum. Duis metus sapien, accumsan in eros eu, porta venenatis urna. Quisque leo lacus, hendrerit et magna et, tristique volutpat turpis.",
  },
  {
    imagem: predio3,
    tipo: "Edifício",
    nome: "Solar Tapajós",
    desc:
      "Donec consectetur vehicula pulvinar. Ut consectetur sagittis metus tristique blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer lectus est, imperdiet et dui eu, vulputate fringilla sapien. Cras vehicula risus id pretium tempus. Sed vitae erat laoreet, hendrerit metus sit amet, pharetra ligula. Etiam dapibus feugiat euismod. Morbi laoreet auctor velit vitae molestie. Quisque hendrerit rutrum lorem, non faucibus ligula sodales ut. Nullam semper leo sit amet sem suscipit cursus. Nullam ut dui in eros blandit efficitur in ac ipsum. Duis metus sapien, accumsan in eros eu, porta venenatis urna. Quisque leo lacus, hendrerit et magna et, tristique volutpat turpis.",
  },
  {
    imagem: predio4,
    tipo: "Edifício",
    nome: "Solar Tapajós",
    desc:
      "Donec consectetur vehicula pulvinar. Ut consectetur sagittis metus tristique blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer lectus est, imperdiet et dui eu, vulputate fringilla sapien. Cras vehicula risus id pretium tempus. Sed vitae erat laoreet, hendrerit metus sit amet, pharetra ligula. Etiam dapibus feugiat euismod. Morbi laoreet auctor velit vitae molestie. Quisque hendrerit rutrum lorem, non faucibus ligula sodales ut. Nullam semper leo sit amet sem suscipit cursus. Nullam ut dui in eros blandit efficitur in ac ipsum. Duis metus sapien, accumsan in eros eu, porta venenatis urna. Quisque leo lacus, hendrerit et magna et, tristique volutpat turpis.",
  },
  {
    imagem: predio5,
    tipo: "Edifício",
    nome: "Solar Tapajós",
    desc:
      "Donec consectetur vehicula pulvinar. Ut consectetur sagittis metus tristique blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer lectus est, imperdiet et dui eu, vulputate fringilla sapien. Cras vehicula risus id pretium tempus. Sed vitae erat laoreet, hendrerit metus sit amet, pharetra ligula. Etiam dapibus feugiat euismod. Morbi laoreet auctor velit vitae molestie. Quisque hendrerit rutrum lorem, non faucibus ligula sodales ut. Nullam semper leo sit amet sem suscipit cursus. Nullam ut dui in eros blandit efficitur in ac ipsum. Duis metus sapien, accumsan in eros eu, porta venenatis urna. Quisque leo lacus, hendrerit et magna et, tristique volutpat turpis.",
  },
];
const App = () => {
  return (
    <div>
      <Products imagens={images} />
    </div>
  );
};
export default App;
