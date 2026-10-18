import { motion } from "framer-motion";
import img from "../assets/h1-why-choose-img.webp";
import featureBg from "../assets/h1-feature-bg-image.webp";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardData = [
  {
    number: "01",
    title: "Fərdi Müraciət və Təhlil",
    description:
      "Şəxsi məlumatlarınız və sənədləriniz mütəxəssislər tərəfindən fərdi yoxlanılır, bütün diskvalifikasiya riskləri minimuma endirilir.",
    dark: false,
  },
  {
    number: "02",
    title: "2 Qat Qazanma Şansı",
    description:
      "Ailəli namizədlər üçün həm ər, həm arvad adından ayrı-ayrı müraciət göndərərək ailənizin uduş şansını iki dəfə artırırıq.",
    dark: true,
  },
  {
    number: "03",
    title: "100% Rəsmi Təsdiq Kodu",
    description:
      "Müraciət tamamlanan kimi ABŞ sisteminin verdiyi rəsmi Confirmation Code sənədini PDF olaraq sizə təqdim edirik.",
    dark: false,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="overflow-hidden bg-[#F6F8FC] pb-20 lg:pb-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
        <div className="relative flex flex-col gap-10 pb-16 lg:flex-row lg:gap-16 lg:pb-48">
          <motion.div
            className="mt-10 flex w-full flex-col gap-4 lg:mt-20 lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div
              variants={fadeLeft}
              className="mb-2 flex items-center gap-2"
            >
              
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 sm:text-sm">
                Niyə Məhz Biz?
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl"
            >
              Niyə Müraciətinizi Peşəkarlara Həvalə Etməlisiniz?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="max-w-md text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Hər il yüz minlərlə namizəd kiçik anket səhvləri və ya yanlış
              fotoşəkil səbəbindən diskvalifikasiya olunur. Biz müraciətinizi
              rəsmi standartlara uyğun doldurub, təsdiq kodunu sizə təhvil
              veririk.
            </motion.p>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.img
              src={img}
              alt="Niyə bizi seçməlisiniz"
              className="h-auto w-full rounded-2xl shadow-md"
              whileHover={{
                scale: 1.025,
                transition: { duration: 0.4 },
              }}
            />
          </motion.div>

          <motion.div
            className="relative z-10 grid w-full grid-cols-1 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xl sm:grid-cols-2 lg:absolute  lg:bottom-4 lg:left-1/2 lg:w-11/12 lg:-translate-x-1/2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {cardData.map((card) => (
              <motion.div
                key={card.number}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                className={`relative flex min-h-65 flex-col justify-between gap-4 overflow-hidden border-stone-100 p-6 transition-colors sm:p-8 ${
                  card.dark
                    ? "text-white"
                    : "text-black hover:bg-stone-50"
                } ${
                  card.number === "01"
                    ? "border-b sm:border-r lg:border-b-0"
                    : card.number === "02"
                      ? "border-b sm:border-b-0 lg:border-r"
                      : ""
                }`}
              >
                {card.dark && (
                  <>
                    <img
                      src={featureBg}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#10264A]/85" />
                  </>
                )}

                <div className="relative z-10">
                  <motion.span
                    className={`mb-3 block text-2xl font-black ${
                      card.dark ? "text-[#E5B56E]" : "text-slate-400"
                    }`}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.2 }}
                  >
                    {card.number}
                  </motion.span>

                  <h3
                    className={`mb-2 text-xl font-bold ${
                      card.dark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed ${
                      card.dark ? "text-stone-300" : "text-slate-500"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
