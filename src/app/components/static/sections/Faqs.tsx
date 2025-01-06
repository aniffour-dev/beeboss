"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import localfont from "next/font/local";

const beequeen = localfont({
  src: "../../../../../public/fonts/beequeens.ttf",
});

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question:
      "Was bietet die Plattform für Dropshipper und E-Commerce-Betreiber?",
    answer:
      "Unsere Plattform bietet trendige Produkte, die direkt von uns als Lieferant bezogen werden können. Zusätzlich stellen wir professionelle Produktbilder und Content für Ads bereit, um deine Verkaufsstrategie zu optimieren.",
  },
  {
    question: "Wie funktioniert der Zugang zu den Produktbildern und Inhalten?",
    answer:
      "Nach der Anmeldung kannst du auf unserer Plattform auf eine Bibliothek professioneller Produktbilder und vorgefertigter Inhalte zugreifen. Diese Ressourcen sind speziell für die Nutzung in deinen Werbekampagnen erstellt und können einfach heruntergeladen werden.",
  },
  {
    question: "Welche Produkte sind verfügbar?",
    answer:
      "Wir bieten eine große Auswahl an trendigen Produkten aus verschiedenen Kategorien, darunter Mode, Elektronik, Haushaltswaren und mehr. Die Liste der Produkte wird regelmäßig aktualisiert, um sicherzustellen, dass du immer die neuesten Trends anbietest.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-20 bg-white">
      <h2
        className={`${beequeen.className} text-2xl text-black font-semibold text-center mb-3`}
      >
        Brauchen Sie Hilfe?
      </h2>
      <h3
        className={`${beequeen.className} text-5xl text-black font-semibold text-center mb-10`}
      >
        Häufig gestellte Fragen
      </h3>
      <div className="w-full max-w-2xl mx-auto space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="shadow overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-black text-left">{faq.question}</span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-slate-500 text-sm" />
              </motion.div>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-slate-800 text-sm">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
