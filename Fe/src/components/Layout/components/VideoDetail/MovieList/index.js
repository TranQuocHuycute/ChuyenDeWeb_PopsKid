import ShowMoreText from "react-show-more-text";
import React from "react";
import data from "./data.json";
import { Link } from "react-router-dom";

function MoiveList() {
  return data.resources.map((item, index) => (
    <Link to = {item.to}>
    <div
      key={index}
      className="md:w-[706px] md:h-[350px] bg-cover flex md:px-4 py-2 "
    >
      <div className="rounded overflow-hidden hover:drop-shadow-[0_1px_5px_rgba(6,175,195)]">
        <div
          className="w-[168px] h-[252px] md:w-[225px] md:h-[336px] bg-contain bg-no-repeat scale-100 hover:scale-110 ease-in duration-200 aspect-square"
          style={{
            backgroundImage: `url(${item.imageUrl})`,
          }}
        ></div>
      </div>

      <div className="md:w-[460px] md:h-[337px] pl-4 pb-2 w-[calc(100%_-_168px)]">
        <h3 className="text-base font-bold md:text-xl mb-[10px] ">
          {item.title}
        </h3>
        <div>
          <div className="mb-[10px]">
            <span className="text-[#808080]">Năm phát hành: </span>{" "}
            <span>{item.releaseYear}</span>
          </div>
          <div className="mb-[10px]">
            <span className="text-[#808080]">Xếp hạng: </span>{" "}
            <span>{item.rating}</span>
          </div>
          <div className="mb-[10px]">
            <span className="text-[#808080]">Nội dung bởi: </span>{" "}
            <span>{item.contentBy}</span>
          </div>
        </div>
        <ShowMoreText
          lines={2}
          more=""
          expanded={false}
          truncatedEndingComponent={"..."}
          className = 'text-sm md:text-base'
        >
          <p className="text-sm md:text-base">{item.description}</p>
        </ShowMoreText>
      </div>
    </div>
    </Link>
    
  ));
}

export default MoiveList;
