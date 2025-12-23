import React from 'react';
import { ShieldCheck, TrendingUp, BarChart3, Globe2, Users, Lock, Server, Cpu } from 'lucide-react';

const solutions = [
  {
    title: "Data Analytics Platform",
    description: "Harness the power of big data with Agrud's proprietary analytics engine, designed to uncover hidden market opportunities.",
    icon: <BarChart3 className="w-8 h-8 text-brand-accent" />
  },
  {
    title: "Regulatory Compliance",
    description: "Automated reporting and compliance tracking for Basel IV, MiFID II, and global regulatory frameworks.",
    icon: <Globe2 className="w-8 h-8 text-brand-accent" />
  },
  {
    title: "Digital Wealth",
    description: "Next-generation wealth management interfaces that provide personalized insights for advisors and clients.",
    icon: <TrendingUp className="w-8 h-8 text-brand-accent" />
  },
  {
    title: "Cyber Security",
    description: "Military-grade encryption and real-time threat detection to protect sensitive financial infrastructure.",
    icon: <Lock className="w-8 h-8 text-brand-accent" />
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable, secure, and resilient cloud architecture for high-frequency trading and data storage.",
    icon: <Server className="w-8 h-8 text-brand-accent" />
  },
  {
    title: "AI & Machine Learning",
    description: "Predictive modeling and automated decision-making powered by advanced AI algorithms.",
    icon: <Cpu className="w-8 h-8 text-brand-accent" />
  }
];

const Features: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">Technological Excellence</span>
          <h2 className="text-4xl font-display font-bold text-brand-dark mt-2 mb-6">Agrud Financial Solutions</h2>
          <p className="text-gray-500 text-lg">
            We provide the infrastructure and intelligence that powers modern financial institutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 border border-gray-100 rounded-xl hover:shadow-2xl transition-all duration-300 bg-white hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-light rounded-bl-full -mr-10 -mt-10 transition-all group-hover:scale-150 group-hover:bg-brand-primary/10"></div>
              
              <div className="mb-6 p-4 bg-brand-dark rounded-lg w-fit group-hover:bg-brand-primary transition-colors shadow-lg shadow-brand-dark/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.description}
              </p>
              
              <div className="mt-6 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-brand-accent w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;