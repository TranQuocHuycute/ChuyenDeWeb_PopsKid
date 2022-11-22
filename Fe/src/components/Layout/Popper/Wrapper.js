import React from "react";

function Wrapper({ children }) {
  return <div className=" w-auto h-auto bg-white drop-shadow-[0_15px_15px_rgba(0,0,0,0.15)]">{children}</div>;
}

export default Wrapper;
