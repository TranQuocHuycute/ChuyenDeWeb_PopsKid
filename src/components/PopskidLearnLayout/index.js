import React from "react";
import HeaderPopsKidLearn from "../Layout/components/HeaderPopsKidLearn";
import BotttomPopskidLearn from "../Layout/components/BottomNavMobile/BotttomPopskidLearn";
function PopskidLearnLayout({ children }) {
  return (
    <div>
      <HeaderPopsKidLearn />
      {children}
      <BotttomPopskidLearn />
    </div>
  );
}

export default PopskidLearnLayout;
