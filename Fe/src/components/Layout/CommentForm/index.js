import axios from 'axios'
import React from 'react'

function CommentFrom({ userName }) {
  const creactComment = () => {
    axios
      .post(`http://localhost:8080/api/courses/${userName}/add/rating`, {
        id: 0,
        username: 'huy',
        numberRating: 4,
        comment: 'khóa học hay',
      })
      .then((response) => {
        console.log('success', response)
      })
  }

  return (
    <div className=" my-3 rounded-lg shadow-md shadow-blue-600/50">
      <div className="w-full p-4">
        <div className="mb-2">
          <label for="comment" className="text-lg text-gray-600">
            {userName}
          </label>
          <textarea
            className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
            name="comment"
          ></textarea>
        </div>
        <div>
          <button
            onClick={creactComment}
            className="px-3 py-2 mr-5 text-sm text-blue-100 bg-blue-600 rounded"
          >
            Comment
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommentFrom
