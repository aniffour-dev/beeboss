// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   RiRocketLine,
//   RiTeamLine,
//   RiShoppingBagLine,
//   RiLineChartLine,
// } from "react-icons/ri";

// import localfont from "next/font/local";

// const beequeen = localfont({
//   src: "../../../../../public/fonts/beequeens.ttf",
// });

// const ServiceHeroSection = () => {
//   const features = [
//     {
//       icon: <RiRocketLine className="w-8 h-8 text-indigo-600" />,
//       title: "12-Minute Store Setup",
//       description:
//         "Launch your Shopify store quickly with our AI-powered platform. Expert review within 48-72 hours.",
//     },
//     {
//       icon: <RiTeamLine className="w-8 h-8 text-indigo-600" />,
//       title: "Dedicated Support Team",
//       description:
//         "Access our team of e-commerce, marketing, and tech experts for personalized guidance.",
//     },
//     {
//       icon: <RiShoppingBagLine className="w-8 h-8 text-indigo-600" />,
//       title: "Viral Products Selection",
//       description:
//         "Get access to our curated list of 10 trending products with proven market demand.",
//     },
//     {
//       icon: <RiLineChartLine className="w-8 h-8 text-indigo-600" />,
//       title: "Growth Strategy",
//       description:
//         "Comprehensive coaching and marketing strategies to scale your online business.",
//     },
//   ];

//   return (
//     <div className="bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         {/* Hero Section */}
//         <div className="text-center mb-16">
//   <motion.h1
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     className={`${beequeen.className} text-3xl md:text-4xl font-bold text-gray-900 mb-6`}
//   >
//     Transform Your E-commerce Dreams into Reality
//   </motion.h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Join our academy to master Shopify store creation, discover winning
//             products, and learn proven marketing strategies for e-commerce
//             success.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold mb-2 text-gray-900">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="mt-16 text-center">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
//           >
//             Start Your E-commerce Journey
//           </motion.button>
//           <p className="mt-4 text-gray-600">
//             Join hundreds of successful store owners
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceHeroSection;

"use client";
import React from "react";
import { motion } from "framer-motion";
import { RiRocketLine, RiTeamLine, RiShoppingBagLine } from "react-icons/ri";
import Image from "next/image";

import Boost from "../../../../../public/grids/boost.svg";
import Team from "../../../../../public/grids/team.svg";
import Trend from "../../../../../public/grids/trend.svg";

import localfont from "next/font/local";

const beequeen = localfont({
  src: "../../../../../public/fonts/beequeens.ttf",
});

const ServiceSection = () => {
  const services = [
    {
      title: "Launch Your Dream Store",
      description:
        "With our cutting-edge AI technology, we'll build your Shopify store in just 12 minutes. Our expert team reviews and optimizes every store within 48-72 hours, ensuring a perfect launch. Access our customer portal for instant updates and modifications.",
      image: Boost,
      icon: <RiRocketLine className="w-6 h-6 text-indigo-600" />,
      buttonText: "Start Building",
    },
    {
      title: "Expert Support Team",
      description:
        "Our dedicated team of IT, marketing, social media, and e-commerce experts is here to support your journey. While our technology ensures smooth operations, we're always available for questions, adjustments, and optimizations.",
      image: Team,
      icon: <RiTeamLine className="w-6 h-6 text-indigo-600" />,
      buttonText: "Meet the Team",
    },
    {
      title: "Viral Product Selection",
      description:
        "Access our carefully curated selection of 10 trending products with proven market demand. We continuously analyze market trends and consumer behavior to identify products with the highest profit potential.",
      image: Trend,
      icon: <RiShoppingBagLine className="w-6 h-6 text-indigo-600" />,
      buttonText: "View Products",
    },
  ];

  return (
    <div className="w-full bg-white">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="w-full"
        >
          <div
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center max-w-7xl mx-auto px-4 py-20 gap-10`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="overflow-hidden flex justify-center items-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={400}
                  className="object-cover transform hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h2
                className={`${beequeen.className} text-3xl md:text-4xl font-bold text-gray-900`}
              >
                {service.title}
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <button className="click bg-amber-300 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-400 transition-all duration-300 inline-flex items-center gap-2">
                {service.buttonText}
                <RiRocketLine className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Divider (except for last item) */}
          {index !== services.length - 1 && (
            <div className="w-full max-w-7xl mx-auto px-4">
              <div className="border-b border-gray-200"></div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceSection;

// "use client";
// import React from 'react';
// import { motion } from 'framer-motion';
// import { RiRocketLine, RiTeamLine, RiShoppingBagLine, RiLineChartLine } from 'react-icons/ri';

// import localfont from "next/font/local";

// const beequeen = localfont({
//   src: "../../../../../public/fonts/beequeens.ttf",
// });

// const ServiceSection = () => {
//   const services = [
//     {
//       title: "Launch Your Dream Store",
//       description: "With our cutting-edge AI technology, we'll build your Shopify store in just 12 minutes. Our expert team reviews and optimizes every store within 48-72 hours, ensuring a perfect launch. Access our customer portal for instant updates and modifications.",
//       image: "https://media.zenfs.com/en/Benzinga/e9c1ac7d47c9c77733a9d8fdc140c9ea",
//       icon: <RiRocketLine className="w-6 h-6 text-indigo-600" />,
//       buttonText: "Start Building"
//     },
//     {
//       title: "Expert Support Team",
//       description: "Our dedicated team of IT, marketing, social media, and e-commerce experts is here to support your journey. While our technology ensures smooth operations, we're always available for questions, adjustments, and optimizations.",
//       image: "https://media.zenfs.com/en/Benzinga/e9c1ac7d47c9c77733a9d8fdc140c9ea",
//       icon: <RiTeamLine className="w-6 h-6 text-indigo-600" />,
//       buttonText: "Meet the Team"
//     },
//     {
//       title: "Viral Product Selection",
//       description: "Access our carefully curated selection of 10 trending products with proven market demand. We continuously analyze market trends and consumer behavior to identify products with the highest profit potential.",
//       image: "https://media.zenfs.com/en/Benzinga/e9c1ac7d47c9c77733a9d8fdc140c9ea",
//       icon: <RiShoppingBagLine className="w-6 h-6 text-indigo-600" />,
//       buttonText: "View Products"
//     }
//   ];

//   return (
//     <div className="w-full bg-white">
//       {services.map((service, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: index * 0.2 }}
//           className="w-full"
//         >
//           <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
//             {/* Image Section */}
//             <div className="w-full lg:w-1/2">
//               <div className="overflow-hidden">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//             </div>

//             {/* Content Section */}
//             <div className="w-full lg:w-1/2 space-y-6 px-10">
//               <div className="flex items-center gap-3">
//                 {service.icon}
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//                   {service.title}
//                 </h2>
//               </div>

//               <p className="text-lg text-gray-600 leading-relaxed">
//                 {service.description}
//               </p>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 inline-flex items-center gap-2"
//               >
//                 {service.buttonText}
//                 <RiRocketLine className="w-5 h-5" />
//               </motion.button>
//             </div>
//           </div>

//           {/* Divider (except for last item) */}
//           {index !== services.length - 1 && (
//             <div className="w-full max-w-7xl mx-auto px-4">
//             </div>
//           )}
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default ServiceSection;
