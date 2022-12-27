import React from 'react'
import Option from '../Option'
import { Link } from 'react-router-dom'
import images from '../../../../../assets/images'

function EpisodeList({ eps }) {

  return (
    <div>
      <Option />
      <div className="w-full border-t border-[black] ">
        <div className="mt-5">
          {eps.map((resource, index) => {
            return (
              <div
                key={index}
                className="px-2 pb-6 text-black rounded-md flex relative "
              >
                <div className=" text-start relative md:w-[273px] md:h-[154px] rounded-sm overflow-hidden hover:drop-shadow-[0_1px_5px_rgba(6,175,195)]">
                  <Link
                    to={`/videoDetail/${resource.videoId}/${resource.epNumber}`} title={resource.title}
                    className="scale-100 hover:scale-110 ease-in duration-200 w-[168px] h-[95px] md:w-[273px] md:h-[154px] aspect-square block md:bg-origin-padding md:bg-left-top bg-cover bg-no-repeat rounded-md"
                    style={{
                      backgroundImage: `url(${resource.thumbnail})`,
                    }}
                  >
                    <img
                      src={resource.thumbnail || ''}
                      alt={resource.title}
                      className="aspect-square hidden rounded-md"
                    />
                  </Link>
                </div>
                <div className=" md:px-4 w:auto w-[150px] ml-2 md:w-[398px] flex flex-col justify-between ">
                  <Link>
                    <h3 className="md:w-[398px] w-[166px] h-auto md:text-xl text-sm font-bold">
                      {resource.title}
                    </h3>
                  </Link>
                  <div className="flex justify-between">
                    {/* <p className="flex justify-center items-center text-[#808080] text-xs	">
                      <span className="mr-2">
                        <img className="" src={images.time} />
                      </span>
                      5mins
                    </p> */}
                  </div>
                </div>

                <div className="absolute bottom-6 right-0">
                  <img src={images.favorite} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default EpisodeList
