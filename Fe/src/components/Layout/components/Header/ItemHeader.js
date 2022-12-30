import React ,  {useState , useEffect , useRef} from "react";
import Nav from "./Nav";
import Seacrh from "./Seacrh";
// import Menu from "../../Popper/Menu";
import images from "../../../../assets/images";
import Header from "../Header";

function ItemHeader() {
  const [imgActive, setImgActive] = useState(true);
  const handleClickOutside = () => {
    setImgActive(true);
  };

  const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
};
  const ref = useOutsideClick(handleClickOutside);

  const handdlesSearch = () => {
    setImgActive((current) => !current);
  };

  return (
    <Header>
      {/* logo */}
      <div className=" hidden md:block md:w-20 md:h-14  ">
        <img src={require("../../../../assets/images/logo.png")} alt="Logo" />
      </div>

      {/* <Nav/> */}
      {imgActive ? <Nav /> : <Seacrh />}

      {/* Item */}
      <div className=" hidden md:flex">
        <button className="mx-4">
          <img
            src={imgActive ? images.searchInActive : images.searchIsActive}
            onClick={() => handdlesSearch()}
            alt=""
          />
        </button>

        <span className="mx-4">
          <svg
            viewBox="0 0 24 24"
            height="35"
            width="35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.558 19.9191C12.252 20.027 11.748 20.027 11.442 19.9191C8.832 19.0292 3 15.3169 3 9.02472C3 6.24719 5.241 4 8.004 4C9.642 4 11.091 4.79101 12 6.01348C12.909 4.79101 14.367 4 15.996 4C18.759 4 21 6.24719 21 9.02472C21 15.3169 15.168 19.0292 12.558 19.9191Z"
              stroke="#B6B6B6"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8 14C9 16 10.592 16.6462 11.752 16.9705C11.888 17.0098 12.112 17.0098 12.248 16.9705C13.408 16.6462 15 16 16 14"
              stroke="#D5D5D5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>

      </div>
    </Header>
  );
}

export default ItemHeader;
