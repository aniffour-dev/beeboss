import React from "react";
import localfont from "next/font/local";
import Link from "next/link";
import Profile from "./Profile";

const beequeen = localfont({
  src: "../../../../../public/fonts/beequeens.ttf",
});

const Accounts = () => {
  return (
    <div className="w-full bg-amber-50 py-10">
      <div className="max-w-7xl !mx-auto py-4 px-4 lg:px-0 my-10">
        <h1
          className={`${beequeen.className} text-3xl text-black font-semibold mb-10`}
        >
          My Account
        </h1>
        <Profile />
      </div>
    </div>
  );
};

export default Accounts;
