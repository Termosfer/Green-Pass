import img from "../assets/h1-why-choose-img.webp";
import "../App.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ServicesSlider from "../components/ServicesSlider";
import HowItWorks from "../components/HowItWorks";
import PricingSection from "../components/PricingSection";
import FAQSection from "../components/FAQSection";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <PricingSection />
      <FAQSection />
    </>
  );
};

export default Home;
