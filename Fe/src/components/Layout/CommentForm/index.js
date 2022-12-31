import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Rating from 'react-rating'
import startActive from '../../../assets/images/startActive.png'
import starUn from '../../../assets/images/starUn.png'

function CommentFrom({ userName, courseId }) {
  const [cmtValues, setCmtValues] = useState('')
  const [numberStart, setNumberStart] = useState(5)

  const creactComment = () => {
    axios
      .post(`http://localhost:8080/api/courses/${courseId}/add/rating`, {
        id: 0,
        username: userName,
        numberRating: numberStart,
        comment: cmtValues,
      })
      .then(() => {
        setCmtValues('')
      })
  }

  return (
    <div className=" my-3 rounded-lg shadow-md shadow-blue-600/50">
      <div className="w-full p-4">
        <Rating
          onClick={setNumberStart}
          initialRating={numberStart}
          fullSymbol={<img src={starUn} className="icon w-5" />}
          emptySymbol={<img src={startActive} className="icon w-5" />}
        />
        <div className="mb-2">
          <label for="comment" className="text-lg text-gray-600">
            {userName}
          </label>
          <textarea
            value={cmtValues}
            onChange={(e) => setCmtValues(e.target.value)}
            className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
            name="comment"
          ></textarea>
        </div>
        <div>
          <a
            href={`http://localhost:3000/courseDetails/${courseId}`}
            onClick={creactComment}
            className="px-3 py-2 mr-5 text-sm text-blue-100 bg-blue-600 rounded"
          >
            Comment
          </a>
        </div>
      </div>
    </div>
  )
}

export default CommentFrom
