import  { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Green Card müraciəti üçün xarici pasport tələb olunurmu?",
    answer:
      "Xeyr! ABŞ Dövlət Departamenti ilkin müraciət zamanı xarici pasport tələbini ləğv edib. Sadəcə şəxsiyyət vəsiqəsi məlumatlarınız kifayətdir. Pasport yalnız lotereyanı udduqdan sonra konsulluq mərhələsində lazım olacaq.",
  },
  {
    id: 2,
    question: "Fotoşəkil necə olmalıdır? Telefonla çəkilmiş şəkil olar?",
    answer:
      "Bəli! İşıqlı bir yerdə, ağ/açıq divar önündə telefonla çəkilmiş təmiz şəklinizi bizə göndərməyiniz kifayətdir. Komandamız süni intellekt və peşəkar qrafik vasitələrlə şəklinizi rəsmi 600x600 biometrik standarta (arxa fonun ağardılması, baş ölçüsü və s.) tam uyğunlaşdırır.",
  },
  {
    id: 3,
    question: "Təsdiq kodumu (Confirmation Code) nə vaxt və necə alacağam?",
    answer:
      "Məlumatlarınız rəsmi ABŞ portalında (dvprogram.state.gov) qeydiyyatdan keçən kimi sistemin təqdim etdiyi rəsmi Təsdiq Kodu sənədi (PDF) dərhal WhatsApp və Email ünvanınıza göndərilir. Kod yalnız sizə məxsus olur.",
  },
  {
    id: 4,
    question: "Ailəvi paketdə qazanma şansı niyə 2 qat artır?",
    answer:
      "Çünki həm ər, həm də arvad adından iki ayrı rəsmi müraciət göndərilir və hər biri digərini ailə üzvü kimi qeyd edir. Onlardan hər hansı biri qalib gələrsə, həyat yoldaşı və 21 yaşadək bütün uşaqlar avtomatik olaraq Green Card almaq hüququ qazanır.",
  },
  {
    id: 5,
    question: "Mən özüm pulsuz doldura bildiyim halda, niyə sizə müraciət etməliyəm?",
    answer:
      "Rəsmi müraciət pulsuzdur, lakin hər il milyonlarla namizəd fotodakı kiçik kölgə, yanlış piksel və ya anketdəki cüzi hərf səhvinə görə sistem tərəfindən heç tiraja buraxılmadan diskvalifikasiya olunur. Biz müraciətinizi 100% rəsmi standartlara uyğunlaşdıraraq diskvalifikasiya riskini sıfıra endiririk.",
  },
  {
    id: 6,
    question: "Nəticələr nə vaxt elan olunur və mən necə xəbər tutacağam?",
    answer:
      "Nəticələr hər il May ayının ilk həftəsində rəsmi bazada açıqlanır. Siz nəticə axtarmaqla narahat olmursunuz — mütəxəssislərimiz nəticənizi şəxsən yoxlayıb dərhal zəng və ya WhatsApp vasitəsilə sizə məlumat verir.",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-[#F6F8FC] py-20 lg:py-24 px-6 md:px-16 text-[#0D1F1B] border-t border-stone-200">
      <div className="max-w-5xl mx-auto">
        {/* Üst Başlıq */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-sm font-semibold tracking-wider text-gray-700 uppercase">
              Tez-tez Verilən Suallar
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0D1F1B] leading-tight mb-4">
            Ağlınızda Sual Qalmasın
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto text-base md:text-lg">
            Green Card müraciəti ilə bağlı ən vacib nüansları və sualları sizin üçün cavablandırdıq.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white border-[#0D1F1B]/20 shadow-md"
                    : "bg-white/70 border-stone-200 hover:border-stone-300 hover:bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-6 px-6 md:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg md:text-xl font-bold text-[#0D1F1B]">
                    {faq.question}
                  </span>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#0D1F1B] text-white"
                        : "bg-stone-100 text-stone-700"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 transition-transform duration-300" />
                    ) : (
                      <Plus className="w-4 h-4 transition-transform duration-300" />
                    )}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out px-6 md:px-8 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-6"
                      : "grid-rows-[0fr] opacity-0 pb-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 text-base leading-relaxed border-t border-stone-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      
      </div>
    </section>
  );
};

export default FAQSection;