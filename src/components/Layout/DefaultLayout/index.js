
import Header from "../components/Header";
import BottomNavMobile from "../components/BottomNavMobile";
import Banner from "./Banner";
import { Children } from "react";
import Carousel from "../components/Carousel"



function DefaultLayout({children}) {
  return (
    <div className="bg-[#f4f3f3] relative">
      <Header />
      {children}
      <Carousel/>
      <BottomNavMobile/>
    </div>
  );
}

export default DefaultLayout;
