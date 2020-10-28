import React from "react";

export const Arrow = ({ direction }) => {
  return (
    <div>
      <i className={`fa fa-angle-${direction} fa-3x`} aria-hidden="true"></i>
    </div>
  );
};
