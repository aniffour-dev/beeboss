import React from "react";
import Marquee from "react-fast-marquee";
import localfont from "next/font/local";

const beequeen = localfont({ src: "../../../../../public/fonts/beequeens.ttf" });


const Intergration = () => {
  return (
    <section className="py-12 bg-slate-50 mb-5 px-5 lg:px-0">
      <h2 className={`${beequeen.className} text-3xl text-black font-semibold text-center mb-1.5`}>
        <span className="text-amber-500 font-bold">BeeBoss</span>{" "}
        E-Commerce-Integrationslösung
      </h2>
      <p className="text-slate-600 font-medium text-md text-center mb-5">
      Revolutionierung des Online-Shopping-Erlebnisses: Innovation und Effizienz im E-Commerce mit BeeBoss.
      </p>
      <Marquee
        pauseOnHover
        className="max-w-7xl mx-auto !bg-transparent"
        gradient={true}
        gradientWidth={50}
        play={true}
      >
        <div className="flex justify-center items-center gap-10">
          <img
            src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542555_Frame%2018610.svg"
            alt=""
            className="w-32"
          />
          <img
            src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255b_airbus.svg"
            alt=""
            className="w-32"
          />
          <img
            src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542554_Amazon%20logo.svg"
            alt=""
            className="w-32"
          />
          <img
            src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255d_toyota.svg"
            alt=""
            className="w-32"
          />
          <img
            src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542558_Frame%2018611.svg"
            alt=""
            className="w-32"
          />
          <img
            src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542559_deloitte.svg"
            alt=""
            className="w-32"
          />
          <img
            src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255c_Frame%2018608.svg"
            alt=""
            className="w-32"
          />
          <img
            src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f542556_Frame%2018608.svg"
            alt=""
            className="w-32"
          />
          <img
            src="https://cdn.prod.website-files.com/65aebad6eb424b0209ede842/65afaf92263c2c5d3f54255b_airbus.svg"
            alt=""
            className="w-32"
          />
        </div>
      </Marquee>
    </section>
  );
};

export default Intergration;
