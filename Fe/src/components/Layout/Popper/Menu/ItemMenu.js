import React from 'react'
import { Link } from 'react-router-dom'

function ItemMenu({ data }) {
  return (
    <button className="flex items-center w-full px-4 py-5 hover:bg-[#EEEEEE] hover:text-[#09ccc7] hover:border-l-[2px] border-[#09ccc7]">
      <img className="mr-2" src={data.icon} alt="" />
      <Link to={data.to}> {data.title} </Link>
    </button>
    
  )
}

export default ItemMenu
