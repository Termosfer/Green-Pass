import { Check, ArrowRight } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  price: string;
  popular?: boolean;
  description: string;
  features: string[];
  buttonText: string;
}

const pricingPlans: Plan[] = [
  {
    id: "single",
    name: "Fərdi Paket",
    price: "19 ₼",
    description:
      "Tək müraciət edən subay vətəndaşlar üçün tam rəsmi qeydiyyat paketi.",
    features: [
      "1 ədəd rəsmi DS-5501 müraciət anketi",
      "Fotoşəklin 600x600 biometrik standarta uyğunlaşdırılması",
      "Səhvsiz doldurulma və diskvalifikasiyadan sığorta",
      "Rəsmi Təsdiq Kodunun (Confirmation) dərhal PDF verilməsi",
      "May ayında nəticələrin yoxlanılması və bildiriş",
    ],
    buttonText: "Müraciət Et",
  },
  {
    id: "family",
    name: "Ailəvi Paket",
    price: "35 ₼",
    popular: true,
    description:
      "Həm ər, həm arvad adına müraciət — qazanma şansını 2 qat artırır!",
    features: [
      "2 əsas müraciət anketi (Şans 2 qat artır)",
      "21 yaşadək bütün uşaqlar ödənişsiz əlavə olunur",
      "Bütün ailə üzvləri üçün fotoların mütəxəssis tərəfindən redaktəsi",
      "Hər iki ərizə üçün rəsmi təsdiq kodlarının təhvili",
      "Prioritet WhatsApp dəstək xətti",
      "Nəticələr çıxan gün fərdi məlumatlandırma",
    ],
    buttonText: "Ailəvi Müraciət Et",
  },
  {
    id: "vip",
    name: "VIP Qarantiyalı Paket",
    price: "59 ₼",
    description:
      "Növbəsiz sürətli qeydiyyat və qazandıqdan sonra konsulluq konsultasiyası.",
    features: [
      "Bütün Ailəvi Paket xidmətləri daxildir",
      "Fərdi Green Card meneceri təyinatı",
      "Müraciətin 2 saat ərzində növbəsiz tamamlanması",
      "Texniki xətaya qarşı 100% pulun geri qaytarılması zəmanəti",
      "Qalib olduqda: DS-260 forması və viza müsahibəsi üçün ilkin konsultasiya",
    ],
    buttonText: "VIP Müraciət Et",
  },
];

const PricingSection = () => {
  return (
    <section className="bg-[#F6F8FC] py-20 lg:py-24 px-6 md:px-16 text-[#0D1F1B]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl  font-bold tracking-tight text-[#0D1F1B] leading-tight max-w-2xl mx-auto mb-4">
            Şəffaf Qiymətlər, <br /> Gizli Xərc Yoxdur
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto text-base md:text-lg">
            Sizə ən uyğun paketi seçin, Amerika xəyalınıza risksiz və peşəkar
            komanda ilə addımlayın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? "bg-[#10264A] text-white shadow-2xl lg:-translate-y-4 ring-2 ring-[#E5B56E]/40"
                    : "bg-white text-[#0D1F1B] border border-stone-200 hover:border-stone-400 shadow-sm hover:shadow-lg"
                }`}
              >
               

                <div>
                  <div className="mb-6">
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        isPopular ? "text-white" : "text-[#0D1F1B]"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isPopular ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-stone-200/20">
                    <span
                      className={`text-5xl font-extrabold tracking-tight ${
                        isPopular ? "text-white" : "text-[#0D1F1B]"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ${
                        isPopular ? "text-gray-300" : "text-gray-500"
                      }`}
                    >
                      / birdəfəlik
                    </span>
                  </div>

                  <div className="space-y-4 mb-10">
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isPopular ? "text-white" : "text-gray-400"
                      }`}
                    >
                      Paketə daxildir:
                    </p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isPopular
                              ? "bg-[#0648bc] text-white"
                              : "bg-stone-100 text-[#0D1F1B]"
                          }`}
                        >
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span
                          className={`text-sm leading-relaxed ${
                            isPopular ? "text-gray-200" : "text-gray-600"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  className={`group relative w-full py-4 px-6 rounded-2xl font-bold text-sm flex items-center justify-center overflow-hidden transition-all duration-300 shadow-sm ${
                    isPopular
                      ? "bg-white text-black "
                      : "bg-[#10264A] text-white "
                  }`}
                >
                  <span className="flex items-center gap-2 transform transition-all duration-300 group-hover:-translate-x-2">
                    {plan.buttonText}
                    <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center text-sm text-gray-500 max-w-xl mx-auto">
           Bütün ödənişlər təhlükəsiz bank sistemi üzərindən qəbul edilir.
          Müraciətiniz tamamlandıqdan sonra rəsmi{" "}
          <strong className="text-gray-700">Confirmation Code</strong> sənədi
          100% sizə təqdim olunur.
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
