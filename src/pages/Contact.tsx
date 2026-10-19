import React, { useState } from "react";
import { Phone, Mail, Clock, MapPin, Send, MessageSquare, CheckCircle } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F6F8FC] min-h-screen pt-32 pb-24 text-[#0D1F1B]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Başlıq */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0648bc] text-white text-xs font-bold uppercase tracking-wider mb-4">
            Bizimlə Əlaqə
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Suallarınız Var? Bizə Yazın
          </h1>
          <p className="text-gray-600 text-base md:text-lg">
            Mütəxəssislərimiz müraciət qaydaları və şərtlər barədə sizə məlumat verməkdən məmnun olar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sol Tərəf: Əlaqə Məlumatları (5 Sütun) */}
          <div className="lg:col-span-5 bg-[#10264A] text-white rounded-3xl p-8 md:p-12 shadow-xl space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-3">Əlaqə Vasitələri</h2>
              <p className="text-stone-300 text-sm leading-relaxed">
                İstər zənglə, istərsə də WhatsApp vasitəsilə 7/24 bizimlə əlaqə saxlaya bilərsiniz.
              </p>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0648bc] text-white flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-stone-400 text-xs uppercase font-bold">Telefon / WhatsApp</div>
                  <a href="tel:+994500000000" className="text-base font-semibold ">
                    +994 (50) 000 00 00
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0648bc] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-stone-400 text-xs uppercase font-bold">Email Ünvanı</div>
                  <a href="mailto:info@greencard.az" className="text-base font-semibold">
                    info@greencard.az
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0648bc] text-white flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-stone-400 text-xs uppercase font-bold">İş Saatları</div>
                  <div className="text-base font-semibold">Hər gün: 09:00 – 22:00</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0648bc] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-stone-400 text-xs uppercase font-bold">Ünvan</div>
                  <div className="text-base font-semibold">Bakı şəhəri, Azərbaycan</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/15">
              <a
                href="https://wa.me/994500000000"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-white text-[#0D1F1B] font-bold flex items-center justify-center gap-2 "
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp-da Yazın</span>
              </a>
            </div>
          </div>

          {/* Sağ Tərəf: Əlaqə Formu (7 Sütun) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 border border-stone-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0D1F1B]">Mesajınız Göndərildi!</h3>
                <p className="text-gray-600 max-w-sm mx-auto text-sm">
                  Təşəkkür edirik. Mütəxəssisimiz ən qısa zamanda qeyd etdiyiniz nömrə və ya email ilə sizinlə əlaqə saxlayacaq.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-stone-100 text-stone-700 text-sm font-semibold hover:bg-stone-200"
                >
                  Yeni Mesaj Yaz
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold mb-2">Bizə Mesaj Göndərin</h2>
                <p className="text-gray-500 text-sm mb-6">
                  Zəhmət olmasa aşağıdakı formu doldurun, 15 dəqiqə ərzində cavablandıraq.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Ad və Soyadınız *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Məs: Əli Məmmədov"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border border-stone-200 focus:outline-none focus:border-[#0D1F1B]  focus:ring-[#0D1F1B] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Əlaqə Nömrəsi (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+994 50 000 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border border-stone-200 focus:outline-none focus:border-[#0D1F1B]  focus:ring-[#0D1F1B] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Email Ünvanınız
                  </label>
                  <input
                    type="email"
                    placeholder="adiniz@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl border border-stone-200 focus:outline-none focus:border-[#0D1F1B]  focus:ring-[#0D1F1B] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    Mesajınız və ya Sualınız *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Sualınızı və ya müraciət etmək istədiyiniz ailə vəziyyətinizi qeyd edin..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl border border-stone-200 focus:outline-none focus:border-[#0D1F1B]  focus:ring-[#0D1F1B] text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-[#10264A]  text-white font-bold text-sm  transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Mesajı Göndər</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;