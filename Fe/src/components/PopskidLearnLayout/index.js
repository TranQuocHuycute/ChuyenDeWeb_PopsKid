import React from "react";
import HeaderPopsKidLearn from "../Layout/components/HeaderPopsKidLearn";
import BotttomPopskidLearn from "../Layout/components/BottomNavMobile/BotttomPopskidLearn";
import Footer from "../Layout/components/Footer";
function PopskidLearnLayout({ children }) {
  return (
    <div>
      <HeaderPopsKidLearn />
      {children}
      <BotttomPopskidLearn />
      <Footer/>
    </div>
  );
}

export default PopskidLearnLayout;
