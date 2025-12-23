import React from 'react';
import { CheckCircle2, ArrowRight, Download } from 'lucide-react';

const servicesList = [
  {
    title: "Strategic Consulting",
    description: "Our experts work with your C-suite to define digital transformation strategies that align with business goals.",
    points: ["Digital Maturity Assessment", "Technology Roadmap", "Risk Management"]
  },
  {
    title: "System Integration",
    description: "Seamlessly integrate Agrud's platforms with your legacy systems to ensure business continuity and data integrity.",
    points: ["API Management", "Legacy Modernization", "Cloud Migration"]
  },
  {
    title: "Data Intelligence Services",
    description: "Turn raw data into actionable insights. We help you structure, analyze, and visualize complex financial datasets.",
    points: ["Big Data Architecture", "Predictive Analytics", "Custom Reporting"]
  },
  {
    title: "Managed Support",
    description: "24/7 dedicated support ensuring your critical financial operations never face downtime.",
    points: ["SLA Guarantees", "Global Helpdesk", "Proactive Monitoring"]
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-light relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Header Column */}
          <div className="md:w-1/3">
            <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">Our Services</span>
            <h2 className="text-4xl font-display font-bold text-brand-dark mt-4 mb-6">Partnering for <br/>Success</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Beyond software, Agrud provides comprehensive consulting and integration services to ensure you maximize value from our technology stack.
            </p>
            <div className="flex flex-col gap-4">
              <button className="flex items-center gap-2 text-brand-primary font-bold hover:text-brand-dark transition-colors group">
                View Service Catalog <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
              </button>
              <button className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-lg text-gray-700 font-medium hover:border-brand-primary hover:text-brand-primary transition-all shadow-sm hover:shadow-md w-fit">
                <Download className="w-5 h-5" />
                Download Brochure
              </button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
            {servicesList.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-primary/30 transition-all hover:shadow-md">
                <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;