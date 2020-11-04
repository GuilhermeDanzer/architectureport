import React from "react";
import { Detalhes } from "../components/Detalhes";
export const Details = (props) => {
  const { data } = props.location.state;
  console.log(data);
  return (
    <div>
      <Detalhes data={data} />
    </div>
  );
};
