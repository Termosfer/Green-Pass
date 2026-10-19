import hero from "../assets/hero.png";
import hero1 from "../assets/h1-hero-thumb-img.webp";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import "../App.css";
const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden select-none">
      <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/50 to-transparent z-10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={hero} alt="Hero" className="w-full h-full object-cover" />
      </div>

      <div className="absolute top-[28%] md:top-1/4 left-6 sm:left-12 lg:left-20 flex flex-col items-start justify-center text-white p-4 w-[90%] sm:w-2/3 md:w-1/2 lg:w-2/4 border-t border-white/20 z-30">
        <h1 className="text-xl sm:text-2xl font-bold mb-3 anim-left-1 flex items-center gap-2">
          <span className="text-xs font-black px-2 py-0.5 rounded bg-[#b42336] text-white tracking-wider">
            US
          </span>
          <span>Green Card 2026/2027</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mb-4 anim-left-2">
          Green Card Müraciətinizi <br/>Peşəkarlara Həvalə Edin
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-stone-300 mb-6 anim-left-3 leading-relaxed">
          Səhvsiz doldurulma və təsdiq kodunun anında təhvili ilə Amerika
          xəyalınıza inamla addımlayın.
        </p>

        <div className="anim-left-4">
          <Link
            to="/apply"
            className="group inline-flex items-center gap-2 bg-[#b42336] hover:bg-[#8a1b29] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#b42336]/25 hover:shadow-[#8a1b29]/40 hover:scale-105"
          >
            <span>Onlayn Müraciət Et</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="anim-right hidden md:flex items-center gap-4 absolute bottom-44 lg:bottom-48 right-6 lg:right-16 w-auto max-w-sm bg-white/10 backdrop-blur-xl border border-white/20 p-3.5 rounded-2xl z-30 shadow-2xl hover:scale-105 transition-transform duration-300">
        <img
          src={hero1}
          alt="Təsdiq Kodu"
          className="w-20 h-20 rounded-xl object-cover shrink-0"
        />
        <div className="flex flex-col justify-center pr-2">
          <p className="text-[#E5B56E] font-bold text-2xl leading-none mb-1">
            01
          </p>
          <p className="text-white font-bold text-base leading-snug">
            Zəmanətli Təsdiq Kodu
          </p>
          <p className="text-xs text-stone-300 mt-1">
            Rəsmi sistemdən anında çıxarış
          </p>
        </div>
      </div>

      <div className="anim-bottom absolute bottom-6 sm:bottom-10 left-0 w-full z-30 border-t border-white/20 ">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between text-white w-full px-6 sm:px-12 lg:px-20  ">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold pb-1 sm:pb-3 text-stone-300">
            Peşəkar Dəstəklə
          </h3>
          <p className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none select-none opacity-90">
            AmerikaXəyalı
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
