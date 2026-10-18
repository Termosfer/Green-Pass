import "../App.css";
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
