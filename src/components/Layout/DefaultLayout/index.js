import Header from "../components/Header"
import Slider from "../components/Slider"
import Banner from "./Banner"

function DefaultLayout() {
  return (
    <div className="bg-[#e5e7eb]">
        <Header/>
        <Banner/>
        <Slider/>
    </div>
  )
}

export default DefaultLayout