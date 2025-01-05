"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import localfont from "next/font/local";

const beequeen = localfont({ src: "../../../../../public/fonts/RecklessNeue-Book.ttf" });

const Hero = () => {
  const containerRef = useRef(null);
  const controlsUp1 = useAnimation();
  const controlsDown = useAnimation();
  const controlsUp2 = useAnimation();

  // Image columns data remains the same
  const column1 = [
    {
      src: "https://avatars.dzeninfra.ru/get-zen_doc/229614/pub_5d6c1930df944400acbcbc4d_5d6c2f426d29c100ad3b5a7c/scale_1200",
      height: "h-48",
    },
    {
      src: "https://i.pinimg.com/originals/8a/a7/82/8aa7823a36a77489e26c16228f1c87f9.jpg",
      height: "h-64",
    },
    {
      src: "https://i.pinimg.com/originals/03/09/28/03092863a6afe5aab41c67c15af53beb.jpg",
      height: "h-56",
    },
  ];

  const column2 = [
    {
      src: "https://i.pinimg.com/736x/1c/5e/3e/1c5e3e470ac15bf8358ceeaf11f3ab38.jpg",
      height: "h-72",
    },
    {
      src: "https://i.pinimg.com/736x/ba/a1/cd/baa1cd8fa755a6580e9ddd2d723f3c44.jpg",
      height: "h-48",
    },
    {
      src: "https://i.pinimg.com/736x/85/cc/41/85cc4178c6118fbbb289a06abed1dfd5--fashionista-walkways.jpg",
      height: "h-64",
    },
  ];

  const column3 = [
    {
      src: "https://static9.tgcnt.ru/posts/_0/d4/d4f97c110c66a3be86c1b91c54a699e9.jpg",
      height: "h-56",
    },
    {
      src: "https://i.pinimg.com/736x/8f/8c/52/8f8c52a8a2c423e5e1f2d543532a4b42.jpg",
      height: "h-64",
    },
    {
      src: "https://i.pinimg.com/736x/a6/68/4e/a6684ef93ded53c507091c488935e8e2.jpg",
      height: "h-48",
    },
  ];

  useEffect(() => {
    const startAnimation = async () => {
      // First column scrolls up
      controlsUp1.start({
        y: [0, -1000],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        },
      });

      // Second column scrolls down
      controlsDown.start({
        y: [-1000, 0],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        },
      });

      // Third column scrolls up
      controlsUp2.start({
        y: [0, -1000],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };
    startAnimation();
  }, [controlsUp1, controlsDown, controlsUp2]);

  return (
    <>
      <div className="relative overflow-hidden">
        {/* Gradients */}
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-amber-300/20 to-orange-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
          <div className="bg-gradient-to-tl from-orange-50 via-amber-100 to-amber-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem]" />
        </div>

        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:pt-0">
            <div className="max-w-8xl mx-auto">
              <div className="lg:flex gap-7">
                {/* Left content remains the same */}
                <div className="lg:w-5/12 flex justify-center items-start flex-col">
                  <h1
                    className={`text-4xl text-amber-500 font-bold mb-6 leading-snug ${beequeen.className}`}
                  >
                    Starten Sie Ihren Shopify-Shop mit Gewinner-Produkten.
                  </h1>
                  <p className="text-lg text-black mb-10">
                    Registrieren Sie sich noch heute und erhalten Sie Zugriff
                    auf 10 bewährte, hochkonvertierende Produkte, um den Erfolg
                    Ihres E-Commerce-Geschäfts zu steigern.
                  </p>
                  <div className="flex justify-center items-center gap-2">
                    <Link href="">
                      <button className="bg-amber-300 text-black font-semibold py-3 px-4 rounded">
                        Crea tu tienda en línea
                      </button>
                    </Link>
                    <Link href="">
                      <button className="bg-amber-300 text-black font-semibold py-3 px-4 rounded">
                      Registrieren
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Right content - Animated masonry with alternating scroll directions */}
                <div
                  className="lg:w-7/12 overflow-hidden mt-10 lg:mt-0"
                  ref={containerRef}
                >
                  <div className="grid grid-cols-3 gap-4 h-[600px]">
                    {/* Column 1 - Scrolls up */}
                    <motion.div animate={controlsUp1} className="grid gap-4">
                      {[...column1, ...column1].map((img, index) => (
                        <div
                          key={index}
                          className={`${img.height} overflow-hidden relative group`}
                        >
                          <img
                            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                            src={img.src}
                            alt=""
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-orange-500/30 group-hover:opacity-0 transition-opacity duration-300 rounded-lg" />
                        </div>
                      ))}
                    </motion.div>

                    {/* Column 2 - Scrolls down */}
                    <motion.div
                      animate={controlsDown}
                      initial={{ y: -1000 }}
                      className="grid gap-4"
                    >
                      {[...column2, ...column2].map((img, index) => (
                        <div
                          key={index}
                          className={`${img.height} overflow-hidden relative group`}
                        >
                          <img
                            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                            src={img.src}
                            alt=""
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-orange-500/30 group-hover:opacity-0 transition-opacity duration-300 rounded-lg" />
                        </div>
                      ))}
                    </motion.div>

                    {/* Column 3 - Scrolls up */}
                    <motion.div
                      animate={controlsUp2}
                      initial={{ y: -400 }}
                      className="grid gap-4"
                    >
                      {[...column3, ...column3].map((img, index) => (
                        <div
                          key={index}
                          className={`${img.height} overflow-hidden relative group`}
                        >
                          <img
                            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                            src={img.src}
                            alt=""
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-orange-500/30 group-hover:opacity-0 transition-opacity duration-300 rounded-lg" />
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
