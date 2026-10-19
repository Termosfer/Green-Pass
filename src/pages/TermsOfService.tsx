import { FileText, AlertTriangle, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const TermsOfService = () => {
  return (
    <div className="bg-[#F6F8FC] min-h-screen pt-32 pb-24 px-6 md:px-16 text-[#0D1F1B]">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-14 border border-stone-200 shadow-sm">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500  mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Səhifəyə Qayıt</span>
        </Link>

        <div className="border-b border-stone-100 pb-8 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0648bc] text-white text-xs font-bold uppercase tracking-wider mb-4">
            <FileText className="w-4 h-4" />
            Hüquqi Razılaşma
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0D1F1B] mb-3">
            İstifadəçi Şərtləri
          </h1>
          <p className="text-sm text-gray-400">
            Son yenilənmə tarixi: {new Date().toLocaleDateString("az-AZ")}
          </p>
        </div>

        <div className="space-y-8 text-gray-600 text-base leading-relaxed">
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-sm leading-relaxed">
              <strong>Rəsmi Xəbərdarlıq:</strong> Green Pass müstəqil konsaltinq və müraciət
              hazırlığı xidmətidir. Biz ABŞ Hökuməti və ya ABŞ Səfirliyi deyilik. Müraciət
              ABŞ Dövlət Departamentinin rəsmi <em>dvprogram.state.gov</em> portalında
              icra edilir.
            </div>
          </div>

          <section>
            <h2 className="text-xl font-bold text-[#0D1F1B] mb-3">
              1. Xidmətin Mahiyyəti
            </h2>
            <p>
              Green Pass istifadəçilər adından Green Card (DV Lottery) müraciət formasının
              rəsmi tələblərə tam uyğun doldurulması, fotoşəkillərin 600x600 biometrik
              standarta kəsilməsi, rəsmi portala daxil edilməsi və rəsmi Təsdiq Kodunun
              (Confirmation Code) sifarişçiyə təhvil verilməsi xidmətini göstərir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1F1B] mb-3">
              2. Namizədin Öhdəlikləri
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Müştəri tərəfindən təqdim olunan bütün məlumatlar həqiqi və dəqiq olmalıdır.</li>
              <li>Göndərilən fotoşəkil son 6 ay ərzində çəkilmiş olmalıdır.</li>
              <li>Ailəli şəxslər həyat yoldaşı və 21 yaşadək bütün subay uşaqlarını qeyd etməlidir (bu rəsmi ABŞ qanunudur).</li>
              <li>Yalan və ya saxta məlumatların verilməsinə görə bütün məsuliyyət müraciət edənin üzərinə düşür.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1F1B] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#0648bc]" />
              3. Zəmanət və Uduş Şərtləri
            </h2>
            <p>
              Green Card lotereyası ABŞ Dövlət Departamenti tərəfindən tam kompüter təsadüfiliyi
              ilə seçilir. <strong>Heç bir şirkət və ya şəxs Green Card qazanmağa 100% zəmanət verə bilməz.</strong> 
              Green Pass şirkətinin verdiyi zəmanət müraciətinizin qaydalara tam uyğun, səhvsiz və diskvalifikasiyasız qeydə alınmasına aiddir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1F1B] mb-3">
              4. Ödəniş və Geri Qaytarılma (Refund) Qaydaları
            </h2>
            <p className="mb-2">
              Xidmət haqqı müraciət icra olunmazdan əvvəl ödənilir:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
              <li>Müraciət rəsmi sistemdə qeydiyyatdan keçdikdən və Confirmation Code təhvil verildikdən sonra xidmət tamamlanmış hesab edilir və ödəniş geri qaytarılmır.</li>
              <li>Əgər bizim tərəfimizdən hər hansı texniki xəta baş verərsə və müraciətiniz qeydiyyatdan keçməzsə, ödənişiniz 100% dərhal geri qaytarılır.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;