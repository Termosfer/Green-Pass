import { ArrowLeft, ArrowRight } from "lucide-react";
import ServicesSlider from "./ServicesSlider";

const ServicesSection = () => {
  return (
    <section className="bg-[#F6F8FC] py-20 lg:py-24 text-slate-900 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 mb-12 sm:mb-16">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs sm:text-sm font-bold tracking-wider text-slate-700 uppercase">
            Eksklüziv Xidmətlər
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-slate-900 leading-[1.15] tracking-tight">
              Green Card Üçün <br className="hidden sm:block" />
              Peşəkar Həllər
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Müraciətinizin hər bir detalı rəsmi standartlara uyğun hazırlanır
              və diskvalifikasiya riski tamamilə aradan qaldırılır.
            </p>
          </div>

          <div className="lg:col-span-2 flex items-center justify-start lg:justify-end gap-3">
            <button
              aria-label="Əvvəlki"
              className="service-prev-btn cursor-pointer group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-slate-300 bg-white text-slate-800 flex items-center justify-center overflow-hidden hover:border-slate-900 hover:bg-[#10264A] hover:text-white transition-all duration-300 shadow-sm"
            >
              <span className="flex items-center justify-center transition-transform duration-300 ease-out group-hover:translate-y-12 group-hover:opacity-0">
                <ArrowLeft className="w-5 h-5" strokeWidth={1.8} />
              </span>
              <span className="absolute flex items-center justify-center -translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <ArrowLeft className="w-5 h-5" strokeWidth={1.8} />
              </span>
            </button>

            <button
              aria-label="Növbəti"
              className="service-next-btn cursor-pointer group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-slate-300 bg-white text-slate-800 flex items-center justify-center overflow-hidden hover:border-slate-900 hover:bg-[#10264A] hover:text-white transition-all duration-300 shadow-sm"
            >
              <span className="flex items-center justify-center transition-transform duration-300 ease-out group-hover:translate-y-12 group-hover:opacity-0">
                <ArrowRight className="w-5 h-5" strokeWidth={1.8} />
              </span>
              <span className="absolute flex items-center justify-center -translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <ArrowRight className="w-5 h-5" strokeWidth={1.8} />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <ServicesSlider />
      </div>
    </section>
  );
};

export default ServicesSection;
