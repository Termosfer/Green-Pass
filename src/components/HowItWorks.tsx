import { useState, useEffect, useRef } from "react";

interface ProcessStep {
  step: string;
  title: string;
  points: string[];
  image: string;
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Müraciət Məlumatlarının Təhlili",
    points: [
      "Şəxsi məlumatların və sənədlərin tamlığının yoxlanılması",
      "Diskvalifikasiya risklərinin əvvəlcədən aradan qaldırılması",
    ],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    step: "02",
    title: "Foto və Anket Hazırlığı",
    points: [
      "Şəklin 600x600 biometrik standarta uyğunlaşdırılması",
      "Rəsmi DS-5501 sisteminə müraciətin təhlükəsiz ötürülməsi",
    ],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  },
  {
    step: "03",
    title: "Təsdiq Kodu və İzləmə",
    points: [
      "Rəsmi Confirmation kodunun dərhal təhvil verilməsi",
      "May ayında nəticələrin rəsmi bazadan yoxlanılması",
    ],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
];

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollDistance = rect.height - windowHeight;

      if (totalScrollDistance <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(
        Math.max(currentScroll / totalScrollDistance, 0),
        1,
      );

      setScrollProgress(progress);

      if (progress < 0.35) {
        setActiveStep(0);
      } else if (progress < 0.72) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lineWidthPercent = 16.66 + scrollProgress * (83.33 - 16.66);

  return (
    <div ref={containerRef} className="relative h-[240vh] bg-[#FAF9F5] ">
      <div className="sticky top-0 min-h-screen flex flex-col justify-center pb-16 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center pb-16">
            <h2 className="text-3xl sm:text-5xl  font-bold tracking-tight text-[#0D1F1B] leading-tight">
              Uğurlu Nəticənin <br /> Arxasındakı Peşəkar Yol
            </h2>
          </div>

          <div className="mb-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-3 text-center mb-3">
              {processSteps.map((item, index) => (
                <div key={item.step} className="flex justify-center">
                  <span
                    className={`text-3xl md:text-5xl font-extrabold transition-all duration-500 transform ${
                      activeStep === index
                        ? "text-[#0D1F1B] scale-110"
                        : "text-gray-300 scale-95"
                    }`}
                  >
                    {item.step}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative w-full h-0.5 bg-gray-200">
              <div
                className="absolute top-0 left-0 h-0.5 bg-[#0D1F1B] transition-all duration-150 ease-out"
                style={{ width: `${lineWidthPercent}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-[#E5B56E] border-2 border-[#FAF9F5] shadow-md transition-transform duration-300"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {processSteps.map((item, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={item.step}
                  className={`bg-white rounded-3xl p-7 flex flex-col justify-between transition-all duration-500 shadow-sm ${
                    isActive
                      ? "ring-2 ring-[#0D1F1B] shadow-xl scale-[1.02] opacity-100"
                      : "opacity-60 scale-95 hover:opacity-90"
                  }`}
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#0D1F1B] mb-4">
                      {item.title}
                    </h3>

                    <div className="space-y-2.5 mb-6">
                      {item.points.map((point, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-gray-500 text-sm md:text-[15px] leading-relaxed"
                        >
                          <span className="font-semibold text-gray-700 text-base leading-none mt-0.5">
                            +
                          </span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full h-56 md:h-64 rounded-2xl overflow-hidden mt-auto">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isActive ? "scale-105" : "scale-100"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
