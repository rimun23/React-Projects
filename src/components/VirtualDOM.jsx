import React, { useRef } from "react";
function VirtualDOM() {
  const firstBox = useRef("");
  const secondBox = useRef("");
  const thirdBox = useRef("");
  const checkSize = (branch) => {
    if (branch.current) {
      alert(
        `блок с шириной ${branch.current.offsetWidth} и высотой ${branch.current.offsetHeight}`
      );
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <div
        className="box"
        onClick={() => checkSize(firstBox)}
        ref={firstBox}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "red",
          margin: "20px",
        }}
      ></div>
      <div
        className="box"
        onClick={() => checkSize(secondBox)}
        ref={secondBox}
        style={{
          width: "300px",
          height: "200px",
          backgroundColor: "blue",
          margin: "20px",
        }}
      ></div>
      <div
        className="box"
        onClick={() => checkSize(thirdBox)}
        ref={thirdBox}
        style={{
          width: "100px",
          height: "400px",
          backgroundColor: "green",
          margin: "20px",
        }}
      ></div>
    </div>
  );
}
export default VirtualDOM;
