import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ItemMenu({ data }) {
  return (
    <button className="flex w-full px-4 py-5 hover:bg-[#EEEEEE] hover:text-[#09ccc7] hover:border-l-[2px] border-[#09ccc7]">
      <img className="mr-2" src={data.icon} alt="" />
      {/* <FontAwesomeIcon icon="fa-light fa-book-open" /> */}
      <Link to={data.to}> {data.title} </Link>
    </button>
  )
}

export default ItemMenu
