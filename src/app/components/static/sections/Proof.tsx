import React from "react";
import localfont from "next/font/local";

const beequeen = localfont({
  src: "../../../../../public/fonts/beequeens.ttf",
});

const Proof = () => {
  return (
    <section className="py-20 bg-slate-50 px-5 lg:px-0">
        <div className="max-w-7xl mx-auto flex justify-center items-center flex-col">
      <h2
        className={`${beequeen.className} text-3xl text-black font-semibold text-center mb-2.5`}
      >
        Ohne BeeBoss / mit BeeBoss
      </h2>
      <p className="text-slate-600 font-medium text-md text-center mb-5 max-w-3xl">
        Vorher fehlte oft eine klare Online-Präsenz und Strategie – nach der
        Zusammenarbeit mit BeeQueen strahlen Webdesign und Marketing
        professionell und zielgerichtet.
      </p>
      </div>
    </section>
  );
};

export default Proof;
