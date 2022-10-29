import Header from "../components/Header";
import BottomNavMobile from "../components/BottomNavMobile";
import Banner from "./Banner";
import { Children } from "react";

function DefaultLayout({children}) {
  return (
    <div className="bg-[#f4f3f3] relative">
      <Header />
      {children}
      <BottomNavMobile/>
    </div>
  );
}

export default DefaultLayout;
