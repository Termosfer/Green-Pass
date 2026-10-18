import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock, ArrowUp } from "lucide-react";
import logo from "../assets/logo-footer.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#10264A] text-white pt-20 pb-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Green Pass Logo"
                className="w-20 h-20 object-cover"
              />
            </div>

            <p className="text-stone-400 text-sm md:text-base leading-relaxed">
              Amerika xəyalınıza rəsmi standartlara tam uyğun, səhvsiz anket və
              100% zəmanətli təsdiq kodu ilə inamla addımlayın.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <h4 className=" font-bold text-white tracking-wider uppercase text-sm">
              Naviqasiya
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Ana Səhifə
                </Link>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Xidmətlər
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="hover:text-white transition-colors"
                >
                  Necə İşləyir?
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors"
                >
                  Tariflər
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-5">
            <h4 className=" font-bold text-white tracking-wider uppercase text-sm">
              Tələblər & Dəstək
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  600x600 Fotoşəkil Tələbləri
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Kimlər Müraciət Edə Bilər?
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Confirmation Kodu İzləmə
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Qalib Gəldikdən Sonrakı Mərhələ
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-5">
            <h4 className="font-bold text-white tracking-wider uppercase text-sm">
              Əlaqə
            </h4>
            <div className="space-y-3.5 text-sm text-stone-400">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a
                  href="tel:+994500000000"
                  className="hover:text-white transition-colors"
                >
                  +994 (50) 000 00 00
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <a
                  href="mailto:info@greencard.az"
                  className="hover:text-white transition-colors"
                >
                  info@greencard.az
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-white shrink-0" />
                <span>Hər gün: 09:00 – 22:00</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>Bakı şəhəri, Azərbaycan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 border-b border-white/10 text-xs text-stone-500 leading-relaxed text-center md:text-left">
          <strong>Rəsmi Xəbərdarlıq (Disclaimer):</strong> Green Pass müstəqil
          konsaltinq və sənədləşmə xidmətidir. Şirkətimiz ABŞ Hökuməti və ya ABŞ
          Dövlət Departamenti ilə birbaşa əlaqəli deyildir. Müraciətlər
          namizədin adından rəsmi dövlət portalı (dvprogram.state.gov) üzərindən
          icra olunur və rəsmi təsdiq kodu təqdim edilir.
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © {new Date().getFullYear()} Green Pass. Bütün hüquqlar qorunur.
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/mexfilik-siyaseti"
              className="hover:text-stone-200 transition-colors"
            >
              Məxfilik Siyasəti
            </Link>
            <Link
              to="/istifadeci-sertleri"
              className="hover:text-stone-200 transition-colors"
            >
              İstifadəçi Şərtləri
            </Link>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="cursor-pointer w-10 h-10 rounded-full bg-white text-[#0B1A17]  flex items-center justify-center transition-all duration-300 shadow-md ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
