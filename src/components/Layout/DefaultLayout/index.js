
import Header from "../components/Header";
import BottomNavMobile from "../components/BottomNavMobile";



function DefaultLayout({children}) {
  return (
    <div className="relative">
      <Header />
      {children}
      <BottomNavMobile/>
    </div>
  );
}

export default DefaultLayout;
