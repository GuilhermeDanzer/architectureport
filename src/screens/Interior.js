import React from "react";
import { Products } from "../components/Products";
import interior1 from "../assets/img/interior1.jpeg";
import interior2 from "../assets/img/interior2.jpeg";
import interior3 from "../assets/img/interior3.jpeg";
export const Interior = () => {
  const image = [
    {
      imagem: interior1,
      tipo: "Casa",
      nome: "Equilibrium",
      desc:
        "Donec consectetur vehicula pulvinar. Ut consectetur sagittis metus tristique blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer lectus est, imperdiet et dui eu, vulputate fringilla sapien. Cras vehicula risus id pretium tempus. Sed vitae erat laoreet, hendrerit metus sit amet, pharetra ligula. Etiam dapibus feugiat euismod. Morbi laoreet auctor velit vitae molestie. Quisque hendrerit rutrum lorem, non faucibus ligula sodales ut. Nullam semper leo sit amet sem suscipit cursus. Nullam ut dui in eros blandit efficitur in ac ipsum. Duis metus sapien, accumsan in eros eu, porta venenatis urna. Quisque leo lacus, hendrerit et magna et, tristique volutpat turpis.",
    },
    {
      imagem: interior2,
      tipo: "Casa",
      nome: "Equilibrium",
      desc: "Donec consectetur vehicula pulvinar. ",
    },
    {
      imagem: interior3,
      tipo: "Casa",
      nome: "Equilibrium",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est non magna vehicula sollicitudin. Sed hendrerit sagittis rhoncus. Integer blandit mollis neque nec mattis. Nulla maximus vestibulum commodo. ",
    },
  ];

  return (
    <div>
      <Products imagens={image} />
    </div>
  );
};
