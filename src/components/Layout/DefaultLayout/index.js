
import Header from "../components/Header";
import BotttomPopskid from "../components/BottomNavMobile/BotttomPopskid";


function DefaultLayout({children}) {
  return (
    <div className="relative">
      <Header />
      {children}
      <BotttomPopskid/>
    </div>
  );
}

export default DefaultLayout;
