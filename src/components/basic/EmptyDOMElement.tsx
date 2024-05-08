import React from "react";

const EmptyDOMElement = () => {
  return (
    <>
      <span data-testid="not-empty">
        <span data-testid="empty"></span>
      </span>
      <span data-testid="with-whitespace"> </span>
      <span data-testid="with-comment"> {/* comment */}</span>
    </>
  );
};

export default EmptyDOMElement;
