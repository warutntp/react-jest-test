import React from "react";

const ContainElement = () => {
  return (
    <>
      <span data-testid="ancestor">
        <span data-testid="descendant"></span>
      </span>
      <span data-testid="does-not-exist"></span>
    </>
  );
};

export default ContainElement;
