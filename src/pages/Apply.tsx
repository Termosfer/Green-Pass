import React, { useState } from "react";
import { 
  User, 
  Users, 
  Camera, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Upload, 
  ShieldCheck, 
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";

interface FormData {
  // Addım 1: Şəxsi
  firstName: string;
  lastName: string;
  gender: "male" | "female" | "";
  birthDate: string;
  birthCity: string;
  education: string;

  maritalStatus: "single" | "married" | "divorced" | "widowed";
  spouseName?: string;
  spouseBirthDate?: string;
  childrenCount: number;

  photoFile: File | null;
  photoPreview: string | null;
  sendPhotoLater: boolean;

  phone: string;
  email: string;
  selectedPlan: "single" | "family" | "vip";
}

const initialData: FormData = {
  firstName: "",
  lastName: "",
  gender: "",
  birthDate: "",
  birthCity: "",
  education: "Ali (Bakalavr)",
  maritalStatus: "single",
  spouseName: "",
  spouseBirthDate: "",
  childrenCount: 0,
  photoFile: null,
  photoPreview: null,
  sendPhotoLater: false,
  phone: "",
  email: "",
  selectedPlan: "single",
};

const Apply = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [isSuccess, setIsSuccess] = useState(false);

  const canGoNext = () => {
    if (step === 1) {
      return (
        data.firstName.trim() !== "" &&
        data.lastName.trim() !== "" &&
        data.gender !== "" &&
        data.birthDate !== "" &&
        data.birthCity.trim() !== ""
      );
    }
    if (step === 2) {
      if (data.maritalStatus === "married") {
        return (data.spouseName || "").trim() !== "";
      }
      return true;
    }
    if (step === 3) {
      return data.photoPreview !== null || data.sendPhotoLater;
    }
    if (step === 4) {
      return data.phone.trim() !== "";
    }
    return true;
  };

  const handleNext = () => {
    if (canGoNext() && step < 4) {
      setStep(step + 1);
      window.scrollTo({ top: 100, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 100, behavior: "smooth" });
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setData({
        ...data,
        photoFile: file,
        photoPreview: URL.createObjectURL(file),
        sendPhotoLater: false,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="bg-[url('/src/assets/bg-form.png')] min-h-screen pt-32 pb-24 text-[#0D1F1B]">
      <div className="max-w-3xl mx-auto px-6">
        {isSuccess ? (
          <div className="bg-white rounded-3xl p-10 md:p-14 border border-stone-200 text-center shadow-lg space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-extrabold text-[#0D1F1B]">
              Müraciətiniz Qəbul Olundu! 🎉
            </h2>
            <p className="text-gray-600 max-w-md mx-auto text-base leading-relaxed">
              Hörmətli <strong>{data.firstName} {data.lastName}</strong>, məlumatlarınız sistemimizə daxil edildi. Mütəxəssisimiz 15 dəqiqə ərzində{" "}
              <strong>{data.phone}</strong> nömrənizlə əlaqə saxlayaraq təsdiq prosesini tamamlayacaq.
            </p>

            <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 max-w-sm mx-auto text-sm text-gray-500">
              Paket: <strong className="text-gray-900 uppercase">{data.selectedPlan}</strong>
            </div>

            <Link
              to="/"
              className="inline-block bg-emerald-800 text-white font-bold px-8 py-3.5 rounded-full hover:bg-emerald-900 transition-colors"
            >
              Ana Səhifəyə Qayıt
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-sm">
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0648bc]">
                  Addım {step} / 4
                </span>
                <span className="text-xs font-semibold text-gray-400">
                  {step === 1 && "Şəxsi Məlumatlar"}
                  {step === 2 && "Ailə Vəziyyəti"}
                  {step === 3 && "Fotoşəkil"}
                  {step === 4 && "Əlaqə və Təsdiq"}
                </span>
              </div>

              <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0648bc] transition-all duration-500 rounded-full"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>

              <div className="flex justify-between items-center mt-4">
                {[
                  { num: 1, label: "Şəxsi", icon: User },
                  { num: 2, label: "Ailə", icon: Users },
                  { num: 3, label: "Şəkil", icon: Camera },
                  { num: 4, label: "Təsdiq", icon: ShieldCheck },
                ].map((s) => {
                  const Icon = s.icon;
                  const isActive = step === s.num;
                  const isDone = step > s.num;
                  return (
                    <div
                      key={s.num}
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          isDone
                            ? "bg-emerald-600 text-white"
                            : isActive
                            ? "bg-[#0648bc] text-white ring-4 ring-stone-100"
                            : "bg-stone-100 text-stone-400"
                        }`}
                      >
                        {isDone ? <CheckCircle className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                      </div>
                      <span className={`text-[11px] font-semibold ${isActive ? "text-[#0D1F1B]" : "text-gray-400"}`}>
                        {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0D1F1B] mb-1">
                      Şəxsi Məlumatlarınız
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Məlumatları şəxsiyyət vəsiqəsi və ya xarici pasportdakı kimi daxil edin.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Adınız (İngilis hərfləri ilə) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Məs: ELVIN"
                        value={data.firstName}
                        onChange={(e) => setData({ ...data, firstName: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl border border-stone-200 focus:outline-none focus:border-[#0D1F1B] text-sm uppercase"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Soyadınız *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Məs: MAMMADLI"
                        value={data.lastName}
                        onChange={(e) => setData({ ...data, lastName: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl border border-stone-200 focus:outline-none focus:border-[#0D1F1B] text-sm uppercase"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Cinsiniz *
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setData({ ...data, gender: "male" })}
                          className={`py-3 rounded-2xl border text-sm font-semibold transition-all ${
                            data.gender === "male"
                              ? "bg-[#0D1F1B] text-white border-[#0D1F1B]"
                              : "border-stone-200 text-gray-700 hover:bg-stone-50"
                          }`}
                        >
                          Kişi
                        </button>
                        <button
                          type="button"
                          onClick={() => setData({ ...data, gender: "female" })}
                          className={`py-3 rounded-2xl border text-sm font-semibold transition-all ${
                            data.gender === "female"
                              ? "bg-[#0D1F1B] text-white border-[#0D1F1B]"
                              : "border-stone-200 text-gray-700 hover:bg-stone-50"
                          }`}
                        >
                          Qadın
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Doğum Tarixiniz *
                      </label>
                      <input
                        type="date"
                        required
                        value={data.birthDate}
                        onChange={(e) => setData({ ...data, birthDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl border border-stone-200 focus:outline-none focus:border-[#0D1F1B] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Doğulduğunuz Şəhər (və ya rayon) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Məs: Baku, Ganja, Sumqayit..."
                        value={data.birthCity}
                        onChange={(e) => setData({ ...data, birthCity: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl border border-stone-200 focus:outline-none focus:border-[#0D1F1B] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Təhsil Səviyyəniz *
                      </label>
                      <select
                        value={data.education}
                        onChange={(e) => setData({ ...data, education: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl border border-stone-200 focus:outline-none focus:border-[#0D1F1B] text-sm bg-white"
                      >
                        <option value="Orta məktəb (Tam)">Orta məktəb (11 illik)</option>
                        <option value="Kollec / Texnikum">Kollec / Peşə məktəbi</option>
                        <option value="Ali (Bakalavr)">Ali təhsil (Bakalavr)</option>
                        <option value="Magistratura">Magistratura / Doktorantura</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0D1F1B] mb-1">
                      Ailə Vəziyyətiniz
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Evlisinizsə, müraciətiniz həm də yoldaşınız adından göndəriləcək (2 qat şans).
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Rəsmi Ailə Vəziyyətiniz *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { id: "single", label: "Subay" },
                        { id: "married", label: "Rəsmi Evli" },
                        { id: "divorced", label: "Boşanmış" },
                        { id: "widowed", label: "Dul" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            const val = item.id as any;
                            setData({
                              ...data,
                              maritalStatus: val,
                              selectedPlan: val === "married" ? "family" : "single",
                            });
                          }}
                          className={`py-3 rounded-2xl border text-sm font-semibold transition-all ${
                            data.maritalStatus === item.id
                              ? "bg-[#0D1F1B] text-white border-[#0D1F1B]"
                              : "border-stone-200 text-gray-700 hover:bg-stone-50"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {data.maritalStatus === "married" && (
                    <div className="p-6 rounded-3xl bg-emerald-50/60 border border-emerald-200 space-y-4">
                      <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        Ailəvi müraciət seçildi — Qazanma şansınız 2 qat artır!
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                          Həyat Yoldaşınızın Adı və Soyadı *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Məs: LEYLA MAMMADLI"
                          value={data.spouseName}
                          onChange={(e) => setData({ ...data, spouseName: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl border border-stone-200 bg-white focus:outline-none focus:border-[#0D1F1B] text-sm uppercase"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                          Həyat Yoldaşınızın Doğum Tarixi
                        </label>
                        <input
                          type="date"
                          value={data.spouseBirthDate}
                          onChange={(e) => setData({ ...data, spouseBirthDate: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl border border-stone-200 bg-white focus:outline-none focus:border-[#0D1F1B] text-sm"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      21 yaşadək subay övladlarınızın sayı (Yoxdursa 0 seçin)
                    </label>
                    <div className="flex gap-3">
                      {[0, 1, 2, 3, 4].map((count) => (
                        <button
                          key={count}
                          type="button"
                          onClick={() => setData({ ...data, childrenCount: count })}
                          className={`flex-1 py-3 rounded-2xl border text-sm font-bold transition-all ${
                            data.childrenCount === count
                              ? "bg-[#0D1F1B] text-white border-[#0D1F1B]"
                              : "border-stone-200 text-gray-700 hover:bg-stone-50"
                          }`}
                        >
                          {count === 4 ? "4+" : count}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 mt-2">
                      * Uşaqların məlumatları müraciətdən sonra WhatsApp vasitəsilə də dəqiqləşdirilə bilər.
                    </p>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0D1F1B] mb-1">
                      Fotoşəkil Yüklənməsi
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Telefonla ağ divar qarşısında çəkilmiş şəklinizi yükləyə bilərsiniz. Mütəxəssislərimiz onu standarta salacaq.
                    </p>
                  </div>

                  <div className="border-2 border-dashed border-stone-300 hover:border-[#0D1F1B] rounded-3xl p-8 text-center bg-stone-50/50 transition-colors">
                    {data.photoPreview ? (
                      <div className="space-y-4">
                        <div className="w-36 h-36 mx-auto rounded-2xl overflow-hidden border-2 border-emerald-500 shadow-md">
                          <img
                            src={data.photoPreview}
                            alt="Önbaxış"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-xs font-semibold text-emerald-700">
                          ✓ Şəkil uğurla seçildi
                        </p>
                        <label className="cursor-pointer inline-block text-xs font-bold text-[#0D1F1B] underline">
                          Şəkli dəyişdir
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handlePhotoUpload}
                          />
                        </label>
                      </div>
                    ) : (
                      <label className="cursor-pointer flex flex-col items-center gap-3">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-stone-600 shadow-sm">
                          <Upload className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-sm font-bold text-[#0D1F1B]">
                            Şəkil seçmək üçün klikləyin
                          </span>
                          <p className="text-xs text-gray-400 mt-1">
                            JPG və ya PNG formatında, max 10MB
                          </p>
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handlePhotoUpload}
                        />
                      </label>
                    )}
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="sendLater"
                      checked={data.sendPhotoLater}
                      onChange={(e) =>
                        setData({ ...data, sendPhotoLater: e.target.checked })
                      }
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <label htmlFor="sendLater" className="text-xs text-amber-900 leading-relaxed cursor-pointer">
                      <strong>Şəklim hazırda yanımda deyil:</strong> Müraciəti indi tamamlayıram, şəkli daha sonra WhatsApp vasitəsilə menecerinizə göndərəcəyəm.
                    </label>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0D1F1B] mb-1">
                      Əlaqə və Təsdiq
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Təsdiq kodunuzun (Confirmation Code) göndəriləcəyi nömrəni qeyd edin.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        WhatsApp Nömrəniz *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+994 50 000 00 00"
                        value={data.phone}
                        onChange={(e) => setData({ ...data, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl border border-stone-200 focus:outline-none focus:border-[#0D1F1B] text-sm font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                        Email Ünvanınız
                      </label>
                      <input
                        type="email"
                        placeholder="adiniz@gmail.com"
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-2xl border border-stone-200 focus:outline-none focus:border-[#0D1F1B] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                      Xidmət Paketini Seçin *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: "single", name: "Fərdi Paket", price: "19 ₼" },
                        { id: "family", name: "Ailəvi Paket", price: "35 ₼" },
                        { id: "vip", name: "VIP Paket", price: "59 ₼" },
                      ].map((pkg) => (
                        <div
                          key={pkg.id}
                          onClick={() => setData({ ...data, selectedPlan: pkg.id as any })}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                            data.selectedPlan === pkg.id
                              ? "bg-[#0D1F1B] text-white border-[#0D1F1B] shadow-md"
                              : "border-stone-200 text-gray-800 hover:bg-stone-50"
                          }`}
                        >
                          <span className="text-xs font-bold uppercase tracking-wider">
                            {pkg.name}
                          </span>
                          <span className="text-2xl font-extrabold mt-2">
                            {pkg.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-gray-600 space-y-1">
                    <p>Namizəd: <strong className="text-gray-900">{data.firstName} {data.lastName}</strong></p>
                    <p>Status: <strong className="text-gray-900">{data.maritalStatus === "married" ? "Evli (2x müraciət)" : "Subay"}</strong></p>
                    <p>Foto: <strong className="text-emerald-700">{data.photoPreview ? "Yükləndi" : "WhatsApp ilə göndəriləcək"}</strong></p>
                  </div>
                </div>
              )}

              <div className="mt-10 pt-6 border-t border-stone-100 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stone-200 text-sm font-semibold text-gray-700 hover:bg-stone-50 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Geri</span>
                  </button>
                ) : (
                  <div></div>
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    disabled={!canGoNext()}
                    onClick={handleNext}
                    className={`inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold transition-all shadow-md ${
                      canGoNext()
                        ? "bg-[#b42336] hover:bg-[#8a1b29] text-white  hover:scale-105"
                        : "bg-stone-200 text-stone-400 cursor-not-allowed"
                    }`}
                  >
                    <span>Növbəti Addım</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!canGoNext()}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30 hover:scale-105 transition-all"
                  >
                    <span>Müraciəti Tamamla</span>
                    <CheckCircle className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Apply;