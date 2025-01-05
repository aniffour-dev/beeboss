import React from "react";
import localfont from "next/font/local";

const beequeen = localfont({
  src: "../../../../../public/fonts/beequeens.ttf",
});

const Accounts = () => {
  return (
    <div className="max-w-7xl !mx-auto py-4 px-4 lg:px-0 my-10">
        <h1 className={`${beequeen.className} text-3xl text-black font-semibold mb-7Bee`}>My Account</h1>
      <div className="lg:flex gap-8">
        <div className="lg:w-5/12">Sidebar Navtabs</div>
        <div className="lg:w-7/12">Content</div>
      </div>
    </div>
  );
};

export default Accounts;
