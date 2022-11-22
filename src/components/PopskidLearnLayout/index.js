import React from "react";
import HeaderPopsKidLearn from "../Layout/components/HeaderPopsKidLearn";
function PopskidLearnLayout({ children }) {
  return (
    <div>
      <HeaderPopsKidLearn />
      {children}
    </div>
  );
}

export default PopskidLearnLayout;
