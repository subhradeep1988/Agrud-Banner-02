import React from 'react';
import { CheckCircle2, ArrowRight, Download, FileText } from 'lucide-react';

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
  
  const handleDownloadBrochure = () => {
    // Create a standalone HTML structure for the brochure
    const brochureContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Agrud Corporate Overview</title>
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 40px; }
          .header { text-align: center; border-bottom: 2px solid #00d4ff; padding-bottom: 20px; margin-bottom: 40px; }
          .logo { font-size: 32px; font-weight: bold; color: #02182B; letter-spacing: -1px; }
          .accent { color: #00d4ff; }
          h1 { color: #02182B; font-size: 28px; margin-bottom: 10px; }
          h2 { color: #004aad; font-size: 20px; margin-top: 30px; border-left: 4px solid #00d4ff; padding-left: 10px; }
          p { margin-bottom: 15px; }
          .service-item { background: #f8fafc; padding: 20px; margin-bottom: 20px; border-radius: 8px; border: 1px solid #e2e8f0; }
          .footer { margin-top: 50px; font-size: 12px; text-align: center; color: #888; border-top: 1px solid #eee; padding-top: 20px; }
          ul { list-style-type: none; padding: 0; }
          li::before { content: "✓ "; color: #00d4ff; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">AGRUD<span class="accent">.</span></div>
          <p>Next Gen Financial Intelligence</p>
        </div>

        <h1>Corporate Overview</h1>
        <p>Agrud is a global leader in financial technology and data intelligence, helping institutions navigate the complexities of the digital economy with confidence. We provide the infrastructure and intelligence that powers modern financial institutions.</p>

        <h1>Our Expertise</h1>
        <p>We deliver top-tier software solutions that drive efficiency and compliance for the financial services industry, including Data Analytics, Regulatory Compliance, and Digital Wealth Management.</p>

        <h1>Services Portfolio</h1>
        ${servicesList.map(s => `
          <div class="service-item">
            <h2>${s.title}</h2>
            <p>${s.description}</p>
            <ul>
              ${s.points.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>
        `).join('')}

        <div class="footer">
          <p><strong>Contact Us:</strong> contact@agrud.com | +44 20 7123 4567</p>
          <p>London | New York | Tunis | Paris</p>
          <p>&copy; ${new Date().getFullYear()} Agrud. All Rights Reserved.</p>
        </div>
      </body>
      </html>
    `;

    // Create a Blob from the content
    const blob = new Blob([brochureContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary link element and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Agrud_Corporate_Profile.html';
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

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
              <button 
                onClick={handleDownloadBrochure}
                className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-lg text-gray-700 font-medium hover:border-brand-primary hover:text-brand-primary transition-all shadow-sm hover:shadow-md w-fit active:scale-95"
              >
                <Download className="w-5 h-5" />
                Download Brochure
              </button>
              <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                <FileText className="w-3 h-3" />
                Available as standalone offline file
              </p>
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