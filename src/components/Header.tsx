import  { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/logo1.jfif";

const navLinks = [
  { name: "Ana Səhifə", path: "/" },
  { name: "Haqqımızda", path: "/about" },
  { name: "Xidmətlər", path: "/services" },
  { name: "Əlaqə", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out">
      <div
        className={`mx-auto transition-all duration-500 ease-out ${
          isScrolled
            ? "w-full px-6 md:px-16  bg-[#10264A]/85 backdrop-blur-xl  shadow-xl"
            : "max-w-9xl px-4 md:px-8 pt-5"
        }`}
      >
        <nav
          className={`flex items-center justify-between transition-all duration-500 ease-out ${
            isScrolled
              ? "py-0"
              : "px-6 md:px-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
          }`}
        >
          <Link to="/" className="flex items-center shrink-0 group">
            <img
              src={logo}
              alt="Green Pass"
              className=" "
              width={100} height={50}
            />
          </Link>

          <div className="hidden md:flex items-center">
            <ul className="flex items-center gap-7 px-8 py-2.5 rounded-full bg-white shadow-md">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <li key={link.name} className="relative group py-1">
                    <Link
                      to={link.path}
                      className={`text-sm font-semibold transition-colors duration-300 block select-none ${
                        isActive
                          ? "text-[#0648bc] font-bold"
                          : "text-gray-700 hover:text-[#0648bc]"
                      }`}
                    >
                      {link.name}
                    </Link>

                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0648bc] rounded-full transition-transform duration-300 ease-out origin-center ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="hidden md:flex items-center">
            <Link
              to="/apply"
              className="group inline-flex items-center gap-2 bg-[#b42336] hover:bg-[#8a1b29] text-white font-bold px-6 py-2.5 rounded-full transition-all duration-300 text-sm shadow-md hover:shadow-[#8a1b29]/30 hover:scale-105"
            >
              <span>Müraciət et</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menyu"
            className="md:hidden text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      
      {mobileMenuOpen && (
        <div className="md:hidden mx-4 mt-2 p-6 rounded-3xl bg-[#10264A]/95 backdrop-blur-2xl border border-white/15 shadow-2xl text-white animate-in fade-in slide-in-from-top-3 duration-300">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 px-4 rounded-xl text-base font-semibold hover:bg-white/10 hover:text-[#10264A] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-5 pt-4 border-t border-white/10">
            <Link
              to="/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full bg-[#b42336] hover:bg-[#8a1b29] font-bold text-sm text-white flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Müraciət Et</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;