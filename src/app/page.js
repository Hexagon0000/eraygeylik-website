"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  {
    src: "/photos/photo1.jpeg",
    text: "İlllaki Döner Beeeh",
  },
  {
    src: "/photos/photo2.jpeg",
    text: "Havargiii Taksiim Helloo",
  },
  {
    src: "/photos/photo3.jpeg",
    text: "Artlab After",
  },
  {
    src: "/photos/photo4.jpeg",
    text: "Pizza(Alt Tab)",
  },
  {
    src: "/photos/photo5.jpeg",
    text: "HHHOOOOOORRRRR",
  },
  {
    src: "/photos/photo6.jpeg",
    text: "Kodumun Hikayesi",
  },
  {
    src: "/photos/photo7.jpeg",
    text: "Salata Kanka",
  },
  {
    src: "/photos/photo9.jpeg",
    text: "Only Youuuuu",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    setShowText(true);
    const timer = setTimeout(() => setShowText(false), 2000);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="w-screen h-screen overflow-hidden relative bg-black">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.text}
                layout="fill"
                objectFit="contain"
                className="max-w-full max-h-full"
              />
            </div>
            <AnimatePresence>
              {showText && activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-lg text-xl font-semibold"
                >
                  {image.text}
                </motion.div>
              )}
            </AnimatePresence>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
        }
        .swiper-pagination-bullet {
          background: white !important;
        }
      `}</style>
    </div>
  );
}
