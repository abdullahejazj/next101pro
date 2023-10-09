import Link from "next/link";
import React from "react";

const Logo = ({ data }) => {
  return (
    <Link
      href="/"
      className="flex justify-center items-center w-28 md:w-32 text-sm 
    md:text-base my-5 font-extrabold text-center"
    >
      <div className="bg-primary py-1 px-2 border border-primary ">
        <p>{data}</p>
      </div>
    </Link>
  );
};

export default Logo;
