import React from "react";
import { Outlet, Link } from "react-router-dom";

function ItemMenu({ data }) {
  return (
    <button className="flex w-full px-4 py-5 hover:bg-sky-700 ">
      <img className="mr-2" src={data.icon} alt="" />
      <Link to={data.to}> {data.title} </Link>
    </button>
  );
}

export default ItemMenu;
