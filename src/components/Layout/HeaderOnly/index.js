import { Children } from "react"
import Header from "../components/Header"

function HeaderOnly({Children}) {
  return (
    <div>HeaderOnly
        <Header/>
        <div>{Children}</div>
    </div>
  )
}

export default HeaderOnly