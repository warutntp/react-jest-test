import React from "react";

const Disabled = () => {
  return (
    <>
      <button data-testid="button" type="submit" disabled>
        submit
      </button>
      <fieldset disabled>
        <input
          type="text"
          data-testid="input"
          placeholder="Please enter value"
        />
      </fieldset>
      <button data-testid="button2" type="submit">
        button2
      </button>
    </>
  );
};

export default Disabled;
