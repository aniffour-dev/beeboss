import Link from "next/link";
import React from "react";
import { CiCreditCard1, CiDeliveryTruck } from "react-icons/ci";
import { SlRefresh } from "react-icons/sl";
import Logo from "./Logo";
import { FaApple } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { IoLogoGooglePlaystore, IoMailOpenOutline } from "react-icons/io5";
import localfont from "next/font/local";

const beequeen = localfont({
  src: "../../../../../public/fonts/beequeens.ttf",
});

const Footer = () => {
  return (
    <div className="bg-white text-gray-700 border-t-[1px] border-slate-200">
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex justify-center items-center flex-col border-b-[1px] lg:border-r-[1px] border-slate-200 py-8">
            <div className="flex justify-center items-center mb-4 shadow rounded-full w-14 h-14">
              <CiDeliveryTruck className="w-7 h-7 text-amber-500" />
            </div>
            <h3 className={`${beequeen.className} text-xl font-semibold mb-1 text-black`}>Free delivery</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, conset adipiscing eliteget lorem.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col border-b-[1px] lg:border-r-[1px] border-slate-200 py-8">
            <div className="flex justify-center items-center mb-4 shadow rounded-full w-14 h-14">
              <CiCreditCard1 className="w-7 h-7 text-amber-500" />
            </div>
            <h3 className={`${beequeen.className} text-xl font-semibold mb-1 text-black`}>Online Payment</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, conset adipiscing eliteget lorem.
            </p>
          </div>
          <div className="flex justify-center items-center flex-col py-8">
            <div className="flex justify-center items-center mb-4 shadow rounded-full w-14 h-14">
              <SlRefresh className="w-7 h-7 text-amber-500" />
            </div>
            <h3 className={`${beequeen.className} text-xl font-semibold mb-1 text-black`}>Easy Return.</h3>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, conset adipiscing eliteget lorem.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 py-12 px-5 lg:px-0 border-t-[1px] border-b-[1px] border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
           <Logo />
           <p className="text-sm text-slate-700 font-medium mt-3">Lorem ipsum dolor sit amet, conset adipiscing eliteget lorem.</p>
            <p className="mb-2.5 mt-5 flex justify-start items-center text-sm text-black font-medium">
              <GrLocation className="text-amber-500 size-5 mr-1" /> Dubai | Schweiz | Deutschland
            </p>
            <p className="mb-2.5 flex justify-start items-center text-sm text-black font-medium">
              <FiPhoneCall className="text-amber-500 size-5 mr-1" />+41 79 196 7985
            </p>
            <p className="mb-2.5 flex justify-start items-center text-sm text-black font-medium">
            <IoMailOpenOutline className="text-amber-500 size-5 mr-1" />info@beeboss.de
            </p>
          </div>
          <div>
            <h3 className={`${beequeen.className} text-xl font-semibold mb-4 text-black`}>My Account</h3>
            <ul>
              <li className="mb-1.5">
                <Link href="#" className="text-sm text-black font-medium hover:text-slate-700">
                  My Profile
                </Link>
              </li>
              <li className="mb-1.5">
                <Link href="#" className="text-sm text-black font-medium hover:text-slate-700">
                My Order History
                </Link>
              </li>
              <li className="mb-1.5">
                <Link href="#" className="text-sm text-black font-medium hover:text-slate-700">
                  Order Tracking
                </Link>
              </li>
              <li className="mb-1.5">
                <Link href="#" className="text-sm text-black font-medium hover:text-slate-700">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={`${beequeen.className} text-xl font-semibold mb-4 text-black`}>Shop Departments</h3>
            <ul>
            <li className="mb-1.5">
                <Link href="#" className="text-sm text-black font-medium hover:text-slate-700">
                Computers & Accessories
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-sm text-black font-medium hover:text-slate-700">
                  Smartphones & Tablets
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-sm text-black font-medium hover:text-slate-700">
                  TV, Video & Audio
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-sm text-black font-medium hover:text-slate-700">
                  Cameras, Photo & Video
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={`${beequeen.className} text-xl font-semibold mb-4 text-black`}>Download App</h3>
            <div className="mb-2">
              <Link
                href="#"
                className="flex justify-start items-center bg-black text-white py-2 px-4 rounded"
              >
                <FaApple className="mr-2 size-8" />Download from <br />Apple App
                Store
              </Link>
            </div>
            <div className="mb-2">
              <Link
                href="#"
                className="flex justify-start items-center bg-black text-white py-2 px-4 rounded"
              >
                <IoLogoGooglePlaystore className="mr-2 size-8" />Get it On <br />Google Play
                Store
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-800 text-sm font-semibold">
            &copy; 2025 BeeBoss. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
