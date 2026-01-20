import { RevealSection } from "@/components/RevealSection";
import { Truck, CalendarCheck, ClipboardList, Settings } from "lucide-react";

const principles = [
  {
    icon: CalendarCheck,
    title: "Transport Aligned with Clearance",
    description: "Transport scheduling begins after clearance status is confirmed. We do not dispatch vehicles on speculation. This alignment prevents demurrage charges and ensures cargo moves only when documentation is complete.",
  },
  {
    icon: Truck,
    title: "Predictability Over Speed",
    description: "We focus on reliable timelines rather than speed promises. Clients receive realistic delivery estimates based on actual clearance status and route conditions. Predictability enables proper business planning.",
  },
  {
    icon: ClipboardList,
    title: "Controlled Dispatch",
    description: "Every dispatch follows a verification checklist: clearance confirmed, documentation complete, vehicle inspected, driver briefed. This controlled approach reduces errors and ensures cargo integrity throughout transit.",
  },
  {
    icon: Settings,
    title: "Operational Discipline",
    description: "Our logistics operations follow established procedures consistently. From vehicle selection to delivery confirmation, each step is documented. This discipline creates accountability and enables issue resolution when needed.",
  },
];

const Logistics = () => {
  return (
    <div className="min-h-screen">
      {/* Header with Background */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/80 to-navy" />
        <div className="relative z-10 section-container">
          <RevealSection>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6 text-center text-shadow">
              Logistics
            </h1>
            <p className="text-silver text-center max-w-2xl mx-auto text-lg">
              Transport coordination that prioritizes predictability, operational 
              discipline, and alignment with customs clearance processes.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Principles with Enhanced Cards */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-section" />
        <div className="relative z-10 section-container">
          <RevealSection>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground text-center mb-16">
              Operating Principles
            </h2>
          </RevealSection>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {principles.map((principle, index) => (
              <RevealSection key={principle.title} delay={index * 100}>
                <div className="glass-card p-8 h-full hover:border-accent/50 transition-colors duration-300">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 flex items-center justify-center bg-accent/20 rounded">
                        <principle.icon className="w-7 h-7 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-medium text-foreground mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-sm text-silver leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section - Clean Layout */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light/20" />
        <div className="relative z-10 section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <RevealSection>
              <div className="border-l-2 border-accent pl-8">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-8">
                  Integrated with Clearance
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-foreground font-medium mb-2">Real-Time Status</h3>
                    <p className="text-silver text-sm leading-relaxed">
                      Transport planning benefits from live clearance status updates.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-2">Reduced Waiting</h3>
                    <p className="text-silver text-sm leading-relaxed">
                      Coordination eliminates delays between clearance and dispatch.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-2">Single Point of Contact</h3>
                    <p className="text-silver text-sm leading-relaxed">
                      One communication channel for both clearance and transport.
                    </p>
                  </div>
                </div>
              </div>
            </RevealSection>
            
            <RevealSection delay={200}>
              <div className="relative overflow-hidden rounded">
                <div className="aspect-video overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80"
                    alt="Transport coordination"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logistics;