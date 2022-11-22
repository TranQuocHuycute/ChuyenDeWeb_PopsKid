import React, { useState } from "react";
import { images } from "../../../../assets/images/iconnav";
import { Link } from "react-router-dom";
function Nav() {
  const [isActive, setIsActive] = useState();

  return (
    <div>
      <ul className="flex content-center">
        {images.map((i, index) => (
          <li key={index}>
            <Link
              className="relative flex justify-center"
              to = {i.to}
              onClick={() => setIsActive(index)}
            >
              <img
                className=" w-12 h-12 md:w-16 md:h-16 mx-8 hover:scale-125 duration-300 ease-in-out"
                src={isActive === index ? i.isActive : i.inActive}
              />
              {isActive === index ? (
                <span className=" hidden md:block md:text-[#4dbdc8] md:opacity-100 md:hover:opacity-100 md:absolute top-16">
                  {i.title}
                </span>
              ) : (
                ""
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
