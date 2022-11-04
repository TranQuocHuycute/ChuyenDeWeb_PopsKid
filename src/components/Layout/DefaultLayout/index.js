
import Header from "../components/Header";
import BottomNavMobile from "../components/BottomNavMobile";

function DefaultLayout({children}) {
  return (
    <div className="bg-[#f4f3f3] relative">
      <Header />
      {children}
      <LearningCard/>
      <Carousel/>
      <BottomNavMobile/>
    </div>
  );
}

export default DefaultLayout;
