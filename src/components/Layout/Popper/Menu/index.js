import React from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { Wrapper as PopperWrapper } from "../../Popper";
import ItemMenu from "./ItemMenu";

function index({ children, items }) {
  const renderItems = () => {
    return items.map((item, index) => <ItemMenu key={index} data={item} />);
  };

  return (
    <Tippy
      trigger="click"
      render={(attrs) => (
        <div className="box" tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <div className="w-[26rem]">{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default index;
