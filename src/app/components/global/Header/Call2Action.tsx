import Link from "next/link";
import React from "react";
import { FaOpencart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { PiUserDuotone } from "react-icons/pi";

const Call2Action = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Link href="/cart" className="flex justify-start items-center gap-1.5">
      <span className="h-4 w-4 rounded-full absolute -mt-7 ml-1 bg-red-500 text-white font-semibold flex justify-center items-center">
        <p className="text-xs">2</p>
      </span>
        <FaOpencart className="size-5 cursor-pointer text-amber-600" />
        <span className="text-sm font-semibold text-slate-700">Wagen</span>
      </Link>
      <Link href="/account" className="flex justify-start items-center gap-1.5">
        <PiUserDuotone className="size-5 cursor-pointer text-amber-600" />
        <span className="text-sm font-semibold text-slate-700">Konto</span>
      </Link>
    </div>
  );
};

export default Call2Action;
