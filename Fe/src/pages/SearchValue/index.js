import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router'
function SearchValue() {
  const [searchResult, setSearchResult] = useState()
  const { searchValue } = useParams()
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/videos/${searchValue}`)
      .then(function (response) {
        setSearchResult(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [searchValue])

  return (
    searchResult && (
      <div className="md:m-10">
        <h1 className="text-base md:text-xl font-bold mb-[10px] truncate">
          {searchResult.categoriesString}
        </h1>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-5 ">
          {searchResult.eps.map((e) => {
            return (
              <div className="relative cursor-pointer px-1 tablet:px-2.5">
                <Link to={`/videoDetail/${e.videoId}/${e.epNumber}`} title={e.title}>
                  <div className="block relative rounded overflow-hidden   ">
                    <div className="relative rounded bg-cover block bg-center">
                    <img src={e.thumbnail} width="200px" height="200px"></img>
                    </div>
                  </div>
                  <div className="relative mt-2 text-sm desktop:text-base desktopLg:text-lg">
                    
                    <h3 className="text-base tablet:text-xl font-bold mb-[10px] truncate  ">
                      {e.title.slice(0, 25)}...
                    </h3>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  )
}

export default SearchValue
