import { ShieldCheck, Lock, Eye, Trash2, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#FAF9F5] min-h-screen pt-32 pb-24 px-6 md:px-16 text-[#0D1F1B]">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-14 border border-stone-200 shadow-sm">
        {/* Geri qayıt */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-emerald-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Səhifəyə Qayıt</span>
        </Link>

        {/* Başlıq */}
        <div className="border-b border-stone-100 pb-8 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            Məxfilik və Təhlükəsizlik
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0D1F1B] mb-3">
            Məxfilik Siyasəti
          </h1>
          <p className="text-sm text-gray-400">
            Son yenilənmə tarixi: {new Date().toLocaleDateString("az-AZ")}
          </p>
        </div>

        {/* Mətn Hissələri */}
        <div className="space-y-8 text-gray-600 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#0D1F1B] mb-3 flex items-center gap-2">
              1. Ümumi Müddəalar
            </h2>
            <p>
              Bu Məxfilik Siyasəti <strong>Green Pass</strong> (“biz”, “bizim”)
              tərəfindən veb-sayt vasitəsilə təqdim olunan Green Card (Diversity Visa)
              müraciət xidmətlərindən istifadə zamanı şəxsi məlumatlarınızın necə
              toplandığını, istifadə edildiyini və qorunduğunu izah edir. Bizə
              müraciət etməklə məlumatlarınızın bu siyasətə uyğun işlənməsinə razılıq
              vermiş olursunuz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1F1B] mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-emerald-600" />
              2. Toplanan Məlumatlar
            </h2>
            <p className="mb-2">
              ABŞ Dövlət Departamentinin rəsmi DS-5501 formasını doldurmaq üçün
              sizdən yalnız zəruri məlumatlar toplanır:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-gray-700">
              <li>Ad, soyad, doğum tarixi və doğum yeri (şəhər/ölkə)</li>
              <li>Ailə vəziyyəti (subay, evli, uşaq sayı) və ailə üzvlərinin məlumatları</li>
              <li>Əlaqə vasitələri: Telefon nömrəsi (WhatsApp) və Email ünvanı</li>
              <li>Təhsil səviyyəsi</li>
              <li>Biometrik standartlara uyğunlaşdırılacaq fotoşəkillər</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1F1B] mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600" />
              3. Məlumatların İstifadə Məqsədi və Saxlanması
            </h2>
            <p>
              Toplanan bütün məlumatlar <strong>YALNIZ VƏ YALNIZ</strong> müraciətinizin
              rəsmi DV Lottery sistemində qeydiyyatdan keçirilməsi və nəticəniz barədə
              sizə məlumat verilməsi məqsədilə istifadə olunur. Məlumatlarınız heç bir
              halda üçüncü tərəflərə satılmır, ötürülmür və ya marketinq məqsədilə
              paylaşılmır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1F1B] mb-3">
              4. Təsdiq Kodu (Confirmation Code) Təhlükəsizliyi
            </h2>
            <p>
              Qeydiyyat tamamlandıqdan sonra formalaşan unikal rəsmi Təsdiq Kodu
              (Confirmation Code) birbaşa sizə PDF formatında təhvil verilir. Kodun surəti
              yalnız May ayında sizin adınızdan nəticəni yoxlamaq üçün təhlükəsiz şifrələnmiş
              serverdə saxlanılır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0D1F1B] mb-3 flex items-center gap-2">
              <Trash2 className="w-5 h-5 text-emerald-600" />
              5. Məlumatların Silinməsi Hüququ
            </h2>
            <p>
              İstənilən vaxt müştəri dəstəyimizlə əlaqə saxlayaraq (WhatsApp və ya Email
              vasitəsilə) şəxsi məlumatlarınızın və fotoşəkillərinizin bazamızdan tamamilə
              silinməsini tələb edə bilərsiniz.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;