import React from "react";

const HaveValue = () => {
  return (
    <div>
      <input
        type="text"
        defaultValue="text"
        data-testid="input-text"
        placeholder="input-text"
      />
      <input
        type="number"
        defaultValue="5"
        data-testid="input-number"
        placeholder="input-number"
      />
      <input type="text" data-testid="input-empty" placeholder="input-empty" />
      <select
        multiple
        defaultValue={["second", "third"]}
        data-testid="select-number"
        title="select number"
      >
        <option value="first">First Value</option>
        <option value="second">Second Value</option>
        <option value="third">Third Value</option>
      </select>
    </div>
  );
};

export default HaveValue;
