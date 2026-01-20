import { Link } from "react-router-dom";
import { RevealSection } from "@/components/RevealSection";

const services = [
  {
    title: "Customs Clearance",
    description: "We handle the complete customs clearance process for import and export shipments. This includes document preparation, tariff classification, duty calculation, and liaison with customs authorities. Our team ensures all documentation meets regulatory requirements, reducing delays and compliance issues.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    link: "/clearance"
  },
  {
    title: "Logistics Coordination",
    description: "Our logistics coordination service aligns transport schedules with customs clearance timelines. We manage the movement of cargo from port to destination, working with verified transport partners. The focus is on predictability and controlled dispatch rather than speed claims.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80",
    link: "/logistics"
  },
  {
    title: "Manufacturing & Export Support",
    description: "We provide documentation and logistics support for manufacturers and exporters. This includes export permit coordination, certificate of origin processing, and shipping documentation. Our services help businesses navigate the export process with proper compliance.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
    link: "/about"
  },
];

const Services = () => {
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
        <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/85 to-navy" />
        <div className="relative z-10 section-container">
          <RevealSection>
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6 text-center text-shadow">
              Services
            </h1>
            <p className="text-silver text-center max-w-2xl mx-auto text-lg">
              Galaxy Logistics provides customs clearance, logistics coordination, and export 
              support services for businesses operating in and through Rwanda.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section 
          key={service.title}
          className="relative py-20 lg:py-28 overflow-hidden"
        >
          {/* Alternating gradient backgrounds */}
          <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-gradient-section' : 'bg-gradient-to-br from-navy via-deep-blue/50 to-navy'}`} />
          
          <div className="relative z-10 section-container">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
              <RevealSection delay={100}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
                    {service.title}
                  </h2>
                  <p className="text-silver leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </RevealSection>
              
              <RevealSection delay={200}>
                <div className={`relative overflow-hidden rounded ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                    />
                  </div>
                  {/* Subtle gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent pointer-events-none" />
                </div>
              </RevealSection>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;