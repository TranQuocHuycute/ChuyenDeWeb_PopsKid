import React from "react";
import Option from "../Option";
import data from "../../Carousel/data.json";
import { Link } from "react-router-dom";
import images from "../../../../../assets/images";
function EpisodeList() {
  return (
    <div>
      <Option />
      <div className="border-t border-[black] ">
        <div className="mt-5">
          {data.resources.map((resource, index) => {
            return (
              <div className="px-2 pb-6 text-black rounded-md flex relative">
                <div
                  key={index}
                  className="carousel-item text-start relative w-[273px] h-[154px] snap-start rounded-md overflow-hidden hover:drop-shadow-[0_1px_5px_rgba(6,175,195)]"
                >
                  <Link
                    className="scale-100 hover:scale-105 ease-in duration-100 w-[273px] h-[154px] aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat rounded-md"
                    style={{
                      backgroundImage: `url(${resource.imageUrl})`,
                    }}
                  >
                    <img
                      src={resource.imageUrl || ""}
                      alt={resource.title}
                      className="aspect-square hidden rounded-md"
                    />
                  </Link>
                </div>
                <div className="px-4 w-[398px] flex flex-col justify-between ">
                  <Link>
                    <h3 className="w-[398px] mx-auto text-xl font-bold">
                      {resource.title}
                    </h3>
                  </Link>
                  <div className="flex justify-between">
                    <p className="flex justify-center items-center text-[#808080] text-xs	">
                      <span className="mr-2">
                        <img className="" src={images.time} />
                      </span>
                      5mins
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-6 right-0">
   
                    <img src={images.favorite} />
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EpisodeList;
