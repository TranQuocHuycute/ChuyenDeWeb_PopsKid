import Header from "../components/Header"
import Banner from "./Banner"

function DefaultLayout() {
  return (
    <div className="bg-[#e5e7eb]">
        <Header/>
        <Banner/>
    </div>
  )
}

export default DefaultLayout