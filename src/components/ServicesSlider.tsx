import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { FileCheck, Camera, Users, ShieldCheck, Clock } from "lucide-react";

import img1 from "../assets/h1-service-img-1.webp";
import img2 from "../assets/h1-service-img-2.webp";
import img3 from "../assets/h1-service-img-3.webp";
import img4 from "../assets/h1-service-img-4.webp";
import img5 from "../assets/h1-service-img-5.webp";

import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    img: img1,
    title: "DS-5501 Rəsmi Anket",
    desc: "Bütün bioqrafik məlumatların rəsmi qaydalara uyğun səhvsiz və ingiliscə dəqiq transliterasiya ilə daxil edilməsi.",
    icon: FileCheck,
  },
  {
    img: img2,
    title: "Fotoşəkil Tənzimlənməsi",
    desc: "Şəklinizin 600x600 biometrik standarta uyğunlaşdırılması, arxa fonun tam ağardılması və kölgələrin silinməsi.",
    icon: Camera,
  },
  {
    img: img3,
    title: "Ailəvi Müraciət Dəstəyi",
    desc: "Həm ər, həm arvad adına çarpaz müraciət göndərilərək ailənizin qalib gəlmə şansının 2 qat artırılması.",
    icon: Users,
  },
  {
    img: img4,
    title: "Rəsmi Təsdiq Kodu (PDF)",
    desc: "Müraciət bitən kimi 16 simvollu rəsmi Confirmation Code sənədinin dərhal PDF formatında təhvil verilməsi.",
    icon: ShieldCheck,
  },
  {
    img: img5,
    title: "Nəticələrin Şəxsi İzlənməsi",
    desc: "May ayında nəticələr elan olunduqda qazanma xəbərinin ilk olaraq mütəxəssislərimiz tərəfindən sizə bildirilməsi.",
    icon: Clock,
  },
];

export default function ServicesSlider() {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(1);
  const swiperInstanceRef = useRef<SwiperType | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCardIndex(index);
    if (swiperInstanceRef.current) {
      swiperInstanceRef.current.slideToLoop(index);
    }
  };

  return (
    <div className="mt-10 select-none">
      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => {
          swiperInstanceRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveCardIndex(swiper.realIndex);
        }}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        speed={600}
        navigation={{
          prevEl: ".service-prev-btn",
          nextEl: ".service-next-btn",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="pb-8!"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          const isActive = activeCardIndex === index;

          return (
            <SwiperSlide key={index} className="h-auto! flex py-2">
              <div
                onClick={() => handleCardClick(index)}
                className={`cursor-pointer rounded-3xl p-5 flex flex-col justify-between w-full transition-all duration-500 ${
                  isActive
                    ? "bg-[#10264A] text-white shadow-2xl scale-[1.02] ring-2 ring-[#E5B56E]/40"
                    : "bg-white text-slate-900 border border-slate-200 hover:border-slate-400 shadow-sm opacity-90 hover:opacity-100"
                }`}
              >
                <div className="w-full h-56 rounded-2xl overflow-hidden mb-6 bg-slate-100 relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isActive ? "scale-105" : "scale-100"
                    }`}
                  />
                </div>

                <div className="flex gap-4 items-start">
                  <div
                    className={`p-3 rounded-full shrink-0 transition-colors duration-300 ${
                      isActive
                        ? "bg-[#0648bc] text-[#fbfbfa]"
                        : "bg-slate-100 text-slate-800"
                    }`}
                  >
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <div>
                    <h3
                      className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                        isActive ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed transition-colors duration-300 ${
                        isActive ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
