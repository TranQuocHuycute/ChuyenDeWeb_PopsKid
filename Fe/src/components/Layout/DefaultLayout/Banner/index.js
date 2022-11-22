import React from "react";

function Banner() {
  const bgImage =
    "https://popsimg.akamaized.net/api/v2/containers/file2/cms_assets/1920x1080-a8c41c98b297-1665570729031-KleVfufI.jpg?v=0&maxW=1400&format=webp";
  return (
    <div className="bg-contain">
      <img
        className="w-full h-full "
        src="https://popsimg.akamaized.net/api/v2/containers/file2/cms_assets/1920x1080-a8c41c98b297-1665570729031-KleVfufI.jpg?v=0&maxW=1400&format=webp"
        alt=""
      ></img>
    </div>
  );
}

export default Banner;
