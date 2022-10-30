import Header from "../components/Header"
import LearningCard from "../components/LearningCard"
import Banner from "./Banner"


function DefaultLayout() {
  return (
    <div className="bg-[#f2fafd]">
        <Header/>
        <Banner/>
        <LearningCard/>
    </div>
  )
}

export default DefaultLayout