import React from 'react'

function Wrapper({children}) {
  return (
    <div className='w-[38rem] h-auto bg-white drop-shadow-lg'>{children}</div>
  )
}

export default Wrapper