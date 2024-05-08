import React from "react";

const CountElement = () => {
  const data = ["angular", "react", "flutter", "vue.js"];
  return (
    <ul>
      {data.map((item) => (
        <li data-testid="li" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default CountElement;
