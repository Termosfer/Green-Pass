import { 
  FileCheck, 
  Camera, 
  Users, 
  FileText, 
  BellRing, 
  Compass, 
  ArrowRight 
} from "lucide-react";
import { Link } from "react-router";

const allServices = [
  {
    icon: FileCheck,
    title: "DS-5501 Rəsmi Anket Doldurulması",
    desc: "Bütün bioqrafik məlumatların ABŞ Dövlət Departamentinin rəsmi ingilis dili transliterasiya qaydalarına uyğun səhvsiz daxil edilməsi.",
  },
  {
    icon: Camera,
    title: "600x600 Biometrik Foto Tənzimlənməsi",
    desc: "Şəklinizin arxa fonunun rəsmi ağ standarta salınması, başın pikselləri və işıq parametrlərinin xüsusi proqramla təsdiqlənməsi.",
  },
  {
    icon: Users,
    title: "Ailəvi Müraciət və Çoxqat Şans",
    desc: "Həm ər, həm arvad üçün çarpaz ərizələrin hazırlanması və 21 yaşadək bütün uşaqların qaydalara uyğun əlavə olunması.",
  },
  {
    icon: FileText,
    title: "Rəsmi Təsdiq Kodu (PDF Təhvil)",
    desc: "Sistem tərəfindən generasiya olunan 16 simvollu rəsmi təsdiq sənədinin dərhal sizin WhatsApp və Email ünvanınıza göndərilməsi.",
  },
  {
    icon: BellRing,
    title: "May Nəticələrinin Şəxsi Yoxlanması",
    desc: "Nəticələr açıqlandıqda server sıxlığına baxmayaraq statusunuzun dərhal yoxlanılması və qazanma xəbərinin sizə çatdırılması.",
  },
  {
    icon: Compass,
    title: "Qaliblər üçün İlkin Konsultasiya",
    desc: "Qalib gəldikdən sonra doldurulacaq mürəkkəb DS-260 forması və səfirlik müsahibəsi üçün zəruri addımların izahı.",
  },
];

const Services = () => {
  return (
    <div className="bg-[#F6F8FC] min-h-screen pt-32 pb-24 text-[#0D1F1B]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Başlıq */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0648bc] text-white text-xs font-bold uppercase tracking-wider mb-4">
            Peşəkar Həllər
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Bütün Green Card Xidmətlərimiz
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            İlkin müraciətdən nəticə gününə qədər ehtiyacınız olan bütün xidmətlər tək ünvanda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {allServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-stone-200 hover:border-[#0D1F1B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0648bc] text-white flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100 text-xs font-bold text-[#b42336] uppercase tracking-wider flex items-center gap-1">
                  <span>Standarta Uyğun</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 text-center max-w-3xl mx-auto shadow-sm">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            Sizə Uyğun Qiymət Paketini Seçin
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Fərdi və ailəvi paketlərimizlə tanış olun və dərhal qeydiyyatdan keçin.
          </p>
          <Link
            to="/#pricing"
            className="inline-flex items-center gap-2 bg-[#b42336] hover:bg-[#8a1b29] text-white font-bold px-8 py-4 rounded-full  transition-colors"
          >
            <span>Tariflərə Baxın</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;