import React, { useState } from "react";
import App from "./App";
import './App.css'
export default function MainApp() {
  const options = [10, 20, 30, 40, 50];
  const [limit, setlimit] = useState(10);
  const onOptionChangeHandler = (event) => {
    setlimit(event.target.value);
  };
  return (
    <div>
      <div className="Msg_limit_cls">
        <div>SELECT A MESSAGES LIMIT</div>
        <select onChange={onOptionChangeHandler}>
          <option>Please choose one option</option>
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
      </div>
      {console.log("limit is ", limit, typeof limit)}
      <App limit={limit} />
    </div>
  );
}
