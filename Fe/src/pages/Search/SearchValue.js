import React from 'react'
import { Link } from 'react-router-dom'

function SearchValue({ data , to}) {
  console.log('data', data)
  console.log('to', to)
  return (
    <div className="md:mt-0 mx-8 mt-16">
      <div class="grid grid-cols-1 divide-y ">
        {data.map((e) => {
          return (
            <Link to={`${to + e.id}`} key={e.id} className="py-2 text-[#797979]">
              {e.title}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SearchValue
