import React , {useState} from 'react'
import Rating from 'react-rating'
import startActive from '../../assets/images/startActive.png'
import starUn from '../../assets/images/starUn.png'

export default function MyComponent() {

  const [numberStart , setNumberStart ] = useState(5)
  console.log('numberStart' , numberStart);
  return (
    <div className="my-[200px] ">
      <Rating
       onClick={setNumberStart}
       initialRating={numberStart}
       fullSymbol={<img src= {starUn} className="icon w-5" />}
       emptySymbol={<img src= {startActive} className="icon w-5" />} />
    </div>
  )
}
