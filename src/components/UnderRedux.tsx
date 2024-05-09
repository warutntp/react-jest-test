import React from "react";
import { useSelector } from "react-redux";
import {
  add,
  appSelector,
  reset,
  useAppDispatch,
} from "../store/slices/appSlice";

const UnderRedux = () => {
  const appReducer = useSelector(appSelector);
  const dispatch = useAppDispatch();
  return (
    <div>
      App: {appReducer.count}
      <br></br>
      <button onClick={() => dispatch(add())}> add</button>
      <br />
      <button onClick={() => dispatch(reset(10))}> reset</button>
    </div>
  );
};

export default UnderRedux;
