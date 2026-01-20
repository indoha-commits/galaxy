import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RevealSection } from "@/components/RevealSection";
import { FileText, Truck, Building2 } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80")`,
          }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/70 to-navy/95" />
        
        <div className="relative z-10 section-container text-center py-20">
          <RevealSection delay={100}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground mb-6 text-balance text-shadow">
              Your Cargo, Cleared & Delivered
            </h1>
          </RevealSection>
          
          <RevealSection delay={300}>
            <p className="text-lg md:text-xl text-silver/90 max-w-2xl mx-auto mb-12">
              Expert customs clearance and logistics coordination in Rwanda — precise documentation, full compliance, on-time delivery.
            </p>
          </RevealSection>
          
          <RevealSection delay={500}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
              >
                <a
                  href="https://galaxylogistics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client Login
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-silver/30 text-silver hover:bg-silver/10 hover:text-foreground px-8"
              >
                <Link to="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </RevealSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-silver/50 to-transparent" />
        </div>
      </section>

      {/* Introduction Section - Split and Lightened */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-section" />
        <div className="relative z-10 section-container">
          <RevealSection>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Professional Cargo Handling
              </h2>
              <p className="text-silver/80 max-w-xl mx-auto">
                Rwanda-based customs and logistics expertise you can rely on.
              </p>
            </div>
          </RevealSection>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <RevealSection delay={100}>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-foreground font-medium mb-2">Documentation Accuracy</h3>
                <p className="text-sm text-silver/70 leading-relaxed">
                  Precise paperwork that meets all regulatory requirements the first time.
                </p>
              </div>
            </RevealSection>
            
            <RevealSection delay={200}>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-foreground font-medium mb-2">Regulatory Compliance</h3>
                <p className="text-sm text-silver/70 leading-relaxed">
                  Full adherence to customs laws and trade regulations across all operations.
                </p>
              </div>
            </RevealSection>
            
            <RevealSection delay={300}>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-foreground font-medium mb-2">Operational Discipline</h3>
                <p className="text-sm text-silver/70 leading-relaxed">
                  Structured processes that ensure consistent, predictable outcomes.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Services Overview with Enhanced Cards */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80")`,
          }}
        />
        <div className="absolute inset-0 bg-navy/90" />
        
        <div className="relative z-10 section-container">
          <RevealSection>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground text-center mb-20">
              Core Capabilities
            </h2>
          </RevealSection>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            <RevealSection delay={100}>
              <div className="bg-deep-blue/80 backdrop-blur-sm border border-silver/20 rounded-lg p-8 h-full group hover:border-accent/50 hover:bg-deep-blue/90 transition-all duration-300">
                <div className="w-14 h-14 mb-6 flex items-center justify-center bg-accent/20 rounded-lg border border-accent/30">
                  <FileText className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                  Customs Clearance
                </h3>
                <p className="text-silver/80 leading-relaxed mb-4">
                  Document preparation, tariff classification, and regulatory compliance 
                  for import and export operations.
                </p>
                <Link 
                  to="/clearance" 
                  className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </RevealSection>
            
            <RevealSection delay={200}>
              <div className="bg-deep-blue/80 backdrop-blur-sm border border-silver/20 rounded-lg p-8 h-full group hover:border-accent/50 hover:bg-deep-blue/90 transition-all duration-300">
                <div className="w-14 h-14 mb-6 flex items-center justify-center bg-accent/20 rounded-lg border border-accent/30">
                  <Truck className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                  Logistics Coordination
                </h3>
                <p className="text-silver/80 leading-relaxed mb-4">
                  Transport planning aligned with clearance schedules, ensuring 
                  predictable cargo movement.
                </p>
                <Link 
                  to="/logistics" 
                  className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </RevealSection>
            
            <RevealSection delay={300}>
              <div className="bg-deep-blue/80 backdrop-blur-sm border border-silver/20 rounded-lg p-8 h-full group hover:border-accent/50 hover:bg-deep-blue/90 transition-all duration-300">
                <div className="w-14 h-14 mb-6 flex items-center justify-center bg-accent/20 rounded-lg border border-accent/30">
                  <Building2 className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                  Export Support
                </h3>
                <p className="text-silver/80 leading-relaxed mb-4">
                  Documentation and coordination support for manufacturers 
                  and exporters.
                </p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  Learn more <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-navy to-deep-blue" />
        <div className="relative z-10 section-container text-center">
          <RevealSection>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Work With Us
            </h2>
            <p className="text-silver max-w-xl mx-auto mb-12 text-lg">
              Contact Galaxy Logistics for customs clearance and logistics services in Rwanda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
              >
                <a
                  href="https://galaxylogistics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Client Login
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-silver/30 text-silver hover:bg-silver/10 hover:text-foreground px-8"
              >
                <a href="mailto:info@galaxylogistics.com">
                  Email Us
                </a>
              </Button>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
};

export default Home;