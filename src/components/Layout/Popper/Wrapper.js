import React from "react";

function Wrapper({ children }) {
  return <div className=" w-auto h-auto bg-white drop-shadow-lg">{children}</div>;
}

export default Wrapper;
