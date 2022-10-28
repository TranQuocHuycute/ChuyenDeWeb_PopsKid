import React, { useState, useEffect, useRef } from "react";
import images from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { BsChevronCompactLeft } from "react-icons/bs";
import { FiXCircle } from "react-icons/fi";
import SearchValue from "./SearchValue";
function Search() {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [seacrhResult, setSearchResult] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    // setTimeout(() => {
    setSearchResult([1]);
    // }, 0);
    console.log(seacrhResult);
  }, []);

  
  return (
    <div className="md:hidden">
      {/* Header */}
      <div className="w-full h-14 flex justify-center items-center relative rounded-full">
        <button className="p-2" onClick={() => navigate(-1)}>
          <BsChevronCompactLeft className="w-7 h-7" />
        </button>
        <button className=" bg-[#f0f0f0] p-2 border rounded-l-md h-10 hover:opacity-80">
          <img
            className="w-6 h-6 text-[14px]"
            src={images.searchInActive}
            alt=""
          />
        </button>

        <input
          ref={inputRef}
          value={searchValue}
          className="w-full items-center h-10 justify-center mr-4  rounded-r-md bg-[#f0f0f0] focus : outline-none"
          placeholder="Hoạt hình , tiếng anh , Doreamon ..., ca nhạc"
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>

        {!!searchValue && (
          <button
            className=" absolute right-5 p-2  h-10"
            onClick={() => {
              setSearchValue("");
              inputRef.current.focus();
            }}
          >
            <FiXCircle className="text-[#C0C0C0]" />
          </button>
        )}
      </div>
      {/* Search value */}
      {seacrhResult.length > 0 ? <SearchValue /> : ""}
    </div>
  );
}

export default Search;
