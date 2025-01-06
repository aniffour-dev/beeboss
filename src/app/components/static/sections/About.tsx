import React from "react";
import Image from "next/image";
import Owners from "../../../../../public/grids/owners.webp";
import { Sarina } from "next/font/google";
import Link from "next/link";

const sarina = Sarina({
  subsets: ["latin"],
  weight: "400", // or ["400"] if you want an array
  variable: "--font-sarina",
});

const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-5 lg:px-0">
      <div className="lg:flex gap-16">
        <div className="lg:w-5/12">
          <div className="relative overflow-hidden rounded-md flex justify-center items-start">
            <Image
              className="max-w-[300px] lg:max-w-full mask mask-heart object-contain"
              src={Owners}
              alt="Owners"
              title="BeeBoss Owners"
              loading="lazy"
              width={500}
              height={500}
              quality={100}
              objectFit="contain"
              layout="responsive"
            />
            <div
              className={`absolute inset-0 mask mask-heart bg-gradient-to-t from-amber-300/45 to-transparent opacity-75`}
            />
          </div>
        </div>
        <div className="lg:w-7/12 flex justify-center items-center lg:items-start flex-col mt-7 lg:mt-0">
          <h3
            className={`${sarina.className} text-3xl lg:text-5xl text-center lg:text-left text-black font-semibold mb-6`}
          >
            Wer wir sind
          </h3>
          <p className="text-slate-600 font-medium text-sm mb-4">
            Bei BeeBoss ermöglichen wir dir, dein eigener Chef zu sein. Mit
            fortschrittlicher KI-Technologie erstellen wir deinen Online-Shop in
            nur 10 Minuten und garantieren eine Lieferung innerhalb von 48-60
            Stunden durch Expertenbewertungen. Unser Team aus IT-, Marketing-,
            Social-Media- und Großhandelsexperten steht dir jederzeit für
            Unterstützung und Optimierungen zur Verfügung.
          </p>
          <p className="text-slate-600 font-medium text-sm mb-6">
            Dein Erfolg ist unser Erfolg. Wir bieten unbegrenztes Coaching und
            unterstützen dich dabei, mit den neuesten Technologien und Trends
            messbaren Verkaufserfolg zu erzielen. Wir sind jederzeit für deine
            Fragen und Bedürfnisse da.
          </p>
          <p>
            <Link
              href="/about"
              className="text-center lg:text-left w-full text-md font-semibold text-gray-950 underline underline-offset-[3px] decoration-amber-600 capitalize"
              aria-label={`Learn more about BeeBoss`}
            >
              <span className="animated-underline">Hier erfahren Sie mehr</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
