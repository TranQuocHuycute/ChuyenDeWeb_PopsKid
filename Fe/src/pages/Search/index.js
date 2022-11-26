import React, { useState, useEffect, useRef } from "react";
import images from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { BsChevronCompactLeft } from "react-icons/bs";
import { FiXCircle } from "react-icons/fi";
import SearchValue from "./SearchValue";
import SearchNotExist from "../../../src/assets/images/ic-search@2x.png";
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
    <div>
      <div className="">
        {/* Header */}
        <div className="md:hidden  w-full bg-white fixed top-0 h-14 flex justify-center items-center rounded-full">
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

        {/* seacrh result do not exits */}
        <div className=" md:grid  grid-cols-3 ">
          <div className="flex flex-col col-span-2 justify-center items-center mx-8 my-40">
            <img className="w-32 h-20" src={SearchNotExist} alt=" "></img>
            <h2 className=" mt-6 mb-2 text-center font-medium text-sm capitalize">
              Chúng tôi không thể tìm thấy bất kỳ kết quả nào với từ khóa
            </h2>
            <p className=" mb-2 text-center text-sm">
              Vui lòng thử lại với từ khóa khác hoặc tham khảo các từ khóa phổ
              biến ở bên dưới
            </p>
          </div>

          <div className=" w-80">
            <div className="m-2 mx-6">HOT KEYWORDS</div>
            <ul className="flex flex-wrap m-3">
              <li className="p-2  m-1 bg-[#ccf2f7] rounded-full">
                <a className="text-[#09ccc7]">Doreamon</a>
              </li>
              <li className="p-2 m-1 bg-[#ccf2f7] rounded-full">
                <a className="text-[#09ccc7]">Nobita Chaien Xuka</a>
              </li>
              <li className="p-2 m-1 bg-[#ccf2f7] rounded-full">
                <a className="text-[#09ccc7]">Doreamon</a>
              </li>
              <li className="p-2 m-1 bg-[#ccf2f7] rounded-full">
                <a className="text-[#09ccc7]">Nobita Chaien Xuka</a>
              </li>
              <li className="p-2 m-1 bg-[#ccf2f7] rounded-full">
                <a className="text-[#09ccc7]">Doreamon</a>
              </li>
              <li className="p-2 m-1 bg-[#ccf2f7] rounded-full">
                <a className="text-[#09ccc7]">Nobita Chaien Xuka</a>
              </li>
              <li className="p-2 m-1 bg-[#ccf2f7] rounded-full">
                <a className="text-[#09ccc7]">Doreamon</a>
              </li>
              <li className="p-2 m-1 bg-[#ccf2f7] rounded-full">
                <a className="text-[#09ccc7]">Nobita Chaien Xuka</a>
              </li>
              <li className="p-2 m-1 bg-[#ccf2f7] rounded-full">
                <a className="text-[#09ccc7]">Doreamon</a>
              </li>
              <li className="p-2 m-1 bg-[#ccf2f7] rounded-full">
                <a className="text-[#09ccc7]">Nobita Chaien Xuka</a>
              </li>
              <li className="p-2 m-1 bg-[#ccf2f7] rounded-full">
                <a className="text-[#09ccc7]">Doreamon</a>
              </li>
              <li className="p-2 m-1 bg-[#ccf2f7] rounded-full">
                <a className="text-[#09ccc7]">Nobita Chaien Xuka</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
