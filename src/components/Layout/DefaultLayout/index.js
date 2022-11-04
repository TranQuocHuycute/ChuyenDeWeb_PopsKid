
import Header from "../components/Header";
import BottomNavMobile from "../components/BottomNavMobile";
import Carousel from "../components/Carousel"
import LearningCard from "../components/LearningCard"


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
