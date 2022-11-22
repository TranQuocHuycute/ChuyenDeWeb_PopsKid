import Header from "../components/Header"
import Banner from "./Banner"
import LearningCardNB from "../components/LearningCartNB"
import SixReasons from "../components/SixReasons"
import Footer from "../components/Footer" 

function DefaultLayout() {
  return (
    <div className="bg-[#e5e7eb]">
        <Header/>
        <Banner/>
        <div className="bg-[#f1f1f1]">
           <LearningCardNB />
            <SixReasons/>
        </div>
       <Footer/>
    </div>
  )
}

export default DefaultLayout