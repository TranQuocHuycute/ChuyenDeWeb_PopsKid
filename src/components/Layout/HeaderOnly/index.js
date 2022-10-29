import { Children } from "react"
import Header from "../components/Header"

function HeaderOnly({children}) {
  return (
    <div>HeaderOnly
        <Header/>
        <div>{children}</div>
    </div>
  )
}

export default HeaderOnly