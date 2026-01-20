import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle, MapPin, Clock, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-deep-blue to-navy border-t border-border/30">
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Company Info - Takes more space */}
          <div className="lg:col-span-5">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
              Galaxy Logistics
            </h3>
            <p className="text-silver text-sm leading-relaxed mb-6 max-w-sm">
              Professional customs clearance and logistics coordination services. 
              We help businesses navigate import/export processes with reliable, 
              compliant cargo handling across Rwanda.
            </p>
            
            <div className="flex flex-col space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-silver text-sm">
                  Kigali, Rwanda
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-silver text-sm">
                  Mon - Fri: 8:00 AM - 6:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-base font-medium text-foreground mb-5">
              Services
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/clearance" className="text-sm text-silver hover:text-foreground transition-colors">
                Customs Clearance
              </Link>
              <Link to="/logistics" className="text-sm text-silver hover:text-foreground transition-colors">
                Logistics
              </Link>
              <Link to="/services" className="text-sm text-silver hover:text-foreground transition-colors">
                Export Support
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-heading text-base font-medium text-foreground mb-5">
              Company
            </h4>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-sm text-silver hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-silver hover:text-foreground transition-colors">
                About Us
              </Link>
              <a
                href="https://galaxylogistics.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-silver hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                Client Portal
                <ExternalLink size={12} />
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-heading text-base font-medium text-foreground mb-5">
              Get in Touch
            </h4>
            <div className="flex flex-col space-y-4">
              <a
                href="tel:+250780000000"
                className="flex items-center gap-3 text-sm text-silver hover:text-foreground transition-colors group"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-accent/20 rounded group-hover:bg-accent/30 transition-colors">
                  <Phone size={16} className="text-accent" />
                </div>
                <span>+250 780 000 000</span>
              </a>
              <a
                href="mailto:info@galaxylogistics.com"
                className="flex items-center gap-3 text-sm text-silver hover:text-foreground transition-colors group"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-accent/20 rounded group-hover:bg-accent/30 transition-colors">
                  <Mail size={16} className="text-accent" />
                </div>
                <span>info@galaxylogistics.com</span>
              </a>
              <a
                href="https://wa.me/250780000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-silver hover:text-foreground transition-colors group"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-accent/20 rounded group-hover:bg-accent/30 transition-colors">
                  <MessageCircle size={16} className="text-accent" />
                </div>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-silver/70">
              © {new Date().getFullYear()} Galaxy Logistics. All rights reserved.
            </p>
            <p className="text-xs text-silver/70">
              Customs Clearance & Logistics — Rwanda
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}