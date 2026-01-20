import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Clearance", path: "/clearance" },
  { label: "Logistics", path: "/logistics" },
  { label: "About", path: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-heading text-xl lg:text-2xl font-semibold text-foreground">
              Galaxy Logistics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link text-sm tracking-wide uppercase ${
                  location.pathname === item.path
                    ? "text-foreground"
                    : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center space-x-6">
            <span className="text-sm text-muted-foreground tracking-wide">
              Rwanda
            </span>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <a
                href="https://quartz-mug-31247526.figma.site"
                target="_blank"
                rel="noopener noreferrer"
              >
                Client Login
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/30">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm tracking-wide uppercase py-2 ${
                    location.pathname === item.path
                      ? "text-foreground"
                      : "text-foreground/70"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/30 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Rwanda</span>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <a
                    href="https://quartz-mug-31247526.figma.site"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Client Login
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}