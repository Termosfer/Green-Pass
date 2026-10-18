import { Route, Routes } from "react-router";
import PublicLayout from "../layout/PublicLayout";
import Home from "../pages/Home";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import About from "../pages/About";
import Apply from "../pages/Apply";

const PublicRouter = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        <Route path="/mexfilik-siyaseti" element={<PrivacyPolicy />} />
        <Route path="/istifadeci-sertleri" element={<TermsOfService />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </PublicLayout>
  );
};

export default PublicRouter;
