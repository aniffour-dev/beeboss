"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  RiRocketLine,
  RiTeamLine,
  RiShoppingBagLine,
  RiLineChartLine,
} from "react-icons/ri";

import localfont from "next/font/local";
import { BsCheck2Square } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { HiOutlineEnvelopeOpen } from "react-icons/hi2";
import { SlMap } from "react-icons/sl";

const beequeen = localfont({
  src: "../../../../../public/fonts/beequeens.ttf",
});

const Achievements = () => {
  const features = [
    {
      icon: <BsCheck2Square className="w-10 h-10 text-amber-600" />,
      title: "Einfach Dropshipping-Lieferanten verwalten.",
      description:
        "BeeBoss ermöglicht es Ihnen, mehrere Lieferanten für ein Produkt festzulegen und den Produktbestand zu überprüfen, um Ihr Angebot zu personalisieren.",
    },
    {
      icon: <CiEdit className="w-12 h-12 text-amber-600" />,
      title: "Organische reichweite über ai",
      description:
        "Mit unserer seit 3 Jahren verifizierten KI für Shopify erreichst du Besucher aus der ganzen Welt, während wir uns um den weltweiten Versand und Rückversand kümmern und unsere Innovation mit einer 30-tägigen 100% Geld-zurück-Garantie absichern.",
    },
    {
      icon: <HiOutlineEnvelopeOpen className="w-10 h-10 text-amber-600" />,
      title: "Logistik",
      description:
        "Mit Beeboss garantieren wir die Zufriedenheit deiner Kunden durch einen Versand in maximal 4 Werktagen. Als dein Partner sichern wir den Erfolg und unterstützen dein Business mit KI und erstklassigem Service.",
    },
    {
      icon: <SlMap className="w-10 h-10 text-amber-600" />,
      title: "Optimieren Sie Versandkosten und Lieferzeiten",
      description:
        "Beeboss wählt automatisch die billigste und schnellste Versandmethode entsprechend Ihren Präferenzen für die beste Versandoption aus.",
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${beequeen.className} text-3xl md:text-4xl font-bold text-gray-900 mb-6`}
          >
            Unsere Erfolge
          </motion.h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-500 transition-colors duration-300"
          >
            Beginnen Sie Ihre E-Commerce-Reise
          </motion.button>
          <p className="mt-4 text-gray-600">
            Schließen Sie sich Hunderten erfolgreichen Ladenbesitzern an
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
