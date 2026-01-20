import { RevealSection } from "@/components/RevealSection";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header with Background */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1920&q=80")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy" />
        <div className="relative z-10 section-container">
          <RevealSection>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6 text-center text-shadow">
              About Galaxy Logistics
            </h1>
            <p className="text-silver text-center max-w-2xl mx-auto text-lg">
              A Rwanda-based customs clearance and logistics company focused on 
              reliability and accountability.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-section" />
        <div className="relative z-10 section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <RevealSection>
              <div className="glass-card p-8 h-full">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  Who We Are
                </h2>
                <p className="text-silver leading-relaxed mb-4">
                  Galaxy Logistics operates from Rwanda, providing customs clearance 
                  and logistics services for businesses that require reliable cargo 
                  handling. Our team combines regulatory knowledge with operational 
                  experience to deliver consistent service.
                </p>
                <p className="text-silver leading-relaxed">
                  We work with importers, exporters, and manufacturers who value 
                  compliance, clear communication, and accountability. Our approach 
                  is straightforward: we do what we say, and we communicate clearly 
                  when situations change.
                </p>
              </div>
            </RevealSection>
            
            <RevealSection delay={200}>
              <div className="glass-card p-8 h-full">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                  Our Approach
                </h2>
                <p className="text-silver leading-relaxed mb-4">
                  We focus on the fundamentals: accurate documentation, regulatory 
                  compliance, realistic timelines, and clear communication. These 
                  basics, executed consistently, form the foundation of reliable 
                  customs clearance and logistics.
                </p>
                <p className="text-silver leading-relaxed">
                  We do not promise what we cannot deliver. Clients receive honest 
                  assessments of timelines, clear explanations of requirements, and 
                  prompt notification of any issues. This approach builds trust 
                  through transparency.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Values with Background Image */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80")`,
          }}
        />
        <div className="absolute inset-0 bg-navy/90" />
        <div className="relative z-10 section-container">
          <RevealSection>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground text-center mb-16 text-shadow">
              What We Stand For
            </h2>
          </RevealSection>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            <RevealSection delay={100}>
              <div className="glass-card p-8 text-center h-full hover:border-accent/50 transition-colors duration-300">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-accent/20 rounded-full">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-medium text-foreground mb-4">
                  Reliability
                </h3>
                <p className="text-sm text-silver leading-relaxed">
                  Consistent execution of established procedures. Clients can 
                  depend on us to handle their cargo with the same care and 
                  attention every time.
                </p>
              </div>
            </RevealSection>
            
            <RevealSection delay={200}>
              <div className="glass-card p-8 text-center h-full hover:border-accent/50 transition-colors duration-300">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-accent/20 rounded-full">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-medium text-foreground mb-4">
                  Accountability
                </h3>
                <p className="text-sm text-silver leading-relaxed">
                  We take responsibility for our work. When issues arise, we 
                  address them directly and communicate openly about what 
                  happened and how we're resolving it.
                </p>
              </div>
            </RevealSection>
            
            <RevealSection delay={300}>
              <div className="glass-card p-8 text-center h-full hover:border-accent/50 transition-colors duration-300">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-accent/20 rounded-full">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-medium text-foreground mb-4">
                  Transparency
                </h3>
                <p className="text-sm text-silver leading-relaxed">
                  Clear communication about requirements, timelines, and status. 
                  No surprises. Clients always know where their cargo stands 
                  in the clearance and transport process.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-navy to-deep-blue" />
        <div className="relative z-10 section-container">
          <RevealSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Based in Rwanda
              </h2>
              <p className="text-silver leading-relaxed text-lg">
                Galaxy Logistics is headquartered in Rwanda, with operations 
                coordinated through the country's key ports of entry. Our local 
                presence and regulatory relationships enable efficient customs 
                clearance for cargo entering and leaving the country.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
};

export default About;