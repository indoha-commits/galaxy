import { RevealSection } from "@/components/RevealSection";
import { FileText, Shield, Clock, Anchor } from "lucide-react";

const aspects = [
  {
    icon: FileText,
    title: "Document-Driven Process",
    description: "Customs clearance is fundamentally a documentation process. We prepare, verify, and submit all required documents including commercial invoices, bills of lading, packing lists, certificates of origin, and import permits. Accuracy in documentation prevents delays and penalties.",
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Rwanda Revenue Authority regulations govern all customs operations. We maintain current knowledge of tariff classifications, duty rates, exemption procedures, and prohibited goods lists. Compliance is not optional—it is the foundation of reliable clearance.",
  },
  {
    icon: Clock,
    title: "Timing Discipline",
    description: "Clearance timelines depend on documentation completeness and customs authority workload. We provide realistic timeframe estimates and communicate any changes promptly. Clients receive updates at each stage of the clearance process.",
  },
  {
    icon: Anchor,
    title: "Port Coordination",
    description: "We coordinate with port authorities, shipping lines, and warehouse operators to facilitate cargo release. This includes managing demurrage considerations, arranging inspections when required, and ensuring proper cargo handover procedures.",
  },
];

const Clearance = () => {
  return (
    <div className="min-h-screen">
      {/* Header with Background */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy" />
        <div className="relative z-10 section-container">
          <RevealSection>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6 text-center text-shadow">
              Customs Clearance
            </h1>
            <p className="text-silver text-center max-w-2xl mx-auto text-lg">
              Professional customs clearance services built on documentation accuracy, 
              regulatory compliance, and operational discipline.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Aspects with Glass Cards */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-section" />
        <div className="relative z-10 section-container">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {aspects.map((aspect, index) => (
              <RevealSection key={aspect.title} delay={index * 100}>
                <div className="glass-card p-8 h-full hover:border-accent/50 transition-colors duration-300">
                  <div className="w-12 h-12 mb-6 flex items-center justify-center bg-accent/20 rounded">
                    <aspect.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-foreground mb-4">
                    {aspect.title}
                  </h3>
                  <p className="text-sm text-silver leading-relaxed">
                    {aspect.description}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Note - Clean Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light/20" />
        <div className="relative z-10 section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <RevealSection>
              <div className="border-l-2 border-accent pl-8">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
                  Clear Process, Clear Communication
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-foreground font-medium mb-2">Upfront Requirements</h3>
                    <p className="text-silver text-sm leading-relaxed">
                      Clients are informed of all document requirements before the process begins.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-2">Progress Updates</h3>
                    <p className="text-silver text-sm leading-relaxed">
                      Regular status updates at each clearance stage keep you informed.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-2">Issue Notification</h3>
                    <p className="text-silver text-sm leading-relaxed">
                      Immediate alerts when any issues require your attention.
                    </p>
                  </div>
                </div>
              </div>
            </RevealSection>
            
            <RevealSection delay={200}>
              <div className="glass-card p-8">
                <p className="text-silver leading-relaxed">
                  This approach minimizes surprises and enables proper planning. 
                  Our established procedures create predictable outcomes, allowing 
                  you to focus on your business operations.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clearance;