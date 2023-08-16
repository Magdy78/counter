import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleToggleText = () => {
    setTextVisible(!textVisible);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <h1>Welcome to the Counter </h1>
        <br />
        <div className="card">
          <div className="tools">
            <div className="circle">
              <span className="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
          <div className="card__content">
            <div className="Items">
              {textVisible && (
                <h1
                  className="text-center fs-5"
                  style={{ fontSize: "70px", color: "white" }}
                >
                  The number now is {count}
                </h1>
              )}
              <div className="d-flex justify-content-center">
                <button onClick={handleIncrement} className="btn btn-success me-3">
                  Increase
                </button>
                <button onClick={handleDecrement} className="btn btn-danger ms-3">
                  Decrease
                </button>
                <button onClick={handleToggleText} className="btn btn-secondary ms-3">
                  Toggle Text
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
