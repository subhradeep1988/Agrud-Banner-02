import React from 'react';
import { ArrowRight, PlayCircle, BarChart2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center bg-brand-dark">
      {/* Video Background - Financial/Network Motion Graphics */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
          poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
        >
          {/* Abstract blue network/financial data video */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-blue-network-connection-background-31653-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-graphic-animation-of-futuristic-devices-99-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay Gradients for readability and depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
        
        {/* Decorative Grid Overlay for "Financial Data" feel */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center pt-20">
        <div className="max-w-4xl space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/20 backdrop-blur-md border border-brand-primary/30 rounded-full text-brand-accent text-sm font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(0,212,255,0.3)]">
            <BarChart2 className="w-4 h-4" />
            <span className="tracking-widest">Next Gen Financial Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight tracking-tight drop-shadow-lg">
            Data Driven <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-blue-300 to-white">
              Decision Making
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-2xl font-light leading-relaxed border-l-4 border-brand-primary pl-6 drop-shadow-md">
            Agrud empowers financial institutions with advanced data analytics, regulatory compliance, and digital transformation solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-8">
            <button className="group bg-white text-brand-dark hover:bg-brand-accent hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]">
              Explore Our Platform
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm">
              <PlayCircle className="w-5 h-5 text-brand-accent" />
              Who We Are
            </button>
          </div>
        </div>
      </div>

      {/* Financial Ticker Effect (Static Simulation) */}
      <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-md border-t border-white/10 py-3 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap text-xs font-mono text-brand-accent">
          <span>EUR/USD 1.0845 ▲</span>
          <span>GBP/USD 1.2630 ▼</span>
          <span>USD/JPY 148.12 ▲</span>
          <span>BTC/USD 42,120 ▲</span>
          <span>ETH/USD 2,250 ▲</span>
          <span>AGRUD INTELLIGENCE INDEX: 98.4 ▲</span>
          <span>DATA FLOW: OPTIMAL</span>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;