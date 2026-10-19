import { ShieldCheck, Users, Award, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router";

const stats = [
  { value: "5+", label: "İllik Peşəkar Təcrübə" },
  { value: "3,500+", label: "Uğurlu Müraciət" },
  { value: "100%", label: "Təsdiq Kodu Təhvili" },
  { value: "0", label: "Diskvalifikasiya Riski" },
];

const values = [
  {
    icon: ShieldCheck,
    title: "100% Şəffaflıq və Güvən",
    desc: "Müraciətiniz tamamlanan kimi rəsmi ABŞ sisteminin verdiyi orijinal Confirmation Code sənədini sizə təhvil veririk.",
  },
  {
    icon: Target,
    title: "Sıfır Səhv Zəmanəti",
    desc: "Hər bir anket və biometrik fotoşəkil sistemə daxil edilməzdən əvvəl 2 mərhələli mütəxəssis yoxlanışından keçir.",
  },
  {
    icon: Award,
    title: "Nəticələrin Şəxsi İzlənməsi",
    desc: "May ayında nəticələr elan olunduqda heç bir kod axtarışı ilə vaxt itirmirsiniz, nəticənizi şəxsən yoxlayıb bildiririk.",
  },
  {
    icon: Users,
    title: "Fərdi Müştəri Dəstəyi",
    desc: "Müraciət günündən nəticələr çıxan günə qədər bütün suallarınıza fərdi WhatsApp dəstəyi təqdim edirik.",
  },
];

const About = () => {
  return (
    <div className="bg-[#F6F8FC] min-h-screen pt-32 pb-24 text-[#0D1F1B]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0648bc] text-white text-xs font-bold uppercase tracking-wider mb-4">
            Biz Kimik?
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Amerika Xəyalınıza <br />
            <span className="text-[#0648bc]">Güvənli və Səhvsiz</span> Körpü
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            <strong>Green Pass</strong> komandası olaraq məqsədimiz hər il minlərlə
            Azərbaycan vətəndaşının kiçik anket səhvləri və ya yanlış fotoşəkillər
            səbəbindən Green Card lotereyasından kənarda qalmasının qarşısını almaqdır.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-stone-200 text-center shadow-sm"
            >
              <div className="text-3xl md:text-5xl font-black text-[#0D1F1B] mb-2">
                {s.value}
              </div>
              <div className="text-sm font-semibold text-gray-500 ">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Niyə Bizə Etibar Edirlər?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-base">
              Hər bir müraciətə sadəcə qeydiyyat kimi yox, bir insanın gələcək taleyi kimi yanaşırıq.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200 shadow-sm flex items-start gap-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0648bc] text-white flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-[#10264A] rounded-3xl p-10 md:p-16 text-white text-center max-w-4xl mx-auto shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Bu İl Qaliblərdən Biri Siz Olun
          </h2>
          <p className="text-stone-300 max-w-lg mx-auto mb-8 text-base">
            Müraciət anketinizi indi doldurun, rəsmi təsdiq kodunuzu bir neçə saat ərzində təhvil alın.
          </p>
          <Link
            to="/#pricing"
            className="inline-flex items-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-full  transition-colors"
          >
            <span>Paketlərlə Tanış Olun</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;