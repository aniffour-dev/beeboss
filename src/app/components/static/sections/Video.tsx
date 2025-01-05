"use client";
import React, { useState } from "react";
import VideoBG from "../../../../../public/video.jpeg";
import { IoPlayOutline } from "react-icons/io5";

const VideoHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative h-[450px] w-full">
      {/* Background Image with Gradient Overlay and Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${VideoBG.src})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/60 to-amber-300/60 backdrop-blur-md" />
      </div>

      {/* Play Button with Animation */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="group absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {/* Pulsing rings */}
        <div className="absolute inset-0 animate-ping rounded-full bg-white/50" />
        <div className="absolute inset-0 animate-pulse rounded-full bg-white/30" />

        {/* Main button */}
        <div className="relative bg-white/90 hover:bg-white rounded-full p-6 transition-all duration-300 hover:scale-110">
          {/* Play Icon */}
          <IoPlayOutline className="w-12 h-12 text-amber-600" />
        </div>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Video Container */}
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      {/* Custom Animation Keyframes */}
      <style jsx global>{`
        @keyframes customPing {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes customPulse {
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
        }
        .animate-ping {
          animation: customPing 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-pulse {
          animation: customPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default VideoHero;
