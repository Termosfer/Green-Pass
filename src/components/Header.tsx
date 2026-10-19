
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "../assets/logo-header.png";

const navLinks = [
  { name: "Ana Səhifə", path: "/" },
  { name: "Haqqımızda", path: "/about" },
  { name: "Xidmətlər", path: "/services" },
  { name: "Əlaqə", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();
  const [mobileMenuOpenForPath, setMobileMenuOpenForPath] =
    useState<string | null>(null);
  const mobileMenuOpen = mobileMenuOpenForPath === location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpenForPath(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => setMobileMenuOpenForPath(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#10264A]/95 backdrop-blur-xl shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 ${
            isScrolled ? "py-2" : "py-3 sm:py-5"
          }`}
        >
          <nav
            className={`relative flex min-h-15 items-center justify-between gap-3 transition-all duration-300 ${
              isScrolled
                ? ""
                : "rounded-full border border-white/30 bg-[#10264A]/40 px-4 shadow-lg backdrop-blur-xl sm:px-6"
            }`}
            aria-label="Əsas naviqasiya"
          >
            <Link
              to="/"
              onClick={closeMenu}
              className="flex shrink-0 items-center"
              aria-label="Green Pass - Ana səhifə"
            >
              <img
                src={logo}
                alt="Green Pass"
                width={100}
                height={50}
                className="h-auto w-19 object-contain sm:w-22.5 lg:w-25"
              />
            </Link>

            <div className="hidden md:flex flex-1 items-center justify-center">
              <ul className="flex items-center gap-4 rounded-full bg-white px-5 py-3 shadow-md lg:gap-7 lg:px-8">
                {navLinks.map((link) => (
                  <li key={link.path} className="group relative">
                    <Link
                      to={link.path}
                      aria-current={
                        isActive(link.path) ? "page" : undefined
                      }
                      className={`block whitespace-nowrap text-xs font-semibold transition-colors duration-300 lg:text-sm ${
                        isActive(link.path)
                          ? "text-[#0648BC]"
                          : "text-gray-700 hover:text-[#0648BC]"
                      }`}
                    >
                      {link.name}
                    </Link>

                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 w-full origin-center rounded-full bg-[#0648BC] transition-transform duration-300 ${
                        isActive(link.path)
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden md:flex shrink-0 items-center">
              <Link
                to="/apply"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#B42336] px-4 py-3 text-xs font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#8A1B29] sm:px-5 lg:px-6 lg:text-sm"
              >
                <span>Müraciət et</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <button
              type="button"
              onClick={() =>
                setMobileMenuOpenForPath((current) =>
                  current === location.pathname ? null : location.pathname,
                )
              }
              aria-label={
                mobileMenuOpen ? "Menyunu bağla" : "Menyunu aç"
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="flex h-11 w-11 shrink-0 items-center justify-center  md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </nav>
        </div>
      </div>

      <div
        id="mobile-navigation"
        aria-label="Mobil naviqasiya"
        aria-hidden={!mobileMenuOpen}
        className={`absolute left-0 right-0 top-full px-4 transition-all duration-300 md:hidden ${
          mobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto mt-2 max-w-150 overflow-hidden rounded-2xl border border-white/15 bg-[#10264A]/98 p-4 text-white shadow-2xl backdrop-blur-2xl sm:p-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={closeMenu}
                  aria-current={
                    isActive(link.path) ? "page" : undefined
                  }
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors sm:text-base ${
                    isActive(link.path)
                      ? "bg-white/15 text-white"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <span>{link.name}</span>

                  {isActive(link.path) && (
                    <span className="h-2 w-2 rounded-full bg-[#B42336]" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobil müraciət düyməsi */}
          <div className="mt-4 border-t border-white/15 pt-4">
            <Link
              to="/apply"
              onClick={closeMenu}
              tabIndex={mobileMenuOpen ? 0 : -1}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#B42336] px-5 py-3.5 text-sm font-bold text-white shadow-lg transition-colors hover:bg-[#8A1B29] sm:text-base"
            >
              <span>Müraciət et</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
