import React, { useState } from "react";

const ClickEventAndCheckRole = () => {
  const [dataArr, setDataArr] = useState<string[]>([]);
  const data = ["angular", "react", "flutter", "vue.js"];
  const fetchData = () => {
    setDataArr([...dataArr, ...data]);
  };

  const clearData = () => {
    setDataArr([]);
  };
  return (
    <>
      <button onClick={fetchData}>fetch data</button>
      <button onClick={clearData}>clear data</button>
      <ul>
        {dataArr.map((item, index) => (
          <li role="item" key={item + "-" + index}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClickEventAndCheckRole;
