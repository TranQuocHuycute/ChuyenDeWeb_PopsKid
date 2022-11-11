import Header from "../components/Header"
import Banner from "./Banner"
import Slider from "../components/Slider"

function DefaultLayout() {
  return (
    <div className="bg-[#e5e7eb]">
        <Header/>
        <div className="bg-[#ededed]"><Slider/></div>
        
        
    </div>
  )
}

export default DefaultLayout