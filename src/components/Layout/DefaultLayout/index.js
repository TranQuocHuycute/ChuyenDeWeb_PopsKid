import Header from "../components/Header"
import Carousel from "../components/Carousel"
import Banner from "./Banner"

function DefaultLayout() {
  return (
    <div className="bg-[#e5e7eb]">
        <Header/>
        <Banner/>
        <div className="bg-[#fff]">
          <Carousel/>
        </div>
    </div>
  )
}

export default DefaultLayout