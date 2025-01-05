import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex justify-center items-center gap-4">
        <li className="">
          <Link
            href=""
            className="font-semibold text-black hover:text-slate-800 duration-300"
          >
            Willkommen
          </Link>
        </li>
        <li className="">
          <Link
            href=""
            className="font-semibold text-black hover:text-slate-800 duration-300"
          >
            Chat-Raum
          </Link>
        </li>
        <li className="">
          <Link
            href="/products"
            className="font-semibold text-black hover:text-slate-800 duration-300"
          >
            Verpackung
          </Link>
        </li>
        <li className="">
          <Link
            href=""
            className="font-semibold text-black hover:text-slate-800 duration-300"
          >
            Rückgabe
          </Link>
        </li>
        <li className="">
          <Link
            href=""
            className="font-semibold text-black hover:text-slate-800 duration-300"
          >
            Katalogisieren
          </Link>
        </li>
        <li className="">
          <Link
            href=""
            className="font-semibold text-black hover:text-slate-800 duration-300"
          >
            Inhalt
          </Link>
        </li>
        <li className="">
          <Link
            href=""
            className="font-semibold text-black hover:text-slate-800 duration-300"
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
